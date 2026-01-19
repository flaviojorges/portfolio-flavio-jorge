import imgLogo from "figma:asset/61c2384124655978473d2f8e47665b3c7aeda159.png";

export default function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="logo">
      <div className="h-[133.11px] relative shrink-0 w-[186.081px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}