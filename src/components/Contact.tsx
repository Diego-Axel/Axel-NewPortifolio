import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { socials } from "@/data/portfolio";
import { cardReveal, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "Resposta rápida", href: `https://wa.me/${socials.whatsappNumber}` },
  { icon: Linkedin, label: "LinkedIn", value: "Diêgo Axel", href: socials.linkedin },
  { icon: Github, label: "GitHub", value: "@Diego-Axel", href: socials.github },
];

const fieldClass = "h-12 rounded-xl border-border bg-background/60 text-base focus-visible:ring-primary/40";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Monta a mensagem e abre a conversa no WhatsApp
    const text = `Olá, meu nome é ${formData.name}. (Email: ${formData.email}) Mensagem: ${formData.message}`;
    window.open(`https://wa.me/${socials.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container mx-auto grid gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeInUp} className="eyebrow">Contato</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-5 text-4xl leading-[1.05] sm:text-6xl">
            Tem um projeto <br className="hidden sm:block" />
            em <em className="font-serif font-normal text-gradient pr-1">mente?</em>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Conte o problema que você quer resolver. Respondo com uma proposta clara de escopo, prazo e tecnologia.
          </motion.p>

          <motion.ul variants={fadeInUp} className="mt-10 divide-y divide-border border-y border-border">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors"
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="font-medium">{label}</span>
                  <span className="text-sm text-muted-foreground">{value}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="surface space-y-5 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">Nome</label>
              <Input id="name" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">E-mail</label>
              <Input id="email" name="email" type="email" placeholder="voce@empresa.com" value={formData.email} onChange={handleChange} className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">Mensagem</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Conte um pouco sobre o projeto, objetivo e prazo..."
              rows={7}
              value={formData.message}
              onChange={handleChange}
              className="resize-none rounded-xl border-border bg-background/60 text-base focus-visible:ring-primary/40"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Enviar mensagem
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-center text-xs text-muted-foreground">A mensagem é enviada pelo WhatsApp.</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
