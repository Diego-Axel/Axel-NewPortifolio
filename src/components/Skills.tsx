import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Database, Server } from "lucide-react";

const skills = [
  {
    name: "React",
    icon: Code2,
    description: "Desenvolvimento de interfaces modernas e responsivas",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "React Native",
    icon: Smartphone,
    description: "Aplicativos mobile multiplataforma",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "TypeScript",
    icon: Database,
    description: "Código tipado e mais seguro",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Node.js",
    icon: Server,
    description: "Backend escalável e performático",
    color: "from-green-500 to-emerald-500"
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="p-6 hover-glow cursor-pointer transition-all hover:scale-105 border-border/50 bg-card/50 backdrop-blur animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;