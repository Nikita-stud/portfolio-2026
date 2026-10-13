import Link from 'next/link';
import Image from 'next/image';
import db from '../../back-end/models';
import type { Work } from '@/types';
import { defaultWorks } from '@/constants/works';
import WorkService from '../../back-end/services/WorkService';

const workService = new WorkService(db);

export default async function WorksSection() {
  const dbWorks: Work[] = await workService.getAll().catch(() => []);
  const works = dbWorks.length > 0 ? dbWorks : defaultWorks;
  const categories = [...new Set(works.map((work) => work.Category.name))];

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
          <ul className="grid grid-cols-2 gap-[20px] mt-[20px] md:gap-[50px]">
            {works
              .filter((work) => work.Category.name === category)
              .map((work) => (
                <li key={work.id}>
                  <article className="relative">
                    <figure className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={work.thumbnail}
                        alt={`${work.name} thumbnail`}
                        fill
                        sizes="(min-width: 744px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </figure>
                    <h4 className="font-cormorant text-white text-h2-mobile line-clamp-2 min-h-[2lh] mt-[15px]">
                      <Link
                        href={`/work/${work.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="after:absolute after:inset-0"
                      >
                        {work.name}
                      </Link>
                    </h4>
                    <p className="font-text line-clamp-2 min-h-[2lh] mt-[5px]">
                      {work.teaser}
                    </p>
                    <span
                      className="block font-cormorant text-gold-text mt-[10px]"
                      aria-hidden="true"
                    >
                      Read more
                    </span>
                  </article>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
