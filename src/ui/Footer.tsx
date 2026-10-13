export default function Footer() {
  return (
    <footer className="flex justify-between items-center mt-[20px] mb-[40px] px-[20px] sm:px-[35px] md:px-[50px] text-grey">
      <div className="items-center text-sm text-grey md:ml-[5%] lg:ml-[10%]">
        <span>&copy; {new Date().getFullYear()} Nikita Fedorov</span>
      </div>
      <a
        href="https://nikitas-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20"
      >
        V.1.0.0?
      </a>
    </footer>
  );
}
