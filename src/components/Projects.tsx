import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
		<section className="py-24 px-6 overflow-hidden">
			<div className="container mx-auto">
				<div className="text-center mb-16 animate-slide-up">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Projetos em{" "}
						<span className="gradient-text">Destaque</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Alguns dos meus trabalhos mais recentes e impactantes
					</p>
				</div>

				<div
					ref={scrollRef}
					className="flex gap-6 overflow-x-hidden pb-4 cursor-grab"
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
						<Card
							key={index}
							className="flex-shrink-0 w-[400px] overflow-hidden hover-glow transition-all hover:scale-105 border-border/50 bg-card/50 backdrop-blur"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
							</div>

							<div className="p-6 space-y-4">
								<h3 className="text-2xl font-bold">{project.title}</h3>
								<p className="text-muted-foreground">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-3 pt-2">
									<Button
										size="sm"
										variant="outline"
										className="flex-1"
										asChild
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4 mr-2" />
											Código
										</a>
									</Button>
									<Button
										size="sm"
										className="flex-1"
										asChild
									>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="w-4 h-4 mr-2" />
											Demo
										</a>
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;