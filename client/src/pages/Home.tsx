import Hero from "@/components/home/Hero";
import WhoFor from "@/components/home/WhoFor";
import { Spotlight } from "@/components/ui/Spotlight.tsx";
function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-100 "
        fill="purple"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-100 "
        fill="blue"
      />
      <Spotlight
        className="-top-50 left-0 md:left-60 md:-top-70 "
        fill="violet"
      />
      <Spotlight
        className="-top-50 left-0 md:left-60 md:-top-20 "
        fill="purple"
      />
      <div className="h-5/6 mt-64">
        <Hero />
      </div>

      <WhoFor />
    </div>
  );
}
export default Home;
