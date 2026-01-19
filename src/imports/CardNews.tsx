import imgContainer from "figma:asset/8c8b122399214a68d506ff106b64cd903619421d.png";
import imgAvatarImage24 from "figma:asset/627e28723f73251d5b4ec5f57f743d323d92d735.png";

export default function CardNews() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[25px] shadow-[0px_10px_10px_0px_rgba(197,202,206,0.05)] size-full" data-name="card-news">
      <div className="h-[157px] relative rounded-[25px] shrink-0 w-full" data-name="container">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[25px] size-full" src={imgContainer} />
      </div>
      <div className="relative shrink-0 w-full" data-name="container">
        <div className="size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="container">
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1760ff] text-[14px] w-full">
                <p className="leading-[1.5]">/NOTÍCIA</p>
              </div>
              <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#18181b] text-[18px] w-full">
                <p className="leading-[1.5]">Lorem ipsum</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="container">
              <div className="content-stretch flex gap-[8px] items-end relative shrink-0" data-name="container">
                <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Avatar / Image-24">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgAvatarImage24} />
                </div>
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71717a] text-[14px] text-nowrap">
                  <p className="leading-[1.5]">Flavio Jorge</p>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-end relative shrink-0" data-name="container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71717a] text-[12px] text-nowrap">
                  <p className="leading-[1.5]">10/NOV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}