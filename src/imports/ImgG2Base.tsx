import imgImg from "figma:asset/72857a35e423a9e2e724b93d424b1fc6989a265c.png";

export default function ImgG2Base() {
  return (
    <div className="relative size-full" data-name="img-g2base">
      <div className="absolute blur-[0.5px] filter h-[166px] left-0 rounded-[5px] top-0 w-[178px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
          <div className="absolute bg-[#f2faff] inset-0 rounded-[5px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[5px]">
            <img alt="" className="absolute h-[162.05%] left-[-59.97%] max-w-none top-[-13.23%] w-[201.5%]" src={imgImg} />
          </div>
        </div>
      </div>
    </div>
  );
}