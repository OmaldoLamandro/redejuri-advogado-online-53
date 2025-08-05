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
      title: "Conte seu Problema com CNH",
      description: "Descreva sua situação: CNH suspensa, cassada, multas, pontos acumulados ou qualquer problema de trânsito."
    },
    {
      number: "02", 
      icon: Users,
      title: "Conectamos ao Especialista",
      description: "Instantaneamente conectamos você com um advogado especialista em direito de trânsito, verificado pela OAB e experiente em casos de CNH."
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Consultoria Especializada",
      description: "Converse diretamente com o especialista sobre sua CNH. Receba orientações específicas sobre recursos, defesas e estratégias para seu caso."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Recupere sua CNH",
      description: "Siga as orientações do especialista para resolver sua situação. Se necessário, ele pode representá-lo nos órgãos de trânsito e tribunais."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Urgente",
      description: "CNH vencendo? Suspensão iminente? Conectamos você com especialista em minutos, qualquer dia da semana."
    },
    {
      icon: CreditCard,
      title: "Preço Único CNH",
      description: "R$60 para qualquer problema de CNH, sem taxas extras. Preço justo para recuperar seu direito de dirigir."
    },
    {
      icon: Shield,
      title: "Especialistas em Trânsito",
      description: "Advogados especializados exclusivamente em direito de trânsito, com experiência comprovada em casos de CNH."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            🚗 Processo Simples
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resolva sua CNH
            <span className="block text-primary">em 4 Passos Simples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criamos o processo mais simples para resolver problemas de CNH. Conecte-se com especialistas 
            em direito de trânsito em minutos e recupere seu direito de dirigir.
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
            Sua CNH Pode Ser Recuperada!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Mais de <strong>5.000 motoristas</strong> já recuperaram suas CNHs através da nossa plataforma. 
            Não fique sem dirigir - conecte-se com um especialista agora mesmo.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-xl px-12 py-4 h-auto font-bold bg-white text-primary hover:bg-white/90 border-white animate-gentle-pulse"
            onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Tenho%20problemas%20com%20minha%20CNH%20e%20preciso%20de%20ajuda%20jur%C3%ADdica.%20Podem%20me%20conectar%20com%20um%20advogado%20especialista%3F', '_blank')}
          >
            🚗 RESOLVER CNH - R$60
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