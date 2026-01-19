import imgImg from "figma:asset/8b4027d1911ded41f88c7775938dc1bda92123fd.png";

export default function ImgSesc() {
  return (
    <div className="relative size-full" data-name="img-sesc">
      <div className="absolute blur-[0.5px] filter h-[166px] left-0 rounded-[5px] top-0 w-[178px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
          <div className="absolute bg-[#f2faff] inset-0 rounded-[5px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[5px]">
            <img alt="" className="absolute h-[158.32%] left-[-30.79%] max-w-none top-[-20.15%] w-[165.36%]" src={imgImg} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[5px]">
            <img alt="" className="absolute h-[158.32%] left-[-35.54%] max-w-none top-[-32.88%] w-[165.36%]" src={imgImg} />
          </div>
        </div>
      </div>
    </div>
  );
}