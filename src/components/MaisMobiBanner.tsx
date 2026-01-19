import maismobiLogo from 'figma:asset/61c2384124655978473d2f8e47665b3c7aeda159.png';
import maismobiBanner from 'figma:asset/56386e5f0b08d310560f9c758e256ebc417fe2b5.png';

export default function MaisMobiBanner() {
  return (
    <div className="relative rounded-[10px] w-full h-[300px] overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img 
          src={maismobiBanner} 
          alt="MaisMobi Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Logo e texto sobrepostos */}
      <div className="absolute inset-0 flex items-center justify-between px-[80px] py-[64px]">
        {/* Logo */}
        <div className="shrink-0">
          <img 
            src={maismobiLogo} 
            alt="MaisMobi Logo"
            className="h-[80px] w-auto object-contain"
          />
        </div>
        
        {/* Texto */}
        <div className="text-right">
          <p className="text-white text-[32px] leading-[1.5] font-bold whitespace-pre-line">
            Mobilidade Urbana{'\n'}Conectada e Segura
          </p>
        </div>
      </div>
    </div>
  );
}