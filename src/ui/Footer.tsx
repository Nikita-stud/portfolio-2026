export default function Footer() {
  return (
    <footer className="mt-[20px] mb-[20px] ml-[5%] lg:ml-[12%] text-grey">
      <div className="items-center text-sm text-white">
        <span>&copy; {new Date().getFullYear()} Fedorov Utvikling</span>
      </div>
    </footer>
  );
}
