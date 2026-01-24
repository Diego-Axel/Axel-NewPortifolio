import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, staggerContainer } from "@/lib/motion";

const skills = [
	{
		name: "React",
		icon: Code2,
		description: "Desenvolvimento de interfaces modernas e responsivas",
		color: "from-blue-500 to-cyan-500",
	},
	{
		name: "Angular",
		icon: Code2,
		description: "Framework para aplicações web escaláveis e modulares",
		color: "from-red-600 to-orange-500",
	},
	{
		name: "TypeScript",
		icon: Database,
		description: "Código tipado e mais seguro",
		color: "from-blue-600 to-blue-400",
	},
	{
		name: "Node.js",
		icon: Server,
		description: "Backend escalável e performático",
		color: "from-green-500 to-emerald-500",
	},
	{
		name: "Banco de Dados",
		icon: Database,
		description: "Modelagem, consultas e integração de dados",
		color: "from-yellow-500 to-orange-500",
	},
	{
		name: "PostgreSQL",
		icon: Database,
		description: "Banco de dados relacional robusto e open source",
		color: "from-indigo-500 to-blue-700",
	},
	{
		name: "BI",
		icon: Server, // Ou troque por outro ícone se desejar
		description: "Dashboards, relatórios e análise de dados",
		color: "from-lime-500 to-green-400",
	},
	{
		name: "Metodologias Ágeis",
		icon: Code2, // Ou troque por outro ícone se desejar
		description: "Scrum, Kanban e práticas colaborativas",
		color: "from-pink-500 to-red-400",
	},
];

const Skills = () => {
	return (
		    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
			    <div className="absolute inset-0 opacity-30 gradient-walk" style={{ background: "var(--gradient-hero)" }} />
			    <div className="container mx-auto relative z-10">
				<div className="text-center mb-10 sm:mb-12 md:mb-16 animate-slide-up">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
						Habilidades{" "}
						<span className="gradient-text">Técnicas</span>
					</h2>
					<p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
						Tecnologias, ferramentas e soft skills que domino para criar soluções completas
					</p>
				</div>

				<motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
				  variants={staggerContainer}
				  initial="hidden"
				  whileInView="visible"
				  viewport={{ once: true, margin: "-100px" }}
				>
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<motion.div key={skill.name} variants={cardReveal} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Card
								className="p-4 sm:p-6 hover-glow cursor-pointer transition-all border-border/50 bg-card/50 backdrop-blur"
							>
								<div className="space-y-3 sm:space-y-4">
									<div
										className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
									>
										<Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
									</div>

									<div>
										<h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
											{skill.name}
										</h3>
										<p className="text-muted-foreground text-xs sm:text-sm">
											{skill.description}
										</p>
									</div>
								</div>
							</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;