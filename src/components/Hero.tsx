import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Olá, eu sou</p>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                João Silva
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Desenvolvedor de Software Fullstack
              </h2>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Apaixonado por criar soluções digitais inovadoras e eficientes. 
              Especializado em desenvolvimento web e mobile, transformando ideias 
              em aplicações modernas e escaláveis.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="hover-glow"
                onClick={scrollToContact}
              >
                Entre em Contato
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover-glow"
              >
                Ver Projetos
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img 
                src={avatarImage} 
                alt="João Silva" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;