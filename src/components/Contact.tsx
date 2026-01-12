import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Monta a mensagem para o WhatsApp
    const whatsappNumber = "5584999774459";
    const text = `Olá, meu nome é ${formData.name}. (Email: ${formData.email}) Mensagem: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Tem um projeto em mente? Vamos conversar!
          </p>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 hover-glow border-border/50 bg-card/50 backdrop-blur animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                className="bg-background/50 text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-background/50 text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conte-me sobre seu projeto..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-background/50 resize-none text-sm sm:text-base"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full hover-glow text-sm sm:text-base"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;