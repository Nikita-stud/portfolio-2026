import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Welcome | Fedorov Utvikler',
  description:
    'Cool that you decided to check out a developers website, here to impress you!',
};

export default function Home() {
  return (
    <div className="md:mt-[35px] lg:mt-[50px]">
      <div className="flex flex-col md:flex-row ">
        <div className="m-auto md:mr-[20px] md:ml-[5%] lg:mr-[50px] lg:ml-[15%]">
          <figure className="frame w-[400px] h-[550px] p-[10px] md:p-[20px] md:w-[300px] md:h-[450px] lg:w-[480px] lg:h-[680px]">
            <div className="relative w-full h-full">
              <Image
                src="/nike.jpg"
                alt="Image of Nike the goddess of victory"
                loading="eager"
                fill
                className="object-cover"
              />
            </div>
          </figure>
        </div>
        <section className="mt-[20px] md:mt-[160px] md:z-10 lg:mt-[320px]">
          <h1>
            AS A <br />
            <span className="text-gold-text">
              FULL
              <i
                className="fa-solid fa-minus mx-[1px] text-[15px] -rotate-10 md:mx-[5px] md:text-[20px] md:relative md:-top-[8px]"
                aria-hidden="true"
              ></i>
              STACK
            </span>
            <br /> ENGINEER
          </h1>
          <p className="font-cormorant text-h1-mobile lg:text-h1-desktop mt-[20px] font-[200] leading-(--line-height-default)">
            I WELCOME <br className="hidden md:inline lg:hidden" />
            YOU TO <br className="hidden md:inline lg:hidden" />
            THIS JOURNEY
          </p>
        </section>
      </div>
    </div>
  );
}
