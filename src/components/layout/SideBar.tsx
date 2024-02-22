import SideBarItem from "./SideBarItem";
import { LuHome } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { LuComponent } from "react-icons/lu";

import logo from "../../assets/logo.svg";

function SideBar() {
  return (
    <aside className="h-full bg-body dark:bg-bodydark py-4 flex flex-col gap-5">
      <nav className="flex flex-col gap-6">
        <a href="/" className="flex justify-center">
          <img src={logo} alt="my3_logo" className="bg-cover h-12 w-12" />
        </a>
        <ul className="flex flex-col gap-5">
          <SideBarItem icon={<LuHome size={30} />} label="Inicio" path="/" />
          <SideBarItem
            icon={<LuWallet size={30} />}
            label="Minha Carteira"
            path="/myWallet"
          />
          <SideBarItem
            icon={<LuComponent size={30} />}
            label=""
            path="/tools"
          />
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
