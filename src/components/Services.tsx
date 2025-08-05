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
      icon: Car,
      title: "CNH Suspensa",
      description: "Defesa contra suspensão da CNH por pontuação ou infrações graves. Recursos administrativos e judiciais.",
      popular: true
    },
    {
      icon: Shield,
      title: "CNH Cassada",
      description: "Recuperação de CNH cassada, nova habilitação e defesa em processos de cassação.",
      popular: true
    },
    {
      icon: FileText,
      title: "Multas de Trânsito",
      description: "Recursos contra multas indevidas, contestação de infrações e redução de pontos na CNH.",
      popular: true
    },
    {
      icon: Scale,
      title: "Processo Criminal de Trânsito",
      description: "Defesa em crimes de trânsito como embriaguez ao volante, lesão corporal e homicídio culposo.",
      popular: false
    },
    {
      icon: Users,
      title: "Acidentes de Trânsito",
      description: "Indenizações por danos materiais e morais, seguro DPVAT e responsabilidade civil.",
      popular: false
    },
    {
      icon: Briefcase,
      title: "Renovação de CNH",
      description: "Problemas na renovação, exames médicos, restrições e documentação necessária.",
      popular: false
    },
    {
      icon: Building,
      title: "CNH para Estrangeiros",
      description: "Transferência de CNH estrangeira, validação de documentos e processos especiais.",
      popular: false
    },
    {
      icon: Heart,
      title: "Direitos do Condutor",
      description: "Orientações sobre direitos, deveres, fiscalização eletrônica e abordagens policiais.",
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-primary/20">
            🚗 Problemas com CNH Resolvidos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Especialistas em
            <span className="block text-primary">Todos os Problemas de CNH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos você com advogados especialistas em direito de trânsito, verificados pela OAB. 
            Seja qual for seu problema com a CNH, temos o profissional certo para resolver sua situação.
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
            Tem outro problema relacionado à CNH ou trânsito? Nossa plataforma conecta você com especialistas para qualquer situação.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚗 Preço Único para CNH
            </h3>
            <p className="text-muted-foreground mb-6">
              Qualquer problema com sua CNH custa apenas <strong className="text-primary text-xl">R$60</strong> 
              para conectar com um especialista. Sem surpresas, sem taxas ocultas.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-success text-success-foreground">
              ✅ Especialistas em direito de trânsito verificados pela OAB
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;