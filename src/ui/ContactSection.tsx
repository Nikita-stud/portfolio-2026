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
      <h2 className="font-cormorant text-white text-h1-mobile lg:text-h1-desktop">
        CONTACT
      </h2>
      <span
        className="block w-[170px] h-[1px] mt-[5px] bg-gold md:mb-[40px] md:w-[165px] lg:w-[260px]"
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
              className="frame max-md:border-0 md:p-[10px]"
              aria-hidden="true"
            >
              <div className="relative aspect-square overflow-hidden">
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
              <span className="absolute left-0 right-1/2 h-[2px] bg-grey/30 group-first:hidden"></span>
              <span className="absolute left-1/2 right-0 h-[2px] bg-grey/30 group-last:hidden"></span>
              <span
                className="absolute right-1/2 h-[2px] bg-gold origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ width: `${index * 100}%` }}
              ></span>
              <span
                className={`absolute left-1/2 w-[2px] -translate-x-1/2 bg-grey/30 transition-colors duration-500 group-hover:bg-gold ${
                  index % 2 === 1 ? 'top-1/2 bottom-0' : 'top-0 bottom-1/2'
                }`}
              ></span>
              <span className="relative z-10 px-[5px] py-[5px] bg-dark border border-gold-darker font-text text-xs text-white transition-colors duration-500 group-hover:text-gold-text md:px-[10px] md:text-xs-mobile">
                {step.label}
              </span>
            </div>
            <div className="aspect-square"></div>
          </li>
        ))}
      </ol>
      <div className="relative z-20 mt-[40px]">
        <div className="w-full md:w-[min(750px,100%)] xl:w-full">
          <p className="font-text text-white text-xs-mobile mt-[20px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) xl:text-body-desktop">
            Feel free to send an email or call anytime for a chit chat.
          </p>
          <p className="font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) xl:text-body-desktop">
            If you have an idea but don&apos;t know where to start, we will
            figure it out together.
          </p>
          <p className="font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) xl:text-body-desktop">
            The most important step is to take that first step!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[20px] gap-y-[30px] mt-[30px] mb-[20px]">
          <a
            href="mailto:kontakt@fedutvikler.com"
            className="w-fit font-cormorant text-gold-text text-h2-mobile lg:text-h2-desktop"
          >
            <i className="fa-solid fa-envelope text-body-mobile"></i>{' '}
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
