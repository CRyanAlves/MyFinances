import { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

import { IoIosArrowDown } from "react-icons/io";
import perfil from "../../assets/perfil.avif";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const handleClick = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="w-full flex justify-end px-4 py-3 gap-2 ">
      <button onClick={handleClick}>
        {isDarkMode ? (
          <LuSun color="#fff" size={24} />
        ) : (
          <LuMoon color="#474747" size={24} />
        )}
      </button>
      <img
        src={perfil}
        alt={`{user.name} profile picture`}
        className="w-8 h-8 rounded-full bg-cover"
      />
      <h1 className="text-2xl">Ryan</h1>
      <button>
        <IoIosArrowDown size={24} />
      </button>
    </header>
  );
}
export default Header;
