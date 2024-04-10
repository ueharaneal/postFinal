
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import inputCode from '@/assets/inputcode.jpeg'
import scan from "@/assets/scan.jpeg"
import evenMorePerformance from "@/assets/evenmoreperformace.jpeg"
export default function About() {
  return (
    <TracingBeam className="px-6 mt-28">
      <div className="max-w-2xl mx-auto antialiased mt-15 relative">
        <h1 className="text-lg lg:text-4xl font-bold">How it works</h1>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className=" text-primary text-2xl font-bold uppercase rounded-full text-sm w-fit py-1 mt-5">
              {item.badge}
            </h2>
 
            <p className={twMerge( "text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
 
const dummyContent = [
  {
    title: "Create an appointment",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "step 1",
    image: scan,
  },
  {
    title: "Input the recieved codes",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Step 2",
    image:
     inputCode,
  },
  {
    title: "Busk!",
    description: (
      <>

      </>
    ),
    badge: "Step 3",
    image:
      evenMorePerformance,
  },
];