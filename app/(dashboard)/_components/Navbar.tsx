import { FC } from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRoutes from "@/components/NavbarRoutes";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
