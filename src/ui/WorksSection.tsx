'use client';
import Link from 'next/link';

const works = [
  { href: '#about', title: 'Exam 0', category: 'Front-end' },
  { href: '#works', title: 'Exam 1', category: 'Front-end' },
  { href: '#request', title: 'Exam 2', category: 'Front-end' },
  { href: '#contact', title: 'Exam 3', category: 'Back-end' },
];

const categories = [...new Set(works.map((work) => work.category))];

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
      {categories.map((category) => (
        <div key={category} className="mt-[20px]">
          <h3 className="text-white font-cormorant text-h2-mobile lg:text-h2-desktop">
            {category}
          </h3>
          <ul className="grid grid-cols-2">
            {works
              .filter((work) => work.category === category)
              .map((work) => (
                <li key={work.title}>
                  <article>
                    <h4 className="text-white font-cormorant">{work.title}</h4>
                    <Link href={work.href} className="text-white">
                      {work.title}
                    </Link>
                  </article>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
