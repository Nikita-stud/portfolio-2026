import Link from 'next/link';
import Image from 'next/image';
// import db from '../../back-end/models';
// import type { Work } from '@/types';
import { defaultWorks } from '@/constants/works';
import { toSlug } from '@/helpers/slug';
// import WorkService from '../../back-end/services/WorkService';

// const workService = new WorkService(db);

export default async function WorksSection() {
  // const dbWorks: Work[] = await workService.getAll().catch(() => []);
  // const works = dbWorks.length > 0 ? dbWorks : defaultWorks;
  const works = defaultWorks;

  return (
    <section id="works" className="mt-[120px] md:ml-[5%] lg:ml-[10%]">
      <h2 className="font-cormorant text-white text-h1-mobile lg:text-h1-desktop ">
        WORKS
      </h2>
      <span
        className="block  w-[125px] h-[1px] mt-[5px] mb-[30px] bg-gold md:mb-[40px] md:mx-0 md:w-[125px] lg:w-[190px]"
        aria-hidden="true"
      ></span>
      <ul className="grid grid-cols-2 gap-[20px] mt-[20px] md:gap-[50px] md:mr-[100px] lg:mr-[140px] xl:grid-cols-3">
        {works.map((work) => (
          <li key={work.id} className="flex flex-col">
            <article className="group relative flex-1 flex flex-col">
              <figure className="relative aspect-video overflow-hidden">
                <Image
                  src={work.thumbnail}
                  alt={`${work.name} thumbnail`}
                  fill
                  sizes="(min-width: 744px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-[10px] left-[10px] px-[5px] py-[2px] bg-dark border border-gold-darker font-text text-xs-mobile text-white">
                  {work.Category.name}
                </span>
              </figure>
              <h3 className="font-cormorant text-white text-h2-mobile line-clamp-2 mt-[15px]">
                <Link
                  href={`/work/${toSlug(work.name)}`}
                  className="after:absolute after:inset-0"
                >
                  {work.name}
                </Link>
              </h3>
              <p className="font-text line-clamp-2 mt-[10px]">{work.teaser}</p>
              <span
                className="block font-text text-xs-mobile text-gold-darker mt-auto pt-[10px] transition-colors duration-500 group-hover:text-gold-text"
                aria-hidden="true"
              >
                Read more{' '}
                <i className="fa-solid fa-arrow-right text-[14px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></i>
              </span>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
