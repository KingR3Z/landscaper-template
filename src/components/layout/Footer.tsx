"use client";

import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/navigation";

export default function Footer() {
  return (
    <footer style={{ background: "#C1C7BF" }}>
      <div className="container-custom" style={{ paddingTop: "100px", paddingBottom: "40px" }}>
        {/* Logo */}
        <div style={{ marginBottom: "0" }}>
          <Link href="/">
            <Image
              src="/images/logo-gd.png"
              alt="Garden & Driveways"
              width={180}
              height={90}
              style={{ objectFit: "contain", height: "100px", width: "auto" }}
            />
          </Link>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 400,
              color: "#2C2713",
              letterSpacing: "0.15em",
              marginTop: "6px",
              opacity: 0.7,
            }}
          >
            {footerData.subtitle}
          </p>
        </div>

        {/* Divider — flush against logo bottom */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #2A2C29",
            margin: "0",
            marginTop: "20px",
          }}
        />

        {/* Footer Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "clamp(32px, 5vw, 80px)", marginTop: "clamp(60px, 6vw, 97px)" }}
        >
          {/* Column 1: GET IN TOUCH */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#2C2713",
                letterSpacing: "normal",
                marginBottom: "clamp(30px, 4vw, 59px)",
              }}
            >
              {footerData.contact.heading}
            </h3>
            <div style={{ lineHeight: "22.4px" }}>
              {footerData.contact.address.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#000000",
                    lineHeight: "22.4px",
                    margin: 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
            <div style={{ marginTop: "clamp(24px, 3vw, 47px)" }}>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`}
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "22.4px",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {footerData.contact.phone}
              </a>
              <a
                href={`mailto:${footerData.contact.email}`}
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "22.4px",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {footerData.contact.email}
              </a>
            </div>
          </div>

          {/* Column 2: MENU */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#2C2713",
                letterSpacing: "normal",
                marginBottom: "clamp(30px, 4vw, 59px)",
              }}
            >
              {footerData.menu.heading}
            </h3>
            <nav style={{ lineHeight: "22.4px" }}>
              {footerData.menu.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:opacity-60 transition-opacity"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#000000",
                    lineHeight: "22.4px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div style={{ marginTop: "clamp(24px, 3vw, 45px)" }}>
              {footerData.menu.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:opacity-60 transition-opacity"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#000000",
                    lineHeight: "22.4px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: FOLLOW US */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#2C2713",
                letterSpacing: "normal",
                marginBottom: "clamp(30px, 4vw, 59px)",
              }}
            >
              {footerData.socials.heading}
            </h3>
            <nav style={{ lineHeight: "22.4px" }}>
              {footerData.socials.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block hover:opacity-60 transition-opacity"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#000000",
                    lineHeight: "22.4px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Award Badges */}
          <div>
            <div className="flex gap-5 flex-wrap">
              {/* Design Badge */}
              <div
                style={{
                  width: "198px",
                  height: "192px",
                  background: "rgba(44, 44, 44, 0.9)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                <div className="text-center">
                  <p
                    style={{
                      color: "#C9A96E",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    DESIGN
                  </p>
                  <p
                    className="font-display"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      fontStyle: "italic",
                      lineHeight: 1.2,
                      margin: "8px 0 4px",
                    }}
                  >
                    Best of Houzz
                  </p>
                  <p style={{ color: "#FFFFFF", fontSize: "12px", letterSpacing: "0.05em", margin: 0 }}>
                    Winner
                  </p>
                  <p
                    className="font-display"
                    style={{
                      color: "#C9A96E",
                      fontSize: "28px",
                      fontWeight: 400,
                      marginTop: "8px",
                      margin: "8px 0 0",
                    }}
                  >
                    2026
                  </p>
                </div>
              </div>

              {/* Service Badge */}
              <div
                style={{
                  width: "198px",
                  height: "192px",
                  background: "rgba(44, 44, 44, 0.9)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                <div className="text-center">
                  <p
                    style={{
                      color: "#C9A96E",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    SERVICE
                  </p>
                  <p
                    className="font-display"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      fontStyle: "italic",
                      lineHeight: 1.2,
                      margin: "8px 0 4px",
                    }}
                  >
                    Best of Houzz
                  </p>
                  <p style={{ color: "#FFFFFF", fontSize: "12px", letterSpacing: "0.05em", margin: 0 }}>
                    Winner
                  </p>
                  <p
                    className="font-display"
                    style={{
                      color: "#C9A96E",
                      fontSize: "28px",
                      fontWeight: 400,
                      margin: "8px 0 0",
                    }}
                  >
                    2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#000000",
            lineHeight: "22.4px",
            marginTop: "clamp(40px, 4vw, 60px)",
          }}
        >
          &copy; {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
