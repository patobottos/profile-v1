const Navbar = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-12 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-light-blue transition-all group-hover:w-16 group-hover:bg-title-gray group-focus-visible:w-16 group-focus-visible:bg-title-gray motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-inter font-bold uppercase tracking-widest text-light-blue group-hover:text-title-gray group-focus-visible:text-title-gray">
              About
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3 active" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-light-blue transition-all group-hover:w-16 group-hover:bg-title-gray group-focus-visible:w-16 group-focus-visible:bg-title-gray motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-inter font-bold uppercase tracking-widest text-light-blue group-hover:text-title-gray group-focus-visible:text-title-gray">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3 active" href="#projects">
            <span className="nav-indicator mr-4 h-px w-8 bg-light-blue transition-all group-hover:w-16 group-hover:bg-title-gray group-focus-visible:w-16 group-focus-visible:bg-title-gray motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-inter font-bold uppercase tracking-widest text-light-blue group-hover:text-title-gray group-focus-visible:text-title-gray">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3 active" href="#contact">
            <span className="nav-indicator mr-4 h-px w-8 bg-light-blue transition-all group-hover:w-16 group-hover:bg-title-gray group-focus-visible:w-16 group-focus-visible:bg-title-gray motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-inter font-bold uppercase tracking-widest text-light-blue group-hover:text-title-gray group-focus-visible:text-title-gray">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
