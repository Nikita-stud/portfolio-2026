import Image from 'next/image';
import SideName from '@/ui/SideName';

export default function BioPopup() {
  return (
    <div
      id="bio"
      popover="auto"
      className="m-auto max-w-[1100px] max-h-full overflow-y-auto overscroll-contain bg-transparent text-white opacity-0 open:opacity-100 starting:open:opacity-100 backdrop:bg-dark/90 [scroll-timeline:--bio_y] md:m-0 md:w-full md:h-full md:max-w-none"
    >
      <button
        type="button"
        popoverTarget="bio"
        popoverTargetAction="hide"
        className="hidden md:block fixed inset-0 cursor-default"
        tabIndex={-1}
        aria-hidden="true"
      ></button>
      <span
        className="fixed top-0 inset-x-0 z-5 h-[85px] pointer-events-none bg-linear-to-b from-dark to-transparent md:h-[70px] lg:h-[85px] xl:h-[115px]"
        aria-hidden="true"
      ></span>
      <div
        className="hidden md:block starting:opacity-100 **:starting:opacity-100 [&_aside]:z-10 [&_aside]:animate-none"
        inert
      >
        <SideName />
      </div>
      <button
        type="button"
        popoverTarget="bio"
        popoverTargetAction="hide"
        className="fixed z-10 top-[10px] right-[10px] flex items-center justify-center w-[50px] h-[50px] rounded-full cursor-pointer text-grey scroll-close md:top-[25px] md:right-[40px]"
        aria-label="Close bio"
      >
        <i className="fa-solid fa-xmark text-[30px]" aria-hidden="true"></i>
      </button>
      <div className="flex flex-col items-center gap-[30px] p-[20px] mt-[50px] md:relative md:flex-row md:items-start md:gap-[50px] md:p-[35px] md:mt-[35px] lg:mt-[50px] xl:mt-[80px]">
        <figure className="frame starting:opacity-100 shrink-0 w-full max-w-[400px] h-[450px] p-[10px] md:sticky md:top-[70px] md:ml-[5%] md:max-w-none md:p-[20px] md:w-[300px] lg:top-[85px] lg:ml-[10%] lg:w-[350px] lg:h-[550px] xl:top-[115px] xl:w-[450px] xl:h-[600px]">
          <div className="relative w-full h-full">
            <Image
              src="/me.jpeg"
              alt="Portrait of Nikita Fedorov"
              loading="lazy"
              fill
              sizes="(min-width: 1280px) 450px, (min-width: 1024px) 350px, (min-width: 744px) 300px, 400px"
              className="object-cover"
            />
            <Image
              src="/me2.jpeg"
              alt="Portrait of Nikita Fedorov"
              loading="lazy"
              fill
              sizes="(min-width: 1280px) 450px, (min-width: 1024px) 350px, (min-width: 744px) 300px, 400px"
              className="object-cover scroll-swap"
            />
          </div>
        </figure>
        <article className="text-center md:text-left">
          <div className="font-cormorant text-gold-text text-h2-mobile flex items-center justify-center gap-2 md:justify-start">
            <span aria-hidden="true">Νικίτα Φεντόροφ</span>
            <i className="fa-solid fa-circle text-[5px]" aria-hidden="true"></i>
            <p className="font-cormorant text-h2-mobile">Nikita Fedorov</p>
          </div>
          <span
            className="block w-[280px] h-[1px] mt-[20px] mx-auto bg-gold md:mx-0"
            aria-hidden="true"
          ></span>
          <h2 className="font-cormorant font-[300] text-white text-h1-mobile lg:text-h1-desktop mt-[20px] leading-(--line-height-default)">
            JUMP OFF THE CLIFF <br /> AND BUILD THE AIRPLANE ON THE WAY DOWN
          </h2>
          <span
            className="block w-[280px] h-[1px] mt-[20px] mx-auto bg-gold md:mx-0"
            aria-hidden="true"
          ></span>
          <p className="font-text text-white text-xs-mobile mt-[30px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose)">
            Hello there traveler, I am Nikita Fedorov, a full stack engineer
            with a vocational degree in Front
            <i
              className="fa-solid fa-minus mx-[1px] text-[10px] -rotate-10 md:mx-[3px] md:text-[10px] md:relative md:-top-[2px] lg:-top-[4px]"
              aria-hidden="true"
            ></i>
            <span className="sr-only">-</span>
            End Development from Noroff University in Norway, and I have
            completed the first of two years in Back
            <i
              className="fa-solid fa-minus mx-[1px] text-[10px] -rotate-10 md:mx-[3px] md:text-[10px] md:relative md:-top-[2px] lg:-top-[4px]"
              aria-hidden="true"
            ></i>
            <span className="sr-only">-</span>
            End Development at the same institution.
          </p>
          <p className="font-text text-white text-xs-mobile mt-[20px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose)">
            Before enrolling at Noroff in October 2022, I worked as a security
            guard at the National Museum in Oslo, Norway. Working multiple jobs
            such as being an event manager, secretary and housekeeper at the
            same time.
          </p>
          <p className="font-text text-white text-xs-mobile mt-[20px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose)">
            I also enrolled in and received a diploma as a qualified carpenter
            back in 2019. This course was fundamental in enhancing various
            skills such as mathematics, mechanical drawing and attention to
            detail.
          </p>
          <p className="font-text text-white text-xs-mobile mt-[20px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose)">
            After receiving the diploma, I moved to Germany in 2019 to study
            international business administration at the University of
            Hochschule Worms, where I studied and applied knowledge of
            economics, legal issues and politics in real world business
            settings.
          </p>
          <p className="font-cormorant italic text-gold-text lg:text-body-desktop mt-[30px] mb-[75px]">
            Nothing in excess. Everything with intention.
          </p>
        </article>
      </div>
    </div>
  );
}
