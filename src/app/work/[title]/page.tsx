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
    <article className="md:ml-[5%] lg:ml-[10%]">
      <Link href="/#works" className="font-cormorant text-gold-text">
        Back to works
      </Link>
      <h1 className="mt-[20px]">{work.name}</h1>
      <figure className="relative aspect-[16/10] mt-[20px] md:w-[min(750px,100%)]">
        <Image
          src={work.thumbnail}
          alt={`${work.name} thumbnail`}
          fill
          sizes="(min-width: 744px) 750px, 100vw"
          className="object-contain"
        />
      </figure>
      <p className="font-text mt-[20px] leading-[1.8] md:w-[min(750px,100%)]">
        {work.description}
      </p>
      <div className="flex gap-[20px] mt-[20px] font-cormorant text-gold-text text-h2-mobile">
        {work.github && (
          <a href={work.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {work.live_url && (
          <a href={work.live_url} target="_blank" rel="noopener noreferrer">
            Live site
          </a>
        )}
      </div>
    </article>
  );
}
