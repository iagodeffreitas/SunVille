import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Localização Privilegiada</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Condomínio Sunville - Segurança, lazer e tranquilidade para sua família viver os melhores momentos.</p>
        </div>
        
        <div className="bg-stone-50 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-stone-100 shadow-sm max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
            <MapPin className="w-10 h-10" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Avenida Escritor Ramalho Leite</h3>
            <p className="text-stone-600 text-xl">Bairro Mucumagro, João Pessoa - PB</p>
            <p className="text-stone-500 mt-2 font-mono bg-stone-200/50 inline-block px-3 py-1 rounded-md">CEP: 58066-150</p>
          </div>
        </div>
      </div>
    </section>
  );
}
