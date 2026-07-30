-- Varsity Mulching: Supabase schema for the public quote-request form.
--
-- How to apply:
--   1. Open your Supabase project → SQL Editor → New query
--   2. Paste this file and run it
--   3. Copy the project URL + service role key into the Next.js env vars
--      (see .env.example)
--
-- Re-running this file is safe: every statement is idempotent.

create extension if not exists "pgcrypto";

create table if not exists public.quote_requests (
    id uuid primary key default gen_random_uuid(),
    created_at timestamptz not null default now(),

    source text not null default 'varsitymulching.com',
    page_slug text,

    -- Contact info
    first_name text,
    last_name text,
    email text,
    phone text,

    -- Address (parts + computed single-line for convenience)
    street_address text,
    city text,
    state text,
    zip text,
    full_address text,

    -- Form-specific fields
    services text[] not null default '{}',
    service_primary text,
    yard_size text,
    job_timing text,
    message text,

    -- Attribution
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_term text,
    utm_content text,
    gclid text,
    fbclid text,

    -- Quote-scheduler (Flask backend) integration tracking
    scheduler_status text not null default 'pending',
    scheduler_sid text,
    scheduler_schedule_url text,
    scheduler_routing_zone text,
    scheduler_error text,

    -- Raw payload + request metadata for debugging
    raw_payload jsonb not null default '{}'::jsonb,
    user_agent text,
    ip_address text
);

create index if not exists quote_requests_created_at_idx
    on public.quote_requests (created_at desc);

create index if not exists quote_requests_email_idx
    on public.quote_requests (email);

create index if not exists quote_requests_scheduler_status_idx
    on public.quote_requests (scheduler_status);

-- Row-level security: lock the table down. The Next.js API route uses the
-- service-role key, which bypasses RLS. The anon / authenticated keys can do
-- nothing here, which is what we want for a public-write form.
alter table public.quote_requests enable row level security;

-- Drop any prior policies so re-running this script doesn't fail.
drop policy if exists "quote_requests block anon" on public.quote_requests;
drop policy if exists "quote_requests block authenticated" on public.quote_requests;

-- Explicitly DENY everything for non-service-role clients. (RLS denies by
-- default when no policy matches, so these are belt-and-suspenders.)
create policy "quote_requests block anon"
    on public.quote_requests
    for all
    to anon
    using (false)
    with check (false);

create policy "quote_requests block authenticated"
    on public.quote_requests
    for all
    to authenticated
    using (false)
    with check (false);
