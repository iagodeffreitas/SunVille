import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
          alt="Fachada da Casa" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block py-1 px-4 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm"
        >
          Pronta para Morar
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          Casa de Alto Padrão no <span className="text-amber-400">Sunville</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-stone-200 mb-10 font-light drop-shadow-md"
        >
          Exclusividade, conforto e acabamento premium em João Pessoa.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contato" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold rounded-lg transition-colors text-lg w-full sm:w-auto shadow-xl shadow-amber-500/20">
            Agendar Visita
          </a>
          <a href="#detalhes" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium rounded-lg transition-colors border border-white/20 text-lg w-full sm:w-auto">
            Ver Detalhes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
