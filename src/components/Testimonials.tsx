import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      area: "Direito do Trabalho",
      rating: 5,
      comment: "Precisava de orientação urgente sobre minha demissão. Em 10 minutos a plataforma me conectou com uma advogada especialista que me ajudou a entender todos os meus direitos. Valeu cada centavo dos R$60!",
      initials: "MS"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ", 
      area: "Direito de Família",
      rating: 5,
      comment: "Estava com dúvidas sobre pensão alimentícia. A conexão foi super rápida e o advogado me explicou tudo de forma clara. Muito melhor que ficar horas procurando escritório.",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      area: "Direito do Consumidor", 
      rating: 5,
      comment: "Tive problema com compra online e não sabia como resolver. A plataforma me conectou com uma advogada que me orientou sobre meus direitos e como proceder. Consegui resolver tudo online!",
      initials: "AC"
    },
    {
      name: "Pedro Oliveira",
      location: "Porto Alegre, RS",
      area: "Direito Civil",
      rating: 5,
      comment: "Excelente plataforma! Tive dúvidas sobre um contrato de aluguel e fui conectado com um advogado na hora. Muito prático e o profissional foi muito claro nas explicações.",
      initials: "PO"
    },
    {
      name: "Carla Mendes",
      location: "Salvador, BA",
      area: "Direito Previdenciário",
      rating: 5,
      comment: "Estava com problemas no INSS e não sabia por onde começar. A conexão com o especialista me economizou tempo e dinheiro. Agora sei exatamente quais documentos preciso.",
      initials: "CM"
    },
    {
      name: "Roberto Lima",
      location: "Brasília, DF",
      area: "Direito de Trânsito",
      rating: 5,
      comment: "Minha CNH foi suspensa e estava desesperado. A plataforma me conectou rapidamente com um advogado que me explicou todas as possibilidades de recurso. Serviço excepcional!",
      initials: "RL"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            ⭐ Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mais de 10.000 Pessoas
            <span className="block text-primary">Já se Conectaram Conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos usuários falam sobre a experiência de usar a RedeJuri. 
            Histórias reais de pessoas que se conectaram com advogados e resolveram suas questões jurídicas 
            de forma rápida e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                  <Badge variant="outline" className="ml-3 text-xs">
                    {testimonial.area}
                  </Badge>
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card border rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">10.000+</h3>
                <p className="text-muted-foreground">Conexões Realizadas</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">4.9★</h3>
                <p className="text-muted-foreground">Avaliação Média</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">2 min</h3>
                <p className="text-muted-foreground">Tempo Médio de Espera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;