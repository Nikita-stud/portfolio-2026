export default function Footer() {
  return (
    <footer className="flex justify-between items-center mt-[20px] mb-[40px] px-[20px] sm:px-[35px] md:px-[50px]">
      <div className="font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-grey md:ml-[5%] lg:ml-[10%]">
        <span>&copy; {new Date().getFullYear()} Nikita Fedorov</span>
      </div>
      <a
        href="https://nikitas-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 font-text text-white text-xs-mobile leading-(--line-height-tight) md:text-grey"
      >
        V.1.0.0?
        <span className="sr-only">
          My previous portfolio website, opens in a new tab
        </span>
      </a>
    </footer>
  );
}
