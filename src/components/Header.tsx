import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/81dfea57-b641-4d9a-a599-f80a91c8b71e.png" alt="RedeJuri" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>

        <Button 
          variant="cta" 
          size="lg" 
          className="font-bold px-6 animate-gentle-pulse"
          onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20estou%20com%20problemas%20no%20meu%20casamento%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
        >
          FALE COM UM ADVOGADO
        </Button>
      </div>
    </header>
  );
};

export default Header;