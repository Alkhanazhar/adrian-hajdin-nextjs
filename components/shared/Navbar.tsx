import { ModeToggle } from "../theme/theme-toggler";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="p-5 background-light900_dark300 w-full flex-between fixed  z-50 shadow-light-300 border-b  dark:shadow-none sm:px-10 ">
      <Logo />
      <ModeToggle />
    </header>
  );
};

export default Navbar;
