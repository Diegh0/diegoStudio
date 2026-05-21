import RevealOnScroll from "./RevealOnScroll";

const facts = [
  { value: "6 años", label: "Construyendo software en producción" },
  { value: "B2B SaaS", label: "Especialización principal" },
  { value: "Remoto", label: "Trabajo donde lo necesites" },
  { value: "Directo", label: "Sin intermediarios ni cuentas comerciales" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(5rem, 12vw, 9rem) clamp(1.5rem, 4vw, 3rem)",
        borderTop: "1px solid rgba(201,168,76,0.06)",
        background: "#0A0907",
      }}
    >
      <div
        className="two-col"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
      >
        {/* Izquierda: cita + stats */}
        <RevealOnScroll>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "2rem",
            }}
          >
            Sobre mí
          </p>

          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 4vw, 3.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#F2EDE4",
              lineHeight: 1.15,
              margin: "0 0 3rem",
            }}
          >
            &ldquo;Seis años convirtiendo ideas en productos{" "}
            <span style={{ color: "#C9A84C" }}>
              que realmente funcionan.&rdquo;
            </span>
          </blockquote>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem 2rem",
            }}
          >
            {facts.map((fact) => (
              <div key={fact.value} className="stat-item">
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#F2EDE4",
                    marginBottom: "0.2rem",
                  }}
                >
                  {fact.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#3A3733",
                  }}
                >
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Derecha: bio */}
        <RevealOnScroll delay={0.15}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "3.5rem",
            }}
          >
            <p style={{ color: "#8C8680", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              Soy desarrollador full-stack con foco en B2B SaaS, fintech y
              e-commerce. Trabajo directamente con fundadores, equipos de
              producto y agencias que necesitan un socio técnico—no un proveedor
              que desaparece después del kickoff.
            </p>
            <p style={{ color: "#8C8680", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              Mi diferencial: pienso en sistemas, no en funcionalidades. Entrego
              rápido, escribo código mantenible y me comunico con claridad.
              Obtienes un producto que funciona, plazos reales y sin sorpresas.
            </p>
            <p style={{ color: "#8C8680", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              Si tienes un proyecto que necesita hacerse bien y a tiempo, ahí es
              donde mejor trabajo.
            </p>

            <a href="#contact" className="arrow-link" style={{ marginTop: "1rem" }}>
              Empecemos una conversación →
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
