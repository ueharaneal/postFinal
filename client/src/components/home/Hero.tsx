import BuskingCard from '@/components/home/BuskingCard'
export default function Hero() {
  return (
    <div className="h-1/2 flex-col w-full  max-w-5/6 bg-inherit rounded-md flex md:items-center md:justify-center antialiased  relative overflow-hidden">
      <div className=" absolute top-0 right-10 text-foreground ">
        <BuskingCard/>
      </div>
      <div className=" p-3 max-w-8xl  mx-auto relative z-10  w-full mt-20 pt-20 px-96 md:pt-0">
        <h1 className="text-3xl md:text-7xl py-6 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-start bg-opacity-50">
          PFRM <br /> Smart Busking Speakers
        </h1>
        <p className="mt-4 font-normal text-sm md:text-base text-popover-foreground max-w-lg text-center mx-auto">
          Busking has never been easier
        </p>
      </div>
    </div>
  );
}
