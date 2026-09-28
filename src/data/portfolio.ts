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
  /** Link text when the default "Ver projeto ao vivo" doesn't fit. */
  demoLabel?: string;
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
    demo: "https://phe-system.vercel.app/login",
    demoLabel: "Acessar o sistema",
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
    demo: "https://fernandomariz.adv.br/",
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
  /** Workload and work mode, e.g. "Meio período · Remoto". */
  meta: string;
  current?: boolean;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "IFRN · Programa OPPEP",
    role: "Desenvolvedor Web",
    period: "Jun 2026 — Atual",
    meta: "Meio período · Remoto",
    current: true,
    description:
      "Desenvolvimento, manutenção e correção de bugs do site do Programa OPPEP do IFRN, com foco em código limpo e boas práticas de programação.",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    company: "Tribunal Regional Eleitoral do RN (TRE-RN)",
    role: "Estagiário",
    period: "Abr 2026 — Atual",
    meta: "Estágio · Presencial · Caicó, RN",
    current: true,
    description:
      "Operação supervisionada dos sistemas da Justiça Eleitoral, identificação e sugestão de melhorias nos processos da Zona Eleitoral, minuta de atos administrativos, apoio às redes sociais e à organização e planejamento das Eleições 2026.",
    tags: ["Sistemas da Justiça Eleitoral", "Processos", "Eleições 2026"],
  },
  {
    company: "UFRN · Programa Hábitos de Estudo (PHE)",
    role: "Analista de Dados e Desenvolvedor de Software",
    period: "Mar 2026 — Atual",
    meta: "Bolsista · Remoto",
    current: true,
    description:
      "Responsável pela arquitetura e implementação do Sistema PHE, plataforma usada pela Assistência Estudantil para acompanhar trajetórias acadêmicas, e pela análise dos dados do programa. Atuo junto à coordenação, design e psicologia para transformar requisitos pedagógicos em produto.",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Análise de dados"],
  },
  {
    company: "Autônomo",
    role: "Desenvolvedor Web Freelancer",
    period: "Jan 2024 — Atual",
    meta: "Freelance · Remoto",
    current: true,
    description:
      "Sites, landing pages, sistemas de vitrine e plataformas sob medida para clientes de advocacia, saúde, varejo e indústria — do levantamento de requisitos à publicação e manutenção.",
    tags: ["Next.js", "React", "Node.js", "Vercel"],
  },
  {
    company: "UFRN · Projeto Manual do Idoso Ativo",
    role: "Engenheiro de Software",
    period: "Out 2025 — Dez 2025",
    meta: "Meio período · Híbrido",
    description:
      "Desenvolvimento do aplicativo Manual do Idoso Ativo, com front-end em React Native e back-end em Django, voltado à promoção da saúde na terceira idade, incentivando idosos a praticar atividades físicas em casa ou em academias de praça.",
    tags: ["React Native", "Django", "Python"],
  },
  {
    company: "BarioTech Solutions",
    role: "Desenvolvedor de Software",
    period: "Nov 2024 — Ago 2025",
    meta: "Meio período · Híbrido",
    description:
      "Desenvolvimento de APIs RESTful e integração com bancos de dados. Implementação de regras de negócio e otimização de desempenho em aplicações web.",
    tags: ["APIs REST", "Node.js", "MongoDB"],
  },
  {
    company: "Viggo Sistemas · Software House",
    role: "Estagiário",
    period: "Abr 2024 — Nov 2025",
    meta: "Estágio · Presencial",
    description:
      "Relatórios dinâmicos e análise de dados, apoio no desenvolvimento e customização de software (revisão de código, identificação e correção de erros), monitoramento de chatbots integrados a redes sociais, conciliação de transações de cartões e levantamento de requisitos em reuniões com clientes.",
    tags: ["Análise de dados", "Python", "Requisitos"],
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
    items: ["React", "Next.js", "React Native", "TypeScript", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs seguras, testadas e bem modeladas.",
    items: ["Node.js", "Express", "Python", "Django", "Prisma", "REST / JWT"],
  },
  {
    title: "Dados & BI",
    description: "Do modelo relacional ao dashboard de decisão.",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Modelagem de dados", "Power BI"],
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
