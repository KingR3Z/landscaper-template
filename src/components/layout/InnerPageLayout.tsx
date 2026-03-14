"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface InnerPageLayoutProps {
  children: React.ReactNode;
  navVariant?: string;
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
