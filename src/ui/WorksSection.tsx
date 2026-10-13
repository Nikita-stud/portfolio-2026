'use client';
import Link from 'next/link';

const works = [
  { href: '#about', title: 'JS' },
  { href: '#works', title: 'works' },
  { href: '#request', title: 'request' },
  { href: '#contact', title: 'contact' },
];

export default function WorksSection() {
  return (
    <section id="works" className="mt-[120px] md:ml-[5%] lg:ml-[10%]">
      <h2 className="font-cormorant font-[300] text-white text-h1-mobile lg:text-h1-desktop leading-(--line-height-default)">
        WORKS
      </h2>
      <span
        className="block w-full h-[1px] mt-[5px] mx-auto bg-gold md:mx-0 md:w-[550px]"
        aria-hidden="true"
      ></span>
      <div className="grid grid-cols-2">
        {works.map((work) => (
          <article key={work.title}>
            <h4 className="text-white font-cormorant">{work.title}</h4>
            <Link href={work.href}>{work.title}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
