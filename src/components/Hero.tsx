import { ArrowDownRight, MapPin, MessageCircle, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { propertyMedia, whatsappUrl } from '../content/property';

export function Hero() {
  const highlights = [
    '103 m² de área construída',
    '3 quartos, sendo 1 suíte master com closet',
    'Piscina e espaço gourmet privativos',
  ];

  return (
    <section className="relative isolate overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.22),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.16),_transparent_28%)]"></div>
      <div className="absolute inset-y-0 right-0 hidden lg:block w-1/3 bg-white/5 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16 lg:py-20">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-12 xl:gap-16 items-center w-full">
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/15 text-amber-200 border border-amber-400/20 text-sm font-medium tracking-[0.18em] uppercase mb-6 backdrop-blur-sm"
            >
              Pronta para morar
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight text-balance"
            >
              Casa de Alto Padrão no <span className="text-amber-400">Sunville</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed mb-8"
            >
              Exclusividade, conforto e acabamento premium em uma casa real,
              pronta para receber sua família em João Pessoa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-stone-200 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#contato"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl transition-colors text-lg w-full sm:w-auto shadow-xl shadow-amber-500/20 text-center"
              >
                Agendar visita
              </a>
              <a
                href="#galeria"
                className="px-8 py-4 bg-white/8 hover:bg-white/14 backdrop-blur-md text-white font-medium rounded-xl transition-colors border border-white/15 text-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                Ver fotos e tour
                <ArrowDownRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-stone-300"
            >
              <div className="inline-flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                Condomínio Sunville, Mucumagro, João Pessoa - PB
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Atendimento direto no WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="order-1 lg:order-2 relative lg:justify-self-end w-full max-w-[32rem]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.6rem] aspect-[4/5]">
                <img
                  src={propertyMedia.hero}
                  alt="Fachada da casa no Condomínio Sunville"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-amber-300 uppercase tracking-[0.18em] text-xs font-semibold mb-2">
                    Fachada contemporânea
                  </p>
                  <p className="text-white text-2xl font-semibold leading-tight">
                    Projeto com presença marcante e iluminação em destaque
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="absolute -right-3 top-6 sm:right-6 bg-stone-950/80 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md shadow-xl"
            >
              <a
                href="#tour"
                className="inline-flex items-center gap-2 text-white text-sm font-medium"
              >
                <PlayCircle className="w-5 h-5 text-amber-400" />
                Tour em vídeo disponível
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="absolute -left-3 bottom-4 sm:-left-12 sm:bottom-8 w-40 sm:w-52 rounded-[1.5rem] overflow-hidden border border-white/10 bg-stone-900/85 shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <img
                src={propertyMedia.gourmet}
                alt="Piscina com área gourmet da casa"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-1">
                  Lazer privativo
                </p>
                <p className="text-sm font-medium text-white leading-snug">
                  Piscina e gourmet integrados
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
