import { MessageCircle } from "lucide-react";
import Logo from "@/assets/images/logo.png";

const WA_NUMBER = "34691581183";
const LI_URL = "https://www.linkedin.com/in/diego-fuertes-moreno-695822253";
const EMAIL = "diegolabsstudio@gmail.com";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(201,168,76,0.07)",
        padding: "1.75rem clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Marca */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="DiegoStudio" style={{ height: "clamp(50px, 8vw, 90px)", width: "auto" }} />
        </a>

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.06em",
            color: "#3A3733",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#8C8680")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#3A3733")}
        >
          {EMAIL}
        </a>

        {/* Iconos sociales + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{ color: "#3A3733", transition: "color 0.2s ease" }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#25D366")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#3A3733")}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
          </a>

          <a
            href={LI_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#3A3733", transition: "color 0.2s ease" }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#0A66C2")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#3A3733")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "#3A3733",
              borderLeft: "1px solid rgba(201,168,76,0.1)",
              paddingLeft: "1rem",
            }}
          >
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
