import { Maximize, BedDouble, Bath, Car, Waves, UtensilsCrossed } from 'lucide-react';

export function Features() {
  const features = [
    { icon: <Maximize className="w-8 h-8" />, title: '103 m²', subtitle: 'Área construída' },
    { icon: <BedDouble className="w-8 h-8" />, title: '3 quartos', subtitle: '1 suíte master com closet' },
    { icon: <Bath className="w-8 h-8" />, title: '3 banheiros', subtitle: 'Sendo 1 lavabo' },
    { icon: <Waves className="w-8 h-8" />, title: 'Piscina', subtitle: 'Área de lazer privativa' },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: 'Espaço gourmet', subtitle: 'Com churrasqueira' },
    { icon: <Car className="w-8 h-8" />, title: 'Garagem', subtitle: 'Vagas para veículos' },
  ];

  return (
    <section id="detalhes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
            O Imóvel Perfeito para Você
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Design moderno, ambientes integrados e uma área de lazer incrível
            para sua família desfrutar os melhores momentos.
          </p>
          <div className="mt-10 inline-block bg-stone-50 border border-stone-200 px-8 py-4 rounded-2xl shadow-sm">
            <span className="text-stone-500 uppercase tracking-wider text-sm font-semibold">
              Valor do investimento
            </span>
            <p className="text-4xl font-black text-emerald-600 mt-1">R$ 870.000</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-0 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
              <p className="text-stone-500">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
