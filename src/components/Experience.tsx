import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardReveal } from "@/lib/motion";

const experiences = [
  {
    company: "Viggo Sistemas.",
    period: "Abril 2024 -  Até Novembro 2025",
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
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" variants={fadeInUp}>
            Experiência <span className="gradient-text">Profissional</span>
          </motion.h2>
          <motion.p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4" variants={fadeInUp}>
            Trajetória profissional e principais conquistas
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card 
              className="p-4 sm:p-6 md:p-8 hover-glow transition-all border-border/50 bg-card/50 backdrop-blur"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 sm:gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                    <span className="text-primary font-medium text-sm sm:text-base">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-2 sm:mb-3 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">{exp.description}</p>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;