import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import db from '../../../../back-end/models';
import WorkService from '../../../../back-end/services/WorkService';
import type { Work } from '@/types';
import { defaultWorks } from '@/constants/works';

const workService = new WorkService(db);

export default async function WorkPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const dbWorks: Work[] = await workService.getAll().catch(() => []);
  const works = dbWorks.length > 0 ? dbWorks : defaultWorks;
  const work = works.find(
    (work) => work.name.toLowerCase().replace(/\s+/g, '-') === title,
  );

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
