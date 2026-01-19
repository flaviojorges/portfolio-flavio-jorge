import imgCaseDestaque from "figma:asset/1dd0edce46dfcb5e442750b16ce3e4a26916aa55.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative size-full" data-name="container">
      <div className="content-stretch flex flex-col h-[400px] items-start justify-between px-[64px] py-[32px] relative rounded-[36px] shrink-0 w-[1140px]" data-name="case-destaque">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[36px]">
          <div className="absolute inset-0 overflow-hidden rounded-[36px]">
            <img alt="" className="absolute h-[160.31%] left-[-0.04%] max-w-none top-[-35.77%] w-full" src={imgCaseDestaque} />
          </div>
          <div className="absolute inset-0 rounded-[36px]" style={{ backgroundImage: "linear-gradient(-85.3635deg, rgba(0, 0, 0, 0) 27.922%, rgba(1, 2, 27, 0.85) 70.672%)" }} />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start shrink-0 w-[430px]" data-name="container" />
      </div>
    </div>
  );
}