import RevealOnScroll from "./RevealOnScroll";

const services = [
  {
    number: "01",
    title: "Webs para negocios",
    description:
      "Páginas rápidas, claras y enfocadas en convertir visitas en clientes. Diseñadas para transmitir confianza y facilitar el contacto desde el primer scroll.",
    tags: ["Landing Pages", "Conversión", "SEO"],
  },
  {
    number: "02",
    title: "Herramientas a medida",
    description:
      "Soluciones personalizadas para organizar, automatizar y escalar procesos. Desde paneles de gestión hasta sistemas adaptados a cada negocio.",
    tags: ["Automatización", "Paneles", "Sistemas"],
  },
  {
    number: "03",
    title: "Enfoque real",
    description:
      "Cada proyecto tiene un objetivo claro: que funcione. Sin relleno, sin complicaciones, sin presupuestos inflados por características que no necesitas.",
    tags: ["Resultados", "Sin humo", "Directo"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)",
        borderTop: "1px solid rgba(201,168,76,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Encabezado */}
        <RevealOnScroll style={{ marginBottom: "2.5rem" }}>
          <div
            className="two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "end",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: "0.75rem",
                }}
              >
                Qué construyo
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 600,
                  color: "#F2EDE4",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Construido
                <br />
                <span
                  style={{
                    color: "#3A3733",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  para que vendas.
                </span>
              </h2>
            </div>
            <p
              style={{
                color: "#8C8680",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                margin: 0,
                alignSelf: "end",
              }}
            >
              Construyo herramientas digitales pensadas para generar resultados.
              Trabajo con negocios que quieren algo más que presencia online:
              quieren captar clientes y mejorar cómo funcionan.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filas de servicios */}
        <div>
          {services.map((service, i) => (
            <RevealOnScroll key={service.number} delay={i * 0.07}>
              <div className="service-row">
                <div
                  className="service-row-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                >
                  {/* Número */}
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 300,
                      color: "rgba(201,168,76,0.2)",
                      lineHeight: 1,
                    }}
                  >
                    {service.number}
                  </span>

                  {/* Contenido */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        fontWeight: 600,
                        color: "#F2EDE4",
                        margin: "0 0 0.75rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        color: "#8C8680",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        margin: "0 0 1rem",
                        maxWidth: "540px",
                      }}
                    >
                      {service.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.63rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#3A3733",
                            border: "1px solid rgba(201,168,76,0.1)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "2px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flecha */}
                  <span
                    className="service-arrow"
                    style={{
                      color: "rgba(201,168,76,0.2)",
                      fontSize: "1.25rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
