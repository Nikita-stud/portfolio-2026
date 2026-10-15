'use client';

import Link from 'next/link';

export default function SideName() {
  return (
    <aside className="delay-show md:flex md:fixed md:top-[90px] md:left-0 md:h-[398px] lg:h-[577px] md:items-end md:px-[20px] lg:px-[35px] lg:top-[25px] xl:top-[110px]">
      <p className="font-cormorant text-body-mobile md:text-h2-mobile lg:text-h2-desktop font-[200] tracking-[2px] md:tracking-[5px] lg:tracking-[10px] md:[writing-mode:vertical-rl] md:rotate-180">
        <Link href="/" onClick={() => window.scrollTo(0, 0)}>
          NIKITA FEDOROV
        </Link>
      </p>
    </aside>
  );
}
