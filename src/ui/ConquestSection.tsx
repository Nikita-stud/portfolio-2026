import Image from 'next/image';

export default function ConquestSection() {
  return (
    <section id="conquest" className="mt-[50px] md:mt-[100px]">
      <div className="md:ml-[5%] md:mr-[100px] lg:ml-[10%] lg:mr-[140px]">
        <h2 className="font-cormorant text-white text-h1-mobile lg:text-h1-desktop">
          CONQUEST
        </h2>
        <span
          className="block w-[185px] h-[1px] mt-[5px] mb-[30px] bg-gold lg:w-[285px]"
          aria-hidden="true"
        ></span>
        <div>
          <p className="font-text text-white text-xs-mobile mb-[20px] leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) lg:leading-(--line-height-tight) xl:text-body-desktop">
            My path here was not a straight line. I started out as a carpenter,
            building things you could touch, before studying business in
            Germany. Then I found code and never looked back. I studied frontend
            development, and now I am diving deep into the backend. These days I
            spend my time building websites, backend and bots for friends and
            clients all over the world, and I enjoy every bit of it.
          </p>
          <blockquote className="max-w-[450px] md:max-w-[750px]">
            <span
              className="block w-[280px] h-[1px] mb-[20px] bg-gold"
              aria-hidden="true"
            ></span>
            <p className="font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) lg:leading-(--line-height-tight) xl:text-body-desktop">
              Before excellence the immortal gods have placed sweat. Long and
              steep is the path to it, and rough at first, but once you reach
              the top, it becomes easy, however hard it was.
            </p>
            <p className="font-text text-xs-mobile text-gold-darker mt-[10px]">
              Hesiod, <cite>Works and Days</cite>
            </p>
            <span
              className="block w-[280px] h-[1px] mt-[20px] bg-gold"
              aria-hidden="true"
            ></span>
          </blockquote>
        </div>
      </div>
      <figure className="relative aspect-[4/3] -mx-[20px] sm:-mx-[35px] md:-mx-[50px]">
        <Image
          src="/main.jpg"
          alt="Marble wrestlers statue in a dark gallery of gilded paintings"
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute left-[29.4%] top-[35.5%] w-[24.4%] h-[27.3%]">
          <Image
            src="/nike.jpg"
            alt=""
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
        <span
          className="absolute inset-x-0 top-0 h-[45%] md:h-[50%] bg-linear-to-b from-dark from-20% to-transparent"
          aria-hidden="true"
        ></span>
        <span
          className="absolute inset-x-0 bottom-0 h-[20%] bg-linear-to-t from-dark from-20% to-transparent"
          aria-hidden="true"
        ></span>
      </figure>
    </section>
  );
}
