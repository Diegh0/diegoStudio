"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Trabajo", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ─ Barra de navegación ──────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
          transition:
            "background 0.4s ease, border-bottom-color 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(8, 7, 6, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(201,168,76,0.08)" : "transparent"}`,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#F2EDE4",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          Dev<span style={{ color: "#C9A84C" }}>.</span>
        </a>

        {/* Links escritorio */}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "2.5rem",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA escritorio + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a href="#contact" className="btn-hire hidden md:inline-block">
            Contrátame
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "#F2EDE4",
                  transition: "transform 0.35s ease, opacity 0.35s ease",
                  transform: open
                    ? i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ─ Menú móvil pantalla completa ─────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "#080706",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.25rem, 9vw, 4rem)",
              fontWeight: 600,
              color: "#F2EDE4",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: `transform 0.5s ease ${i * 0.07}s, opacity 0.5s ease ${i * 0.07}s`,
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#F2EDE4")}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="btn-hire"
          style={{
            marginTop: "0.75rem",
            transition: `transform 0.5s ease 0.28s, opacity 0.5s ease 0.28s`,
            transform: open ? "translateY(0)" : "translateY(20px)",
            opacity: open ? 1 : 0,
          }}
        >
          Contrátame
        </a>
      </div>
    </>
  );
}
