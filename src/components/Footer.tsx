import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:contato@email.com",
      label: "E-mail"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover-glow transition-all hover:scale-110 hover:bg-primary group"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} João Silva. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Desenvolvido com React, TypeScript e paixão por código limpo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;