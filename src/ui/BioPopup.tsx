import Image from 'next/image';

export default function BioPopup() {
  return (
    <div
      id="bio"
      popover="auto"
      className="m-auto max-w-[1100px] max-h-full overflow-y-auto overscroll-contain bg-transparent text-white opacity-0 open:opacity-100 backdrop:bg-dark/90 [scroll-timeline:--bio_y] md:m-0 md:w-full md:h-full md:max-w-none"
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
        className="fixed top-0 inset-x-0 z-5 h-[85px] pointer-events-none bg-linear-to-b from-dark to-transparent lg:h-[100px] xl:h-[130px]"
        aria-hidden="true"
      ></span>
      <button
        type="button"
        popoverTarget="bio"
        popoverTargetAction="hide"
        className="fixed z-10 top-[10px] right-[10px] flex items-center justify-center w-[50px] h-[50px] rounded-full cursor-pointer text-grey scroll-close md:top-[25px] md:right-[40px]"
        aria-label="Close bio"
      >
        <i className="fa-solid fa-xmark text-[30px]" aria-hidden="true"></i>
      </button>
      <div className="flex flex-col items-center gap-[30px] p-[20px] mt-[50px] md:relative md:flex-row md:items-start md:gap-[50px] md:p-[50px] md:mt-[35px] lg:mt-[50px] xl:mt-[80px]">
        <figure className="frame shrink-0 w-full max-w-[400px] h-[450px] p-[10px] md:sticky md:top-[85px] md:ml-[5%] md:max-w-none md:p-[20px] md:w-[300px] lg:top-[100px] lg:ml-[10%] lg:w-[350px] lg:h-[550px] xl:top-[130px] xl:w-[450px] xl:h-[600px]">
          <div className="relative w-full h-full">
            <Image
              src="/me.jpeg"
              alt="Portrait of Nikita Fedorov"
              loading="lazy"
              fill
              className="object-cover"
            />
            <Image
              src="/me2.jpeg"
              alt="Portrait of Nikita Fedorov"
              loading="lazy"
              fill
              className="object-cover scroll-swap"
            />
          </div>
        </figure>
        <article className="text-center md:text-left">
          <div className="font-cormorant text-gold-text text-h2-mobile flex items-center justify-center gap-2 md:justify-start">
            <span aria-hidden="true">Νικίτα Φεντόροφ</span>
            <i className="fa-solid fa-circle text-[5px]" aria-hidden="true"></i>
            <p className="text-h2-mobile">Nikita Fedorov</p>
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
          <p className="font-cormorant lg:text-body-desktop mt-[30px] leading-[1.8]">
            Hello there traveler, I am Nikita Fedorov, a full stack engineer
            with a degree in Front End Development from Noroff University in
            Norway, and I have completed the first of two years in Back-End
            Development at the same institution.
          </p>
          <p className="font-cormorant lg:text-body-desktop mt-[20px] leading-[1.8]">
            Before enrolling at Noroff in October 2022, I worked as a security
            guard at the National Museum in Oslo, Norway, where I was also
            responsible for events and worked as a secretary and housekeeper at
            the same time.
          </p>
          <p className="font-cormorant lg:text-body-desktop mt-[20px] leading-[1.8]">
            I also enrolled in and received a diploma as a qualified carpenter
            back in 2019. This course was fundamental in enhancing various
            skills such as mathematics, mechanical drawing and attention to
            detail.
          </p>
          <p className="font-cormorant lg:text-body-desktop mt-[20px] leading-[1.8]">
            After receiving the diploma, I moved to Germany in 2019 to study
            international business administration at the University of
            Hochschule Worms, where I studied and applied knowledge of
            economics, legal issues and politics in real world business
            settings.
          </p>
          <p className="font-cormorant italic text-gold-text lg:text-body-desktop mt-[30px] mb-[50px]">
            Nothing in excess. Everything with intention.
          </p>
        </article>
      </div>
    </div>
  );
}
