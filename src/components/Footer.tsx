export function Footer() {
  return (
    <footer className="bg-stone-950 py-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-stone-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Casa Sunville. Todos os direitos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors text-sm font-medium">
            Política de Privacidade
          </a>
          <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors text-sm font-medium">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
