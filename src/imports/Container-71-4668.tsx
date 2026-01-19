import imgLogo from "figma:asset/61c2384124655978473d2f8e47665b3c7aeda159.png";
import imgContainer from "figma:asset/1dd0edce46dfcb5e442750b16ce3e4a26916aa55.png";

export default function Container() {
  return (
    <div className="relative rounded-[10px] size-full" data-name="container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgContainer} />
        <div className="absolute inset-0 rounded-[10px]" style={{ backgroundImage: "linear-gradient(91.9569deg, rgba(0, 0, 0, 0) 0.44556%, rgba(3, 7, 38, 0.75) 71.774%)" }} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[150px] py-[64px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="container">
            <div className="h-[133.11px] relative shrink-0 w-[186.081px]" data-name="logo">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="container">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[28px] text-white w-[517px]">Provemos soluções de pagamentos, produtos e serviços para a mobilidade urbana, em diversas cidades do Brasil.</p>
          </div>
        </div>
      </div>
    </div>
  );
}