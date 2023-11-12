"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const mentorRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/mentor/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/mentor/analytics",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isMentor = pathname?.includes("/mentor");

  const routes = isMentor ? mentorRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
