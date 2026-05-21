import RevealOnScroll from "./RevealOnScroll";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "34691581183";
const LI_URL = "https://www.linkedin.com/in/diego-fuertes-moreno-695822253";
const EMAIL = "diegolabsstudio@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)",
        borderTop: "1px solid rgba(201,168,76,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow de fondo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <RevealOnScroll>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "1.5rem",
            }}
          >
            Trabajemos juntos
          </p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
              fontWeight: 600,
              color: "#F2EDE4",
              lineHeight: 1,
              margin: "0 0 1.5rem",
            }}
          >
            Construyamos algo
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(201,168,76,0.4)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              que venda.
            </span>
          </h2>

          <p
            style={{
              color: "#8C8680",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: "0 auto 1.25rem",
            }}
          >
            ¿Tienes un negocio, eres autónomo o quieres dar a conocer tu marca?
            Escríbeme y te digo qué necesitas — sin rodeos ni presupuestos inflados.
          </p>
          <p
            style={{
              color: "#3A3733",
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              margin: "0 auto 3.5rem",
            }}
          >
            Puedes contactarme por correo o directamente por WhatsApp.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          {/* Email principal */}
          <a
            href={`mailto:${EMAIL}`}
            className="email-link"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
              display: "inline-block",
              marginBottom: "3rem",
            }}
          >
            {EMAIL}
          </a>

          <div style={{ marginBottom: "3rem" }}>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-gold-solid"
              style={{ padding: "1rem 2.5rem" }}
            >
              Enviar mensaje
            </a>
          </div>

          {/* Iconos sociales */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid rgba(201,168,76,0.15)",
                color: "#8C8680",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#25D366";
                (e.currentTarget as HTMLAnchorElement).style.color = "#25D366";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#8C8680";
              }}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
            </a>

            <a
              href={LI_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid rgba(201,168,76,0.15)",
                color: "#8C8680",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0A66C2";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0A66C2";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#8C8680";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
