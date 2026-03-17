import { Check, ShieldCheck } from 'lucide-react';

export function Condominium() {
  const amenities = [
    'Salão de festas',
    'Espaço gourmet com terraço',
    'Salão de jogos',
    'Espaço fitness',
    'Terraço coberto',
    'Piscina adulto com raia',
    'Piscina infantil',
    'Banheiros na área das piscinas',
    'Duchas nas áreas das piscinas',
    'Deck molhado',
    'Solarium',
    'Terraço bar',
    'Gazebo',
    'Campo de futebol gramado',
    'Quadra de areia para vôlei',
    'Duchas na área do campo e quadra',
    'Lavabos na área da churrasqueira',
    'Churrasqueira',
    'Playgrounds',
    'Jardins gramados',
    'Administração',
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O Condomínio Sunville
          </h2>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Localizado em uma área tranquila, de fácil acesso e que tem tudo o
            que você precisa. Está próximo ao centro de convenções, teatro,
            colégios, supermercados, universidade, faculdades, shopping, praias
            e muito mais.
          </p>
        </div>

        <div className="bg-stone-800/50 rounded-[2rem] p-8 md:p-12 border border-stone-700/50 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-stone-700/50 pb-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 flex items-center justify-center md:justify-start gap-3">
                <ShieldCheck className="w-8 h-8 shrink-0" />
                Infraestrutura Completa e Segurança
              </h3>
              <p className="text-stone-300 text-lg">
                Mais de 20 itens de lazer, conforto e segurança, para você ter
                mais qualidade na sua vida.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/40 transition-colors">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-stone-300 group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
