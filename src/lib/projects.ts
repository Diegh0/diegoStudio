export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  metrics: string;
}

// ─ Reemplaza este array con tus propios proyectos ──────────────────────────

export const projects: Project[] = [
  {
    id: 1,
    title: "FinTrack Pro",
    category: "SaaS Dashboard",
    description:
      "Plataforma de analítica de portafolio en tiempo real para más de 14.000 usuarios activos. Rediseño completo de arquitectura de información, datos en vivo vía WebSocket y capa de gráficos personalizada. El churn cayó un 34% en los primeros 90 días.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "WebSockets"],
    year: "2024",
    link: "#",
    metrics: "−34% churn",
  },
  {
    id: 2,
    title: "Orbit Landing",
    category: "Sitio de Conversión",
    description:
      "Sitio de marketing de alta conversión para una empresa SaaS en Serie A. Arquitectura performance-first (LCP sub-1s) y A/B testing estructurado desde el día uno. Los registros de prueba aumentaron un 28% en 30 días.",
    tags: ["Next.js", "Vercel", "Tailwind", "Analytics"],
    year: "2024",
    link: "#",
    metrics: "+28% registros",
  },
  {
    id: 3,
    title: "MedSync API",
    category: "Infraestructura Backend",
    description:
      "Capa de API HIPAA-compliant que conecta 3 sistemas de salud distintos. Procesa más de 2M de peticiones diarias con un uptime del 99,98%. Redujo el tiempo de integración de nuevos socios de 6 semanas a 4 días.",
    tags: ["Node.js", "AWS Lambda", "Redis", "PostgreSQL", "HIPAA"],
    year: "2023",
    link: "#",
    metrics: "2M+ req/día",
  },
  {
    id: 4,
    title: "StoreForge",
    category: "Plataforma E-Commerce",
    description:
      "Storefront headless para un grupo retail multi-marca. LCP en móvil por debajo de 300ms. Integración con Stripe, sincronización de inventario y CMS propio para que el equipo publique sin tocar código. 2,4M USD en GMV en el primer trimestre.",
    tags: ["Next.js", "Shopify API", "Stripe", "Tailwind", "Sanity"],
    year: "2023",
    link: "#",
    metrics: "$2.4M GMV T1",
  },
  {
    id: 5,
    title: "Pulse Analytics",
    category: "Herramienta Interna",
    description:
      "Fuente única de verdad para una empresa SaaS de 180 personas. Reemplazó 6 herramientas desconectadas por una vista unificada en tiempo real de producto, ingresos y soporte. Ahorró 14 horas semanales de reporting en el equipo directivo.",
    tags: ["React", "FastAPI", "ClickHouse", "Recharts"],
    year: "2022",
    link: "#",
    metrics: "−14h/semana",
  },
];
