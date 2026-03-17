import { Camera, PlayCircle } from 'lucide-react';
import { galleryItems, propertyMedia, whatsappUrl } from '../content/property';

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Galeria Real do Imóvel
          </h2>
          <p className="text-lg text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Todas as imagens abaixo são da casa que você está vendo nesta
            landing, incluindo um tour em vídeo para você acompanhar melhor os
            ambientes.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/20">
            <div className="grid md:grid-cols-[0.78fr_1.22fr] h-full">
              <img
                src={propertyMedia.hero}
                alt="Fachada da casa no Condomínio Sunville"
                className="w-full h-full min-h-[360px] object-cover"
              />

              <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    <Camera className="w-4 h-4" />
                    Seleção real do imóvel
                  </span>
                  <h3 className="text-3xl font-semibold text-white mt-5 mb-4">
                    Um tour visual completo, da fachada aos detalhes internos
                  </h3>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    A proposta aqui foi usar suas fotos de forma mais editorial:
                    fachada em destaque, tour em vídeo e os ambientes organizados
                    como uma vitrine do imóvel.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-stone-400 text-sm uppercase tracking-[0.18em] mb-2">
                      Destaque
                    </p>
                    <p className="text-white text-lg font-medium">
                      Fachada marcante com iluminação cênica
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-stone-400 text-sm uppercase tracking-[0.18em] mb-2">
                      Ambientes
                    </p>
                    <p className="text-white text-lg font-medium">
                      Sala integrada, suíte, closet, banheiros e lazer privativo
                    </p>
                  </div>
                </div>

                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600 transition-colors"
                  >
                    Receber mais detalhes no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article
            id="tour"
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/20"
          >
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-300 flex items-center justify-center">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Tour em vídeo</h3>
                <p className="text-stone-400 text-sm">
                  Uma visão dinâmica dos ambientes do imóvel
                </p>
              </div>
            </div>

            <div className="p-6 pt-5">
              <video
                controls
                playsInline
                preload="metadata"
                poster={propertyMedia.hero}
                className="w-full aspect-[4/5] rounded-[1.5rem] object-cover bg-black"
              >
                <source src={propertyMedia.tour} type="video/mp4" />
                Seu navegador não suporta a reprodução do vídeo.
              </video>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
          {galleryItems.map((item) => (
            <article
              key={item.src}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900 shadow-lg shadow-black/10"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300 mb-2">
                  {item.tag}
                </p>
                <p className="text-white text-lg font-medium leading-snug">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
