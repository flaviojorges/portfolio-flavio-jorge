import imgImg from "figma:asset/6adf45bafaf7994dea8f1a5b23177cc33050a04e.png";
import imgImg2 from "figma:asset/a92dc90fa647ef888d3796d866231d5c838792ad.png";
import imgImg1 from "figma:asset/69c45506cf89c5265b5ef77ac39deb2def022f8f.png";

export default function ImgAnjodebolso() {
  return (
    <div className="bg-[#f2faff] blur-[0.5px] filter overflow-clip relative rounded-[10px] size-full" data-name="img-anjodebolso">
      <div className="absolute h-[101px] left-[110px] top-[31px] w-[53px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.41%] left-[-74.12%] max-w-none top-[-7.16%] w-[247.79%]" src={imgImg} />
        </div>
      </div>
      <div className="absolute h-[117px] left-[57px] top-[23px] w-[56px]" data-name="img 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2} />
      </div>
      <div className="absolute h-[117px] left-[14px] top-[31px] w-[61px]" data-name="img 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1} />
      </div>
    </div>
  );
}