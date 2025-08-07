import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
const Hero = () => {
  return <section className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-3 font-semibold bg-secondary text-secondary-foreground">
              💔 Especialistas em Divórcio e Família
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Faça uma Vídeo Chamada
              <span className="block text-secondary">de 1 Hora com um Advogado</span>
              <span className="block text-white/90">Especialista no Direito Familiar</span>
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/90">
                Proteja seus direitos por R$50
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              <strong>Traição, divórcio ou problemas familiares?</strong> Conectamos você com advogados 
              especialistas em direito de família, verificados pela OAB. Proteja seus direitos e 
              patrimônio de forma rápida e segura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto font-bold shadow-glow hover:scale-105 transition-all duration-300 animate-gentle-pulse" onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20estou%20com%20problemas%20no%20meu%20casamento%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}>
                FALE COM UM ADVOGADO
              </Button>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-white">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">Atendimento Sigiloso</span>
                </div>
              </Card>
              <Card className="p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-white">
                  <Clock className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">Especialistas Família</span>
                </div>
              </Card>
              <Card className="p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-white">
                  <Shield className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">Verificados OAB</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img src={heroImage} alt="Advogados especialistas em direito de família e divórcio" className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto" />
            </div>
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;