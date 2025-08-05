import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageCircle, 
  CreditCard, 
  CheckCircle,
  Clock,
  Shield,
  Users
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Conte sua Situação Familiar",
      description: "Descreva sua situação: traição descoberta, processo de divórcio, guarda dos filhos ou qualquer problema familiar."
    },
    {
      number: "02", 
      icon: Users,
      title: "Conectamos ao Especialista",
      description: "Instantaneamente conectamos você com um advogado especialista em direito de família, verificado pela OAB e experiente em casos de divórcio."
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Consultoria Sigilosa",
      description: "Converse diretamente com o especialista sobre sua situação. Receba orientações específicas sobre seus direitos, estratégias e próximos passos."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Proteja seus Direitos",
      description: "Siga as orientações do especialista para proteger seus direitos e patrimônio. Ele pode representá-lo em cartórios e tribunais se necessário."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Sigiloso",
      description: "Situação urgente? Traição descoberta? Conectamos você com especialista em minutos, com total sigilo e discrição."
    },
    {
      icon: CreditCard,
      title: "Preço Único Família",
      description: "R$60 para qualquer problema familiar, sem taxas extras. Preço justo para proteger seus direitos e patrimônio."
    },
    {
      icon: Shield,
      title: "Especialistas em Família",
      description: "Advogados especializados exclusivamente em direito de família, com experiência comprovada em divórcio e traição."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            💔 Processo Simples
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proteja seus Direitos
            <span className="block text-primary">em 4 Passos Simples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criamos o processo mais simples para resolver problemas familiares. Conecte-se com especialistas 
            em direito de família em minutos e proteja seus direitos e patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-elegant transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-glow">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Você Não Está Sozinho(a)!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Mais de <strong>5.000 pessoas</strong> já protegeram seus direitos através da nossa plataforma. 
            Não sofra em silêncio - conecte-se com um especialista agora mesmo.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-xl px-12 py-4 h-auto font-bold bg-white text-primary hover:bg-white/90 border-white animate-gentle-pulse"
            onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20estou%20com%20problemas%20no%20meu%20casamento%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
          >
            FALE COM UM ADVOGADO
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;