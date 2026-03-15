import InnerPageLayout from "@/components/layout/InnerPageLayout";

export default function PrivacyPage() {
  return (
    <InnerPageLayout>
      <section style={{ marginTop: "100px", background: "#FFFFFF" }} className="section-padding">
        <div className="container-custom" style={{ maxWidth: "800px" }}>
          <h1
            className="font-display mb-8"
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#2C2C2C",
              lineHeight: 1.3,
            }}
          >
            Privacy Policy
          </h1>

          <div className="space-y-6" style={{ color: "#555", fontSize: "15px", lineHeight: 1.8 }}>
            <p>
              Garden & Driveways Ltd is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you fill in our contact form, including your name, email address, phone number, and postcode. We also collect standard web analytics data such as pages visited and time spent on the site.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              How We Use Your Information
            </h2>
            <p>
              Your information is used solely to respond to your enquiries, arrange design consultations, and improve our services. We will never sell or share your personal data with third parties for marketing purposes.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at design@gardenanddriveways.co.uk.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us at design@gardenanddriveways.co.uk or call 01892 489 923.
            </p>

            <p style={{ marginTop: "40px", color: "#999", fontSize: "13px" }}>
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
