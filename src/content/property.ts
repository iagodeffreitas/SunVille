export const propertyMedia = {
  hero: '/media/fachada.jpeg',
  living: '/media/sala-cozinha-integrada.jpeg',
  gourmet: '/media/area-gourmet.jpeg',
  suite: '/media/suite-master.jpeg',
  bedroom: '/media/quarto.jpeg',
  closet: '/media/closet.jpeg',
  socialBath: '/media/wc-social.jpeg',
  suiteBath: '/media/wc-suite-master.jpeg',
  tour: '/media/tour-geral.mp4',
} as const;

export const whatsappNumber = '5583993277070';
export const whatsappMessage =
  'Olá! Gostaria de saber mais sobre a casa de alto padrão no Condomínio Sunville.';
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const galleryItems = [
  {
    src: propertyMedia.living,
    alt: 'Sala com cozinha americana integrada e acabamento em porcelanato.',
    tag: 'Ambiente Integrado',
    title: 'Sala e cozinha com pé-direito valorizado',
  },
  {
    src: propertyMedia.gourmet,
    alt: 'Área gourmet com churrasqueira e piscina privativa.',
    tag: 'Lazer Privativo',
    title: 'Piscina e espaço gourmet prontos para receber',
  },
  {
    src: propertyMedia.suite,
    alt: 'Suíte master com acabamento claro e esquadrias pretas.',
    tag: 'Suíte Master',
    title: 'Conforto e sobriedade em um espaço generoso',
  },
  {
    src: propertyMedia.bedroom,
    alt: 'Quarto com piso em porcelanato e janela ampla.',
    tag: 'Quarto',
    title: 'Dormitórios com acabamento clean e iluminação natural',
  },
  {
    src: propertyMedia.closet,
    alt: 'Closet da suíte master com acabamento minimalista.',
    tag: 'Closet',
    title: 'Espaço dedicado para organização e praticidade',
  },
  {
    src: propertyMedia.socialBath,
    alt: 'Banheiro social revestido em porcelanato marmorizado.',
    tag: 'Banheiro Social',
    title: 'Bancada escura contrastando com revestimento sofisticado',
  },
  {
    src: propertyMedia.suiteBath,
    alt: 'Banheiro da suíte master com cuba de apoio e nicho embutido.',
    tag: 'Banho Suíte',
    title: 'Detalhes contemporâneos no banheiro da suíte master',
  },
];
