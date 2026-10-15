'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SideName from '@/ui/SideName';

const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#conquest', label: 'conquest' },
  { href: '#works', label: 'works' },
  { href: '#contact', label: 'contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="relative z-40 bg-dark pt-[20px] sm:px-[35px] md:fixed md:pl-[0px] md:pt-[90px] md:pr-[50px] md:z-10 md:bg-transparent lg:pt-[35px] xl:pt-[10px]">
      <div className="flex flex-wrap items-baseline gap-x-[20px] gap-y-[10px] md:block">
        <SideName />
        <span
          className="w-full h-[1px] bg-gold min-[506px]:hidden min-[506px]:opacity-0"
          aria-hidden="true"
        ></span>
        <nav className="delay-show ml-auto md:flex md:h-[398px] lg:h-[577px] md:items-end">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  onClick={(e) => {
                    const section = document.querySelector(link.href);
                    if (section) {
                      e.preventDefault();
                      section.scrollIntoView();
                    }
                  }}
                  className={
                    activeSection === link.href
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
