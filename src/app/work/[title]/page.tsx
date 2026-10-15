import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
// import db from '../../../../back-end/models';
// import WorkService from '../../../../back-end/services/WorkService';
// import type { Work } from '@/types';
import { defaultWorks } from '@/constants/works';
import { toSlug } from '@/helpers/slug';

// const workService = new WorkService(db);

type WorkPageProps = { params: Promise<{ title: string }> };

export function generateStaticParams() {
  return defaultWorks.map((work) => ({ title: toSlug(work.name) }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { title } = await params;
  const work = defaultWorks.find((work) => toSlug(work.name) === title);
  if (!work) return {};

  return {
    title: work.name,
    description: work.teaser,
    alternates: { canonical: `/work/${title}` },
    openGraph: {
      type: 'article',
      url: `/work/${title}`,
      title: work.name,
      description: work.teaser,
      images: [work.thumbnail],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.name,
      description: work.teaser,
      images: [work.thumbnail],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { title } = await params;
  // const dbWorks: Work[] = await workService.getAll().catch(() => []);
  // const works = dbWorks.length > 0 ? dbWorks : defaultWorks;
  const works = defaultWorks;
  const work = works.find((work) => toSlug(work.name) === title);

  if (!work) notFound();

  return (
    <article className="max-md:-mt-[20px] md:ml-[5%] md:mr-[100px] lg:ml-[10%] lg:mr-[140px] xl:flex xl:flex-col xl:justify-center xl:min-h-full">
      <div className="xl:grid xl:grid-cols-[2fr_3fr] xl:grid-rows-[auto_1fr] xl:gap-x-[50px]">
        <h1 className="delay-show xl:col-start-2 mb-[20px] xl:mb-[0px]">
          {work.name}
        </h1>
        <figure className="delay-show md:w-[min(750px,100%)] xl:col-start-1 xl:row-start-1 xl:row-span-2 xl:self-center">
          <div className="frame frame-spin max-xl:border-0 xl:p-[10px]">
            <Image
              src={work.thumbnail}
              alt={`${work.name} thumbnail`}
              width={0}
              height={0}
              sizes="(min-width: 744px) 750px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </figure>
        <div className="delay-show xl:col-start-2 mt-[30px] xl:mt-[0px]">
          <span
            className="block w-[280px] h-[1px] my-[20px] bg-gold"
            aria-hidden="true"
          ></span>
          <p className="font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-body-mobile md:leading-(--line-height-loose) md:w-[min(750px,100%)]">
            {work.description}
          </p>
          <span
            className="block w-[280px] h-[1px] mt-[20px] bg-gold"
            aria-hidden="true"
          ></span>
          <div className="flex items-baseline gap-[20px] mt-[20px] font-cormorant text-gold-darker text-h2-mobile lg:text-h2-desktop md:w-[min(750px,100%)]">
            {work.github && (
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors duration-500 hover:text-gold-text"
              >
                <i
                  className="fa-brands fa-github text-[30px] mr-[8px]"
                  aria-hidden="true"
                ></i>
                GitHub
              </a>
            )}
            {work.live_url && (
              <a
                href={work.live_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="transition-colors duration-500 hover:text-gold-text"
              >
                <i
                  className="fa-solid fa-globe text-[30px] mr-[8px]"
                  aria-hidden="true"
                ></i>
                Live
              </a>
            )}
            <Link
              href="/"
              className="group ml-auto transition-colors duration-500 hover:text-gold-text"
            >
              Back to home
              <i
                className="fa-solid fa-arrow-right text-[14px] ml-[5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 xl:text-[20px]"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
