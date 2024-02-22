import { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";

interface Props {
  icon: any;
  label: string;
  path: string;
}

function SideBarItem({ icon, label, path }: Props) {
  const [isActive, setIsActive] = useState(false);

  const activePath = window.location.pathname;

  useEffect(() => {
    const isPathEqual = path === activePath;
    if (isPathEqual) {
      setIsActive(true);
    }
  }, [activePath]);
  return (
    <li className="group relative">
      {/*
    transformar componentes de icone em tipos validos para src

        <img src={icon} alt={`${label} icon`} className="bg-cover w-7 h-7" />
  */}
      <a href={path} className="flex items-center justify-center pr-5 gap-5">
        <div
          className={`w-[2px] h-12 ${
            isActive ? "bg-green dark:bg-greendark" : "bg-primary dark:bg-white"
          } rounded-full`}
        />
        <div
          className={` ${
            isActive ? "text-green dark:text-greendark" : "text-primary dark:text-white"
          } rounded-full`}
        >
          {icon}
        </div>

        <span className="hidden group-hover:block absolute w-max left-full">
          {label}
        </span>
      </a>
    </li>
  );
}

export default SideBarItem;
