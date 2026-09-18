'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'about' },
  { href: '/works', label: 'works' },
  { href: '/request', label: 'request' },
  { href: '/contact', label: 'contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div>
        <nav>
          <ul>
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
