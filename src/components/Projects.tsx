import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardReveal } from "@/lib/motion";

const projects = [
	{
		title: "Landing Page Para Uma Barbearia",
		description:
			"Landing page responsiva para uma barbearia, com agendamento online e galeria de fotos.",
		image: "/images/landingBarbearia.png",
		tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
		github: "https://github.com/Diego-Axel",
		demo: "#",
	},
	{
		title: "One Page para uma nutricionista",
		description:
			"One page responsiva para uma nutricionista, destacando serviços, informações de contato, como funciona, o que está incluso e dúvidas.",
		image: "/images/onepageNutricao.png",
		tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
		github: "https://github.com/Diego-Axel",
		demo: "https://francinele-nutricionista.vercel.app/",
	},
	{
		title: "Lista de Supermercado Personalizada",
		description:
			"Aplicativo para criação de listas de compras personalizadas com compartilhamento em tempo real, feita de acordo como o cliente pediu e adequada para a realidade dele.",
		image: "/images/listaDeSupermercado.png",
		tech: ["React", "TypeScript", "Tailwind CSS", "PLpgSQL","Node.js"],
		github: "https://github.com/Diego-Axel",
		demo: "#",
	},
	{
		title: "Página Web para o incentivo à sáude",
		description:
			"Uma página Web destinada a dicas de treino, corrida e alimentação em prol de uma vida mais saudável e ativa.",
		image: "/images/fitnesWeb.png",
		tech: ["HTML5", "CSS3", "JavaScript"],
		github: "https://github.com/Diego-Axel",
		demo: "https://diego-axel.github.io/FitnesWeb/",
	},
	{
		title: "Landind Page para um aplicativo de AutoSaúde",
		description:
			"Uma Landing Page para um aplicativo focado em AutoSaúde, oferecendo recursos e informações para promover o bem-estar e a saúde pessoal, tudo isso com uma IA para te ajudar",
		image: "/images/netfitai.png",
		tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI"],
		github: "https://github.com/Diego-Axel",
		demo: "https://netfit-ia.vercel.app/",
	},
];

const Projects = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isPaused, setIsPaused] = useState(false);
	const scrollPosRef = useRef(0);

	// Drag state
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer || isPaused) return;

		const scrollSpeed = 1;

		const scroll = () => {
			scrollPosRef.current += scrollSpeed;
			if (scrollPosRef.current >= scrollContainer.scrollWidth / 2) {
				scrollPosRef.current = 0;
			}
			scrollContainer.scrollLeft = scrollPosRef.current;
		};

		const interval = setInterval(scroll, 30);

		return () => clearInterval(interval);
	}, [isPaused]);

	// Mouse events para drag horizontal
	const handleMouseDown = (e: React.MouseEvent) => {
		const container = scrollRef.current;
		if (!container) return;
		isDragging.current = true;
		setIsPaused(true);
		startX.current = e.pageX - container.offsetLeft;
		scrollLeft.current = container.scrollLeft;
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		const container = scrollRef.current;
		if (!container || !isDragging.current) return;
		e.preventDefault();
		const x = e.pageX - container.offsetLeft;
		const walk = (x - startX.current);
		container.scrollLeft = scrollLeft.current - walk;
		scrollPosRef.current = container.scrollLeft;
	};

	const handleMouseUp = () => {
		isDragging.current = false;
		setIsPaused(false);
	};

	// Touch events para drag horizontal mobile
	const handleTouchStart = (e: React.TouchEvent) => {
		const container = scrollRef.current;
		if (!container) return;
		isDragging.current = true;
		setIsPaused(true);
		startX.current = e.touches[0].pageX - container.offsetLeft;
		scrollLeft.current = container.scrollLeft;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		const container = scrollRef.current;
		if (!container || !isDragging.current) return;
		const x = e.touches[0].pageX - container.offsetLeft;
		const walk = (x - startX.current);
		container.scrollLeft = scrollLeft.current - walk;
		scrollPosRef.current = container.scrollLeft;
	};

	const handleTouchEnd = () => {
		isDragging.current = false;
		setIsPaused(false);
	};

	return (
		    <section id="projects" className="relative py-12 sm:py-16 md:py-24 px-0 sm:px-6 overflow-hidden">
			    <div className="absolute inset-0 opacity-25 gradient-walk" style={{ background: "var(--gradient-hero)" }} />
			    <div className="container mx-auto relative z-10">
				<motion.div className="text-center mb-10 sm:mb-12 md:mb-16 px-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
					<motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" variants={fadeInUp}>
						Projetos em{" "}
						<span className="gradient-text">Destaque</span>
					</motion.h2>
					<motion.p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto" variants={fadeInUp}>
						Alguns dos meus trabalhos mais recentes e impactantes
					</motion.p>
				</motion.div>

				<div
					ref={scrollRef}
					className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4 cursor-grab pl-4 sm:pl-0"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => { setIsPaused(false); handleMouseUp(); }}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{[...projects, ...projects].map((project, index) => (
						<motion.div key={index} variants={cardReveal} initial="hidden" animate="visible">
						<Card
							className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] overflow-hidden hover-glow transition-all border-border/50 bg-card/50 backdrop-blur"
						>
							<div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									loading="lazy"
									decoding="async"
									className="w-full h-full object-cover transition-transform hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
							</div>

							<div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
								<h3 className="text-lg sm:text-xl md:text-2xl font-bold line-clamp-2">{project.title}</h3>
								<p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-primary/20 text-primary"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-2 sm:gap-3 pt-2">
									<Button
										size="sm"
										variant="outline"
										className="flex-1 text-xs sm:text-sm"
										asChild
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
											Código
										</a>
									</Button>
									<Button
										size="sm"
										className="flex-1 text-xs sm:text-sm"
										asChild
									>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
											Demo
										</a>
									</Button>
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

export default Projects;