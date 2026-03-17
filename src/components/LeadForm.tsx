import { MessageCircle } from 'lucide-react';

export function LeadForm() {
  const whatsappNumber = "5583993277070";
  const message = "Olá! Gostaria de saber mais sobre a casa de alto padrão no Condomínio Sunville.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contato" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500 blur-[120px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-stone-100 p-12 text-stone-900 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Ficou Interessado?</h3>
              <p className="text-stone-600 font-medium mb-8 text-lg leading-relaxed">
                Fale diretamente comigo pelo WhatsApp para receber o material completo, planta baixa e agendar uma visita ao imóvel.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-sm text-stone-500 uppercase font-bold tracking-wider mb-2">Valor do Imóvel</p>
                <p className="text-3xl font-black text-emerald-600">R$ 870.000</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 p-12 flex flex-col items-center justify-center text-center bg-white">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h4 className="text-3xl font-bold text-stone-900 mb-4">Atendimento Rápido</h4>
            <p className="text-stone-600 mb-8 text-lg max-w-md">
              Clique no botão abaixo e tire todas as suas dúvidas agora mesmo, direto no WhatsApp.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 px-8 rounded-xl transition-all flex items-center justify-center gap-3 group shadow-lg shadow-emerald-500/30 text-lg"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </a>
            <p className="text-xs text-stone-500 text-center mt-6 font-medium">
              Atendimento direto com o construtor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
