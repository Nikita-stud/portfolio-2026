import type { Metadata } from 'next';
import Image from 'next/image';
import BioPopup from '@/ui/BioPopup';
import WorksSection from '@/ui/WorksSection';
import ConquestSection from '@/ui/ConquestSection';
import ContactSection from '@/ui/ContactSection';
import StackSection from '@/ui/StackSection';
import { siteUrl, siteName, siteTitle, brand } from '@/constants/site';

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  alternates: { canonical: '/' },
};

const address = {
  '@type': 'PostalAddress',
  addressLocality: 'Oslo',
  addressCountry: 'NO',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      jobTitle: 'Full Stack Engineer',
      email: 'mailto:kontakt@fedutvikler.com',
      image: `${siteUrl}/me.jpeg`,
      address,
      sameAs: [
        'https://github.com/Nikita-stud',
        'https://www.behance.net/fedutvikler',
        'https://www.linkedin.com/in/nikita-fedorov-757aaa402/',
      ],
      knowsAbout: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MySQL',
        'Tailwind CSS',
      ],
      worksFor: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: brand,
      url: siteUrl,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      email: 'mailto:kontakt@fedutvikler.com',
      address,
      founder: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div id="about" className="md:mt-[35px] lg:mt-[50px] xl:mt-[80px]">
        <div className="flex flex-col md:flex-row">
          <div className="m-auto md:mr-[20px] md:ml-[5%] lg:ml-[10%] xl:mr-[50px]">
            <button
              type="button"
              popoverTarget="bio"
              className="cursor-pointer"
              aria-label="Open bio"
            >
              <figure className="frame frame-spin w-[min(260px,calc(100vw-40px))] aspect-[8/11] p-[10px] md:p-[20px] md:w-[300px] md:h-[450px] lg:w-[350px] lg:h-[550px] xl:w-[450px] xl:h-[600px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/nike.jpg"
                    alt="Image of Nike the goddess of victory"
                    preload
                    loading="eager"
                    fill
                    sizes="(min-width: 1280px) 450px, (min-width: 1024px) 350px, (min-width: 744px) 300px, 400px"
                    className="object-cover"
                  />
                </div>
              </figure>
            </button>
            <BioPopup />
          </div>
          <section className="delay-show mt-[50px] md:mt-[160px] md:z-10 lg:mt-[130px] xl:mt-[240px]">
            <h1>
              AS A <br />
              <span className="text-gold-text">
                FULL
                <i
                  className="fa-solid fa-minus mx-[1px] text-[15px] -rotate-10 md:mx-[5px] md:text-[20px] md:relative md:-top-[8px]"
                  aria-hidden="true"
                ></i>
                STACK
              </span>
              <br /> ENGINEER
            </h1>
            <p className="font-cormorant text-h1-mobile lg:text-h1-desktop mt-[20px] font-[200] leading-(--line-height-default)">
              I WELCOME <br className="hidden md:inline xl:hidden" />
              YOU <br className="hidden xl:inline" />
              TO <br className="hidden md:inline xl:hidden" />
              THIS JOURNEY
            </p>
          </section>
        </div>
      </div>
      <StackSection />
      <a
        href="#"
        aria-label="Back to top"
        className="fixed top-[10px] right-[20px] z-30 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-dark text-white shadow-[0_0_20px_rgb(0_0_0/0.8)] transition-none sm:right-[35px] md:hidden"
      >
        <i className="fa-solid fa-arrow-up text-[20px]" aria-hidden="true"></i>
      </a>

      <ConquestSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}
