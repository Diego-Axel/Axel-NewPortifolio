import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      
      <div className="container mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 animate-fade-in">
          <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left w-full">
            <div className="space-y-2">
              <p className="text-primary text-base sm:text-lg font-medium">Olá, eu sou</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradient-text leading-tight">
                Diêgo Axel
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Desenvolvedor de Software Fullstack
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Apaixonado por criar soluções digitais inovadoras e eficientes.
              Me aprofundando em desenvolvimento web e mobile, transformando ideias
              em aplicações modernas e escaláveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
              <Button 
                size="lg" 
                className="hover-glow w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Entre em Contato
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover-glow w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                Ver Projetos
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img 
                src={avatarImage} 
                alt="Diêgo Axel" 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/30 hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;