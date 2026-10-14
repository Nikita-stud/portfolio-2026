import type { Metadata } from 'next';
import Image from 'next/image';
import BioPopup from '@/ui/BioPopup';
import WorksSection from '@/ui/WorksSection';
import RequestSection from '@/ui/RequestSection';
import ContactSection from '@/ui/ContactSection';
import StackSection from '@/ui/StackSection';

export const metadata: Metadata = {
  title: 'Welcome | Fedorov Utvikler',
  description:
    'Cool that you decided to check out a developers website, here to impress you!',
};

export default function Home() {
  return (
    <>
      <div id="about" className="md:mt-[35px] lg:mt-[50px] xl:mt-[80px]">
        <div className="flex flex-col md:flex-row ">
          <div className="m-auto md:mr-[20px] md:ml-[5%] lg:mr-[20px] lg:ml-[10%] xl:mr-[50px]">
            <button
              type="button"
              popoverTarget="bio"
              className="cursor-pointer"
              aria-label="Open bio"
            >
              <figure className="frame frame-spin w-[400px] h-[550px] p-[10px] md:p-[20px] md:w-[300px] md:h-[450px] lg:w-[350px] lg:h-[550px] xl:w-[450px] xl:h-[600px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/nike.jpg"
                    alt="Image of Nike the goddess of victory"
                    loading="eager"
                    fill
                    sizes="(min-width: 1280px) 450px, (min-width: 1024px) 350px, (min-width: 744px) 300px, 400px"
                    className="object-cover"
                  />
                </div>
              </figure>
            </button>
            <BioPopup />
          </div>
          <section className="delay-show mt-[20px] md:mt-[160px] md:z-10 lg:mt-[130px] xl:mt-[240px]">
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
              I WELCOME <br className="hidden md:inline xl:hidden" />
              YOU <br className="hidden xl:inline" />
              TO <br className="hidden md:inline xl:hidden" />
              THIS JOURNEY
            </p>
          </section>
        </div>
      </div>
      <StackSection />

      <RequestSection />
      <figure className="relative h-[500px] mt-[100px] -mx-[20px] sm:-mx-[35px] md:-mx-[50px] md:h-[700px] xl:h-[900px]">
        <Image
          src="/main.jpg"
          alt="Marble wrestlers statue in a dark gallery of gilded paintings"
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <span
          className="absolute inset-x-0 top-0 h-[30%] bg-linear-to-b from-dark to-transparent"
          aria-hidden="true"
        ></span>
        <span
          className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-dark to-transparent"
          aria-hidden="true"
        ></span>
      </figure>
      <WorksSection />
      <ContactSection />
    </>
  );
}
