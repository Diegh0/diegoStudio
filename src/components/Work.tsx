import { useState, useEffect } from "react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import EnovaProject from "@/assets/images/EnovaProject.png";
import casaComidasProject from "@/assets/images/casaComidasProject.png";
import donerKebabProject from "@/assets/images/donerKebabProject.png";
import fotografo2Project from "@/assets/images/fotografo2Project.png";
import veteFriendlyProject from "@/assets/images/veteFriendlyProject.png";
import phyosCenterProject from "@/assets/images/phyosCenterProject.png";

const galleryItems: GalleryItem[] = [
  {
    common: "Enova",
    binomial: "Landing Page · Conversión",
    description: "Landing page para Enova Inmobiliaria. Diseño enfocado en conversión y cada propiedad publicada incluye la opción de visualizarla reformada gracias a un generador de IA integrado.",
    liveUrl: "https://enova-rosy.vercel.app/",
    photo: {
      url: EnovaProject,
      text: "Enova project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
  {
    common: "Casa de Comidas",
    binomial: "Diseño Web · Hostelería · Plantilla",
    description: "Diseño listo para cualquier casa de comidas. Incluye reservas online y panel de administrador donde el dueño ve en tiempo real los pedidos por franjas horarias. Disponible para compra y adaptación a tu negocio.",
    liveUrl: "https://casa-comidas.vercel.app/",
    photo: {
      url: casaComidasProject,
      text: "Casa de Comidas project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
  {
    common: "Döner Kebab",
    binomial: "Diseño Web · Hostelería",
    description: "Web para negocio de hostelería. Diseño apetecible y directo al grano, con menú visible, información de contacto clara y llamada a la acción para atraer clientes desde el primer vistazo.",
    liveUrl: "https://doner-kebab-six.vercel.app/",
    photo: {
      url: donerKebabProject,
      text: "Döner Kebab project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
  {
    common: "Fotógrafo",
    binomial: "Portfolio · Fotografía",
    description: "Portfolio visual para fotógrafo profesional. Galería limpia y elegante que pone el foco en el trabajo, genera confianza y facilita la contratación directa.",
    liveUrl: "https://fotografo2-one.vercel.app/",
    photo: {
      url: fotografo2Project,
      text: "Fotógrafo project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
  {
    common: "VeteFriendly",
    binomial: "Web Profesional · Veterinaria",
    description: "Web para veterinaria y nutricionista especializada en perros y gatos con enfoque en medicina integrativa. Diseño que transmite confianza y profesionalidad, pensado para captar dueños que buscan un cuidado diferente para sus mascotas.",
    liveUrl: "https://vetefriendly.vercel.app/",
    photo: {
      url: veteFriendlyProject,
      text: "VeteFriendly project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
  {
    common: "Phyos Center",
    binomial: "Web Profesional · Fisioterapia",
    description: "Web para clínica de fisioterapia avanzada. Diseño limpio y profesional que refleja la variedad de servicios — fisioterapia, podología, nutrición, entrenamiento — y facilita que los pacientes encuentren lo que necesitan y contacten sin fricciones.",
    liveUrl: "https://phyos-center.vercel.app/",
    photo: {
      url: phyosCenterProject,
      text: "Phyos Center project cover",
      pos: "center top",
      by: "Diego Fuertes",
    },
  },
];

function ProjectModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(8,7,6,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl"
        style={{ border: "1px solid rgba(201,168,76,0.2)", backgroundColor: "#0F0E0C" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Mockup */}
        <div className="w-full overflow-hidden" style={{ maxHeight: "280px" }}>
          <img
            src={item.photo.url}
            alt={item.photo.text}
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: "280px" }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.4rem" }}>
            {item.binomial}
          </p>
          <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 600, color: "#F2EDE4", lineHeight: 1.1, marginBottom: "0.875rem" }}>
            {item.common}
          </h3>
          {item.description && (
            <p style={{ color: "#8C8680", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              {item.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-solid"
                style={{ padding: "0.75rem 1.5rem", fontSize: "0.75rem" }}
              >
                Ver proyecto en vivo →
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-ghost"
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.75rem" }}
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* Close X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: "rgba(8,7,6,0.7)", color: "#8C8680", fontSize: "1.1rem", border: "1px solid rgba(201,168,76,0.15)" }}
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function useGalleryRadius() {
  const [radius, setRadius] = useState(500);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setRadius(w < 480 ? 180 : w < 768 ? 280 : w < 1024 ? 380 : 500);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return radius;
}

export default function Work() {
  const [activeProject, setActiveProject] = useState<GalleryItem | null>(null);
  const galleryRadius = useGalleryRadius();

  return (
    <>
      {/* Modal */}
      {activeProject && (
        <ProjectModal item={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* Galería circular de proyectos */}
      <section
        id="work"
        className="w-full bg-black"
        style={{ height: '220vh' }}
      >
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <CircularGallery
              items={galleryItems}
              radius={galleryRadius}
              autoRotateSpeed={0.015}
              onItemClick={item => item.liveUrl ? setActiveProject(item) : undefined}
            />
          </div>
        </div>
      </section>

    </>
  );
}
