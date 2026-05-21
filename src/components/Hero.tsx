export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "100svh",
        overflow: "hidden",
        background: "#080706",
      }}
    >
      {/* ─ Fondo: blobs + grilla ────────────────────── */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "65vw",
            height: "65vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.045) 0%, transparent 70%)",
            animation: "meshDrift 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)",
            animation: "meshDrift 28s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, #080706 100%)",
          }}
        />
      </div>

      {/* ─ Contenido ────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding:
            "clamp(6rem, 14vw, 9rem) clamp(1.5rem, 4vw, 3rem) clamp(5rem, 10vw, 7rem)",
        }}
      >
        {/* Overline */}
        <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
          <p
            style={{
              color: "#C9A84C",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: 0,
              animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            Desarrollador Full-Stack · Creador de Productos
          </p>
        </div>

        {/* Titular */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            margin: "0 0 2rem",
            fontWeight: 600,
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.25rem, 9.5vw, 9rem)",
                color: "#F2EDE4",
                animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
              }}
            >
              Software construido
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.25rem, 9.5vw, 9rem)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(201,168,76,0.55)",
                animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both",
              }}
            >
              para rendir.
            </span>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(2rem, 5.5vw, 5rem)",
                color: "#3A3733",
                fontWeight: 300,
                fontStyle: "italic",
                animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.54s both",
              }}
            >
              No solo para existir.
            </span>
          </div>
        </h1>

        {/* Descripción */}
        <div style={{ overflow: "hidden", maxWidth: "480px", marginBottom: "3rem" }}>
          <p
            style={{
              color: "#8C8680",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              margin: 0,
              animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.64s both",
            }}
          >
            Convierto problemas complejos en productos limpios y rápidos.
            Landing pages que venden. Apps que escalan. APIs que funcionan.
            Si buscas resultados, no excusas—hablemos.
          </p>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "5rem",
            animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.74s both",
          }}
        >
          <a href="#contact" className="btn-gold-solid">
            Construyamos tu landing page
          </a>
          <a href="#work" className="btn-ghost">
            Ver el trabajo ↓
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            animation: "fadeIn 1s ease 0.9s both",
          }}
        >
          {[
            { value: "6+", label: "Años entregando" },
            { value: "30+", label: "Proyectos lanzados" },
            { value: "<24h", label: "Primera respuesta" },
          ].map((stat) => (
            <div key={stat.value}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "#C9A84C",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#3A3733",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─ Indicador de scroll ──────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "fadeIn 1s ease 1.4s both",
        }}
      >
        <span
          style={{
            fontSize: "0.63rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3A3733",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #3A3733, transparent)",
          }}
        />
      </div>
    </section>
  );
}
