export default function ContactSection() {
  return (
    <section id="contact" className="mt-[100px] md:ml-[5%] lg:ml-[10%]">
      <h2 className="font-cormorant font-[300] text-white text-h1-mobile lg:text-h1-desktop leading-(--line-height-default)">
        CONTACT
      </h2>
      <span
        className="block w-full h-[1px] mt-[5px] mx-auto bg-gold md:mx-0 md:w-[470px] xl:w-[700px]"
        aria-hidden="true"
      ></span>
      <div className="relative z-20">
        <div className="w-full md:w-[min(750px,100%)] xl:w-full">
          <p className="font-text xl:text-body-desktop mt-[20px] leading-[1.8]">
            Feel free to send an email or call anytime for a chit chat.
          </p>
          <p className="font-text xl:text-body-desktop leading-[1.8]">
            If you have an idea but don&apos;t know where to start, we will
            figure it out together.
          </p>
          <p className="font-text xl:text-body-desktop leading-[1.8]">
            The most important step is to take that first step!
          </p>
        </div>
        <div className="flex items-center justify-between my-[20px] mt-[30px]">
          <a
            href="mailto:kontakt@fedutvikler.com"
            className="block w-fit font-cormorant text-gold-text text-h2-mobile lg:text-h2-desktop"
          >
            kontakt@fedutvikler.com
          </a>
          <div className="flex gap-[20px] text-white text-[30px]">
            <a
              href="https://github.com/Nikita-stud"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.behance.net/fedutvikler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <i className="fa-brands fa-behance" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
