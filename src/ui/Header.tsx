'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideName from '@/ui/SideName';

const navLinks = [
  { href: '/', label: 'about' },
  { href: '/works', label: 'works' },
  { href: '/request', label: 'request' },
  { href: '/contact', label: 'contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="pt-[40px] sm:px-[35px] md:pl-[0px] md:pt-[90px] md:pr-[50px] md:bg-dark md:z-10 lg:pt-[35px] xl:pt-[20px]">
      <div className="flex flex-wrap items-baseline gap-x-[20px] gap-y-[10px] md:block">
        <SideName />
        <span
          className="w-full h-[1px] bg-gold min-[506px]:hidden min-[506px]:opacity-0"
          aria-hidden="true"
        ></span>
        <nav className="delay-show ml-auto md:flex md:h-[398px] lg:h-[577px] md:items-end">
          <ul className="md:mt-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'font-bold text-gold-text'
                      : 'font-normal '
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
