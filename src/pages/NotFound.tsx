import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteBackground from "@/components/ui/SiteBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <SiteBackground />
      <div className="text-center">
        <p className="eyebrow justify-center">Erro 404</p>
        <h1 className="mt-5 text-5xl sm:text-6xl">
          Página não <em className="font-serif font-normal">encontrada</em>
        </h1>
        <p className="mt-4 text-muted-foreground">O endereço que você acessou não existe.</p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
