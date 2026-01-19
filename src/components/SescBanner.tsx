import imgLogo from "figma:asset/3f1dc2b24eb0c4db5a2cec30217aef4ac0303bcd.png";

export default function SescBanner() {
  return (
    <div className="relative w-full h-[300px] bg-[#1760ff] rounded-[10px] flex items-center justify-center gap-16 px-[120px]">
      {/* Box da Logo */}
      <div className="flex items-center justify-center">
        <img 
          src={imgLogo} 
          alt="SESC Logo" 
          className="h-[100px] w-auto"
        />
      </div>
      
      {/* Box do Texto */}
      <div className="flex items-center justify-center flex-1">
        <p className="text-white text-[24px] leading-[1.5] text-left">
          Proporcionar bem-estar aos brasileiros, especialmente ao trabalhador do comércio, é a missão do SESC
        </p>
      </div>
    </div>
  );
}