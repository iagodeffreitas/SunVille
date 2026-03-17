import { CheckCircle2 } from 'lucide-react';
import { propertyMedia } from '../content/property';

export function Differentials() {
  const items = [
    'Piso e paredes em porcelanato Elizabeth 1,00 x 1,00',
    'Pré-instalação de split nos quartos e na sala',
    'Bancadas feitas em granito São Gabriel',
    'Banheiros com cuba de sobrepor, vaso sanitário Celite, torneira Docol e chuveiro Lorenzetti',
    'Cozinha e área gourmet com cuba de inox Tramontina',
    'Nicho de granito em todos os banheiros',
    'Forro de gesso com detalhes de cantoneira',
    'Porta de entrada em alumínio e fechadura eletrônica',
    'Esquadrias de alumínio preta da linha Suprema',
    'Portas internas cinza com borracha de vedação, amortecimento e fechadura Pado em inox',
    'Detalhes de fita de LED na fachada e jardim com plantas',
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
              Acabamento Premium em Cada Detalhe
            </h2>
            <p className="text-lg text-stone-600 mb-10">
              A casa foi construída com materiais de altíssima qualidade,
              pensando no seu conforto, durabilidade e sofisticação.
            </p>

            <ul className="space-y-5">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-stone-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={propertyMedia.living}
                alt="Sala integrada com cozinha americana e acabamento premium"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
