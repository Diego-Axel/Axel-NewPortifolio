import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Viggo Sistemas.",
    period: "2024 - Até o momento",
    role: "Estagiário",
    description: "Análise e organização de dados para elaboração de relatórios dinâmicos, apoiando a tomada de decisão estratégica. Desenvolvimento de dashboards interativos utilizando Power BI para visualização de métricas chave. Coleta, análise e tratamento de informações relevantes para as áreas de negócio. Suporte a chatbots integrados com redes sociais, assistência na conciliação de transações financeiras, participação ativa em reuniões com clientes para levantamento de requisitos."
  },
  {
    company: "Freelancer",
    period: "2024 - Até o momento",
    role: "Desenvolvedor Full Stack",
    description: "Desenvolvimento de aplicações web utilizando JavaScript, TypeScript e frameworks modernos como React e Node.js."
  },
  {
    company: "BarioTech",
    period: "2024 - Ago 2025",
    role: "Desenvolvedor Back-end",
    description: "Desenvolvimento de APIs RESTful e integração com bancos de dados. Implementação de lógica de negócios e otimização de desempenho em aplicações web."
  },
  {
    company: "UFRN",
    period: "2024 - Até o momento",
    role: "Bacharelado em Sistemas de Informação",
    description: "Início da faculdade de Sistemas de Informação."
  }
];

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trajetória profissional e principais conquistas
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 hover-glow transition-all hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;