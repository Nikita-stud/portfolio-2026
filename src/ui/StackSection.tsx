import { stack } from '@/constants/stack';

export default function StackSection() {
  return (
    <section id="stack" className="mt-[120px] md:ml-[5%] lg:ml-[10%]">
      <h2 className="font-cormorant  text-white text-h1-mobile lg:text-h1-desktop ">
        Stack
      </h2>
      <span
        className="block   w-[80px] h-[1px] mt-[5px] mb-[30px] bg-gold md:mb-[40px] md:mx-0 md:w-[80px] lg:w-[125px]"
        aria-hidden="true"
      ></span>
      {stack.map((row) => (
        <div
          key={row.label}
          className="relative overflow-hidden [contain:inline-size] mt-[10px] md:mr-[100px] lg:mr-[140px]"
        >
          <ul
            aria-label={`${row.label} stack`}
            className={`flex w-max ${
              row.direction === 'right' ? 'marquee-right' : 'marquee-left'
            }`}
          >
            {[...row.items, ...row.items].map((item, index) => (
              <li
                key={index}
                aria-hidden={index >= row.items.length}
                className="font-text text-white xl:text-body-desktop before:content-['·'] before:mx-[15px] before:text-gold"
              >
                {item}
              </li>
            ))}
          </ul>
          <span
            className="absolute left-0 top-0 h-full w-[60px] bg-linear-to-r from-dark to-transparent md:w-[120px]"
            aria-hidden="true"
          ></span>
          <span
            className="absolute right-0 top-0 h-full w-[60px] bg-linear-to-l from-dark to-transparent md:w-[120px]"
            aria-hidden="true"
          ></span>
        </div>
      ))}
    </section>
  );
}
