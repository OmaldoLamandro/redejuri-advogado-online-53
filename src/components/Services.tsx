import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  FileText, 
  Users, 
  Building, 
  Heart, 
  Car, 
  Home, 
  Briefcase,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Divórcio Consensual",
      description: "Divórcio em cartório ou judicial quando há acordo. Partilha de bens, guarda dos filhos e pensão alimentícia.",
      popular: true
    },
    {
      icon: Scale,
      title: "Divórcio Litigioso",
      description: "Quando não há acordo. Defesa dos seus direitos na partilha, guarda e pensão através de processo judicial.",
      popular: true
    },
    {
      icon: Shield,
      title: "Infidelidade e Traição",
      description: "Comprovação de infidelidade, proteção de direitos, indenização por dano moral e estratégias legais.",
      popular: true
    },
    {
      icon: Users,
      title: "Guarda dos Filhos",
      description: "Guarda compartilhada, unilateral, regulamentação de visitas e proteção dos direitos da criança.",
      popular: false
    },
    {
      icon: FileText,
      title: "Pensão Alimentícia",
      description: "Fixação, revisão, execução e exoneração de pensão alimentícia para filhos e ex-cônjuge.",
      popular: false
    },
    {
      icon: Building,
      title: "Partilha de Bens",
      description: "Divisão do patrimônio do casal, avaliação de bens, meação e proteção contra alienação.",
      popular: false
    },
    {
      icon: Briefcase,
      title: "União Estável",
      description: "Reconhecimento, dissolução e direitos em união estável. Proteção patrimonial e familiar.",
      popular: false
    },
    {
      icon: Car,
      title: "Violência Doméstica",
      description: "Medidas protetivas, denúncia, acompanhamento processual e proteção da vítima e filhos.",
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-primary/20">
            💔 Problemas de Família Resolvidos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Especialistas em
            <span className="block text-primary">Direito de Família e Divórcio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos você com advogados especialistas em direito de família, verificados pela OAB. 
            Seja traição, divórcio ou qualquer questão familiar, temos o profissional certo para proteger seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer border-l-4 border-l-transparent hover:border-l-secondary"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground shadow-md">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Tem outro problema familiar, matrimonial ou de relacionamento? Nossa plataforma conecta você com especialistas para qualquer situação.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              💔 Preço Único para Família
            </h3>
            <p className="text-muted-foreground mb-6">
              Qualquer problema familiar ou de divórcio custa apenas <strong className="text-primary text-xl">R$60</strong> 
              para conectar com um especialista. Sem surpresas, sem taxas ocultas.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-success text-success-foreground">
              ✅ Especialistas em direito de família verificados pela OAB
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;