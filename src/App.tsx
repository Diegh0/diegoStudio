import { HeroSection } from "@/components/ui/3d-hero-section-boxes";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "34691581183";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 100,
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "9999px",
        boxShadow: "0 2px 16px rgba(37,211,102,0.25)",
        textDecoration: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.4)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 16px rgba(37,211,102,0.25)";
      }}
    >
      <MessageCircle size={22} strokeWidth={1.5} />
    </a>
  );
}

export default function App() {
  return (
    <>
      <HeroSection />
      <main>
        <Work />
        <Services />
        <Contact />
        <TrustedBy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
