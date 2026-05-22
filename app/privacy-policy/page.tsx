import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Varsity Mulching LLC.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="px-4 pt-36 pb-20 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: May 15, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-vm-navy/80">
            <p>
              At Varsity Mulching, we value your privacy and are committed to protecting
              the personal information you share with us. This Privacy Policy explains
              how we collect, use, and safeguard your information when you visit our
              website or use our services.
            </p>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">1. Information We Collect</h2>
              <p className="mt-3">
                We only collect information that you voluntarily provide to us. This may include:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li>
                  <span className="font-semibold text-vm-navy">Contact Information:</span>{" "}
                  Your name, phone number, email address, and physical service address
                  when you fill out a quote request or contact form.
                </li>
                <li>
                  <span className="font-semibold text-vm-navy">Service Details:</span>{" "}
                  Information about your property or specific mulching/landscaping needs
                  to help us provide accurate estimates.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">2. How We Use Your Information</h2>
              <p className="mt-3">
                We use the information we collect strictly to run our business and serve
                you. This includes:
              </p>
              <ul className="mt-3 space-y-2 pl-4 list-disc list-inside">
                <li>Providing, estimating, and scheduling our mulching and landscaping services.</li>
                <li>Responding to your questions, comments, or customer service requests.</li>
                <li>
                  Sending occasional updates or promotional offers about our seasonal
                  services (you can opt out at any time).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">3. Sharing Your Information</h2>
              <p className="mt-3">
                We do not sell, rent, or lease your personal information to third parties.
              </p>
              <p className="mt-3">
                We only share your information with trusted third-party service providers
                who help us operate our website or conduct our business (such as email
                delivery services or scheduling software), and these parties are required
                to keep your information confidential. We may also disclose information
                if required by law.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">4. Cookies and Tracking</h2>
              <p className="mt-3">
                Our website may use standard cookies to improve your browsing experience
                and analyze website traffic. You can choose to disable cookies through
                your individual browser settings, though it may affect how certain
                features of the site function.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">5. Data Security</h2>
              <p className="mt-3">
                We implement reasonable security measures to protect your personal
                information from unauthorized access, alteration, or disclosure. However,
                please note that no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">6. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time to reflect changes
                in our practices or for legal reasons. Any updates will be posted directly
                on this page with an updated &ldquo;Effective Date.&rdquo;
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-vm-navy text-base">7. Contact Us</h2>
              <p className="mt-3">
                If you have any questions or concerns about this Privacy Policy or how
                your data is handled, please contact us at:
              </p>
              <ul className="mt-3 space-y-1 pl-4">
                <li>
                  <span className="font-semibold text-vm-navy">Email:</span>{" "}
                  <a href="mailto:matthewg@varsitymulching.com" className="text-vm-blue-dark hover:underline">
                    matthewg@varsitymulching.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-vm-navy">Phone:</span>{" "}
                  <a href="tel:+12673899789" className="text-vm-blue-dark hover:underline">
                    (267) 389-9789
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
