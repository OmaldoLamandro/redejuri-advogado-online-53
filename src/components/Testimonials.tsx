import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      area: "Divórcio Consensual",
      rating: 5,
      comment: "Descobri uma traição e estava perdida. Em 10 minutos me conectaram com uma advogada especialista que me explicou todos os meus direitos. Me senti acolhida e protegida. Valeu cada centavo!",
      initials: "MS"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ", 
      area: "Pensão Alimentícia",
      rating: 5,
      comment: "Estava com dúvidas sobre pensão após o divórcio. A conexão foi super rápida e o advogado me explicou tudo com muita paciência. Muito melhor que sofrer sozinho.",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      area: "Guarda dos Filhos", 
      rating: 5,
      comment: "Estava preocupada com a guarda das crianças no divórcio. A advogada me orientou sobre todos os meus direitos como mãe e como proteger os interesses dos meus filhos.",
      initials: "AC"
    },
    {
      name: "Pedro Oliveira",
      location: "Porto Alegre, RS",
      area: "Partilha de Bens",
      rating: 5,
      comment: "Excelente plataforma! Tinha dúvidas sobre a divisão dos bens no divórcio. Fui conectado com um especialista na hora que me explicou todo o processo. Muito esclarecedor!",
      initials: "PO"
    },
    {
      name: "Carla Mendes",
      location: "Salvador, BA",
      area: "Violência Doméstica",
      rating: 5,
      comment: "Estava em uma situação difícil e não sabia como proceder. A conexão com a especialista me deu coragem e direcionamento. Consegui as medidas protetivas que precisava.",
      initials: "CM"
    },
    {
      name: "Roberto Lima",
      location: "Brasília, DF",
      area: "Divórcio Litigioso",
      rating: 5,
      comment: "Meu ex não queria fazer acordo e eu estava desesperado. A plataforma me conectou rapidamente com um advogado que me mostrou todas as estratégias. Serviço excepcional!",
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