export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  highlights?: string[];
  role?: string;
  image?: string;
  tech: string[];
  demo?: string;
  status?: string;
  /** Private/client repositories are shown without a code link. */
  confidential?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "phe",
    title: "Sistema PHE",
    category: "Plataforma institucional · UFRN",
    year: "2026",
    status: "Em produção",
    summary:
      "Plataforma que gerencia, monitora e analisa as ações de apoio pedagógico do Programa Hábitos de Estudo, na Assistência Estudantil da UFRN. Substituiu planilhas e processos fragmentados por uma gestão centralizada e orientada por dados.",
    highlights: [
      "Formação automática de duplas de tutoria por compatibilidade de horários e campus",
      "Planilhas de acompanhamento individual e grupal com relatórios e dashboards analíticos",
      "Autenticação JWT com papéis (admin/aluno), notificações e envio de e-mails",
      "Integração com Google Drive para documentos e tutoriais em vídeo",
      "API coberta por testes automatizados com Vitest",
    ],
    role: "Arquitetura e desenvolvimento full stack — do modelo de dados ao deploy.",
    image: "/images/phe-sistema.jpg",
    tech: ["React 19", "TypeScript", "Tailwind", "Node.js", "Express 5", "Prisma", "PostgreSQL", "Vitest", "Fly.io"],
    confidential: true,
  },
  {
    slug: "fernando-mariz",
    title: "Fernando Mariz Advocacia",
    category: "Site institucional + CMS · Direito da Saúde",
    year: "2026",
    summary:
      "Site de um escritório de advocacia focado em conversão, com painel administrativo próprio para o cliente publicar artigos sem depender de desenvolvedor.",
    highlights: [
      "CMS sob medida com editor rich text (TipTap) e upload de imagens",
      "Páginas de serviço orientadas a captação de clientes",
      "SEO técnico: metadata, Open Graph, sitemap e robots dinâmicos",
      "Formulário de caso com envio transacional por e-mail (Resend)",
    ],
    role: "Design de produto, desenvolvimento e publicação.",
    image: "/images/fernando-mariz.jpg",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma", "PostgreSQL", "Vercel"],
    confidential: true,
  },
];

export const projects: Project[] = [
  {
    slug: "sapcana",
    title: "Sapcana",
    category: "Dashboard de BI · Setor sucroenergético",
    year: "2026",
    summary:
      "Dashboard de produção para usina: importa planilhas quinzenais, organiza os dados em modelo dimensional e acompanha cana processada, açúcar e etanol por safra e unidade.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    confidential: true,
  },
  {
    slug: "venus",
    title: "Vênus Suplementos",
    category: "Sistema de pedidos · E-commerce",
    year: "2025",
    summary:
      "Catálogo com carrinho de compras em que o pedido chega pronto no WhatsApp da loja, eliminando atendimento manual item a item.",
    image: "/images/venus-suplementos.jpg",
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    demo: "https://venus-suplementos.vercel.app/",
  },
  {
    slug: "nutritiva",
    title: "Nutritiva",
    category: "Site institucional · Bioeconomia",
    year: "2026",
    summary:
      "Presença digital de uma empresa de engenharia que transforma bioeconomia em infraestrutura industrial.",
    image: "/images/nutritiva.jpg",
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    demo: "https://anutritiva.com.br/",
  },
  {
    slug: "francinele",
    title: "Francinele Nutricionista",
    category: "One page · Saúde",
    year: "2025",
    summary:
      "Página de captação para nutricionista com serviços, processo de atendimento, planos e dúvidas frequentes.",
    image: "/images/francinele-nutricionista.jpg",
    tech: ["React", "TypeScript", "Tailwind"],
    demo: "https://francinele-nutricionista.vercel.app/",
  },
  {
    slug: "netfit",
    title: "NetFit AI",
    category: "Landing page · Produto com IA",
    year: "2025",
    summary:
      "Landing page de um aplicativo de saúde com assistente de IA, com foco em apresentação de funcionalidades e conversão.",
    image: "/images/netfit-ai.jpg",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://netfit-ia.vercel.app/",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Programa Hábitos de Estudo (PHE) · UFRN",
    role: "Desenvolvedor Full Stack",
    period: "Mar 2026 — Atual",
    current: true,
    description:
      "Responsável pela arquitetura e implementação do Sistema PHE, plataforma usada pela equipe da Assistência Estudantil para acompanhar trajetórias acadêmicas. Atuo junto à coordenação, design e psicologia para transformar requisitos pedagógicos em produto.",
    tags: ["React", "Express", "Prisma", "PostgreSQL"],
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Full Stack",
    period: "2024 — Atual",
    current: true,
    description:
      "Desenvolvimento de sites e sistemas sob medida para clientes de advocacia, saúde, varejo e indústria — do levantamento de requisitos à publicação e manutenção.",
    tags: ["Next.js", "React", "Node.js", "Vercel"],
  },
  {
    company: "BarioTech",
    role: "Desenvolvedor Back-end",
    period: "2024 — Ago 2025",
    description:
      "Desenvolvimento de APIs RESTful e integração com bancos de dados. Implementação de regras de negócio e otimização de desempenho em aplicações web.",
    tags: ["APIs REST", "Node.js", "SQL"],
  },
  {
    company: "Viggo Sistemas",
    role: "Estagiário · Dados & BI",
    period: "Abr 2024 — Nov 2025",
    description:
      "Relatórios e dashboards interativos em Power BI para apoiar decisões estratégicas, tratamento de dados, suporte a chatbots integrados a redes sociais, conciliação de transações financeiras e levantamento de requisitos com clientes.",
    tags: ["Power BI", "Análise de dados", "Requisitos"],
  },
];

export const education = {
  institution: "Universidade Federal do Rio Grande do Norte (UFRN)",
  course: "Bacharelado em Sistemas de Informação",
  period: "2024 — Atual",
};

export const stack = [
  {
    title: "Frontend",
    description: "Interfaces rápidas, acessíveis e responsivas.",
    items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    description: "APIs seguras, testadas e bem modeladas.",
    items: ["Node.js", "Express", "Prisma", "Drizzle ORM", "REST", "JWT"],
  },
  {
    title: "Dados & BI",
    description: "Do modelo relacional ao dashboard de decisão.",
    items: ["PostgreSQL", "Supabase", "Modelagem de dados", "Power BI", "Recharts"],
  },
  {
    title: "Entrega",
    description: "Qualidade e processo do commit ao deploy.",
    items: ["Git", "Vitest", "Docker", "Vercel", "Fly.io", "Scrum / Kanban"],
  },
];

export const socials = {
  github: "https://github.com/Diego-Axel",
  linkedin: "https://www.linkedin.com/in/di%C3%AAgo-axel-1684452b5/",
  whatsappNumber: "5584999774459",
};
