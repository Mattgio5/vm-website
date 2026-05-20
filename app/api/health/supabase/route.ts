import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type Result = {
  env: {
    supabase_url: boolean
    service_role_key: boolean
  }
  reachable: boolean
  row_count: number | null
  error: string | null
}

/**
 * GET /api/health/supabase
 *
 * Read-only probe that reports whether the Supabase admin client is
 * configured and whether it can reach the `quote_requests` table.
 * Returns only metadata (env-var presence as booleans + a row count) —
 * never row contents — so this is safe to keep around for monitoring.
 */
export async function GET(): Promise<Response> {
  const env: Result["env"] = {
    supabase_url: Boolean(
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
    ),
    service_role_key: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  }

  if (!env.supabase_url || !env.service_role_key) {
    const result: Result = {
      env,
      reachable: false,
      row_count: null,
      error: "Supabase env vars not configured",
    }
    return NextResponse.json(result, { status: 503 })
  }

  try {
    const supabase = getSupabaseAdmin()
    const { count, error } = await supabase
      .from("quote_requests")
      .select("*", { count: "exact", head: true })
    if (error) {
      const result: Result = {
        env,
        reachable: false,
        row_count: null,
        error: error.message,
      }
      return NextResponse.json(result, { status: 503 })
    }
    const result: Result = {
      env,
      reachable: true,
      row_count: count ?? 0,
      error: null,
    }
    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    const result: Result = {
      env,
      reachable: false,
      row_count: null,
      error: message,
    }
    return NextResponse.json(result, { status: 503 })
  }
}
