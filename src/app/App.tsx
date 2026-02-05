import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Events } from "@/pages/Events";
import { Contact } from "@/pages/Contact";
import { Careers } from "@/pages/Careers";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfService } from "@/pages/TermsOfService";
import { CookiePolicy } from "@/pages/CookiePolicy";
import { LegalDisclaimer } from "@/pages/LegalDisclaimer";

// Placeholder for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-slate-500">This page is under construction.</p>
  </div>
);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="hashx-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="events" element={<Events />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
            <Route path="verify" element={<Placeholder title="Verify your Achievement" />} />
            <Route path="products" element={<Placeholder title="Products" />} />
            <Route path="education" element={<Placeholder title="Education at HashX" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
