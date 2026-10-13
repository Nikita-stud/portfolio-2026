export default function Footer() {
  return (
    <footer className="mt-[20px] mb-[20px] px-[20px] sm:px-[35px] md:px-[50px] text-grey">
      <div className="items-center text-sm text-white md:ml-[5%] lg:ml-[10%]">
        <span>&copy; {new Date().getFullYear()} Nikita Fedorov</span>
      </div>
    </footer>
  );
}
