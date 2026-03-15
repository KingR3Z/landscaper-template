import InnerPageLayout from "@/components/layout/InnerPageLayout";

export default function AccessibilityPage() {
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
            Accessibility Statement
          </h1>

          <div className="space-y-6" style={{ color: "#555", fontSize: "15px", lineHeight: 1.8 }}>
            <p>
              Garden & Driveways Ltd is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Our Commitment
            </h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines help make web content more accessible to people with disabilities, including visual, auditory, cognitive, and motor impairments.
            </p>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Measures We Take
            </h2>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
              <li>Semantic HTML for clear document structure</li>
              <li>Descriptive alt text for all images</li>
              <li>Sufficient colour contrast ratios</li>
              <li>Keyboard-navigable interactive elements</li>
              <li>Responsive design for all screen sizes</li>
            </ul>

            <h2 style={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 500, marginTop: "32px" }}>
              Feedback
            </h2>
            <p>
              We welcome your feedback on the accessibility of this website. If you encounter any barriers or have suggestions for improvement, please contact us at design@gardenanddriveways.co.uk or call 01892 489 923.
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
