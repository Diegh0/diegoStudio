import LuxorLogo from "@/assets/images/luxor-keramic-logo.png";
import VeteFriendlyLogo from "@/assets/images/vete-friendly-logo.png";
import PhyosLogo from "@/assets/images/phyos-logo.png";

const clients = [
  { src: LuxorLogo, alt: "Luxor Keramic" },
  { src: VeteFriendlyLogo, alt: "VeteFriendly" },
  { src: PhyosLogo, alt: "Phyos Center" },
];

export default function TrustedBy() {
  return (
    <section
      style={{
        padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
        borderTop: "1px solid rgba(201,168,76,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#3A3733",
          }}
        >
          Profesionales que han confiado
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "clamp(2rem, 6vw, 5rem)",
          }}
        >
          {clients.map(client => (
            <img
              key={client.alt}
              src={client.src}
              alt={client.alt}
              draggable={false}
              style={{
                height: "clamp(60px, 9vw, 100px)",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1) opacity(0.18)",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.filter =
                  "brightness(0) invert(1) opacity(0.55)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.filter =
                  "brightness(0) invert(1) opacity(0.18)";
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
