import Image from 'next/image';

const steps = [
  {
    label: 'Idea',
    image: '/thinker.jpg',
  },
  {
    label: 'Contact',
    image: '/contact.jpg',
  },
  {
    label: 'Review',
    image: '/review.jpg',
  },
  {
    label: 'Launch',
    image: '/launch.jpg',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mt-[100px] md:ml-[5%] lg:ml-[10%]">
      <h2 className="font-cormorant font-[300] text-white text-h1-mobile  lg:text-h1-desktop leading-(--line-height-default)">
        CONTACT
      </h2>
      <span
        className="block w-full h-[1px] mt-[5px] mx-auto bg-gold md:mb-[50px] md:mx-0 md:w-[165px] lg:w-[260px]"
        aria-hidden="true"
      ></span>

      <ol
        aria-label="Steps from idea to launch"
        className="grid grid-cols-4 mt-[30px] md:mr-[100px] lg:mr-[140px]"
      >
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={`group flex ${
              index % 2 === 1 ? 'flex-col-reverse' : 'flex-col'
            }`}
          >
            <div
              className="frame aspect-square p-[5px] md:p-[10px]"
              aria-hidden="true"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={step.image}
                  alt=""
                  loading="lazy"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="relative flex items-center justify-center h-[64px]">
              <span className="absolute left-0 right-1/2 h-[2px] bg-grey/30 transition-colors duration-500 group-hover:bg-gold in-[li:has(~li:hover)]:bg-gold group-first:hidden"></span>
              <span className="absolute left-1/2 right-0 h-[2px] bg-grey/30 transition-colors duration-500 in-[li:has(~li:hover)]:bg-gold group-last:hidden"></span>
              <span className="relative px-[5px] py-[5px] bg-dark border border-gold-darker font-text text-xs-mobile text-white transition-colors duration-500 group-hover:text-gold-text md:px-[10px]">
                {step.label}
              </span>
            </div>
            <div className="aspect-square"></div>
          </li>
        ))}
      </ol>
      <div className="relative z-20 mt-[40px]">
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
            <i className="fa-solid fa-envelope text-gold-text text-body-mobile"></i>{' '}
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
