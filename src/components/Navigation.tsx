export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl">Flavio Jorge</div>
          
          <div className="flex items-center gap-12">
            <a href="#work" className="hover:text-gray-600 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
