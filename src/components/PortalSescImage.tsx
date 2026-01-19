import imgBanner from "figma:asset/c540a74a2d88b19dc57be1817674db3a013cf3b8.png";
import imgOverview from "figma:asset/005a2bdff312a4a741f1a237f07481ba9cc9c7a7.png";
import imgDetails from "figma:asset/0abd7c8675a0dda48235b3cf930909c3d6bb03d2.png";

export function PortalSescImage() {
  return (
    <div className="relative w-full space-y-8">
      {/* Imagem principal */}
      <div className="relative w-full h-auto">
        <img 
          src={imgBanner} 
          alt="Portal SESC - Página Inicial" 
          className="w-full h-auto object-cover rounded-[10px]"
        />
      </div>
      
      {/* Segunda imagem */}
      <div className="relative w-full h-auto">
        <img 
          src={imgOverview} 
          alt="Portal SESC - Overview" 
          className="w-full h-auto object-cover rounded-[10px]"
        />
      </div>
      
      {/* Terceira imagem */}
      <div className="relative w-full h-auto">
        <img 
          src={imgDetails} 
          alt="Portal SESC - Detalhes" 
          className="w-full h-auto object-cover rounded-[10px]"
        />
      </div>
    </div>
  );
}