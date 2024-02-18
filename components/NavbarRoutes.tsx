"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { Button } from "./ui/button";
import SearchInput from "./SearchInput";

interface NavbarRoutesProps {}

const NavbarRoutes: FC<NavbarRoutesProps> = ({}) => {
  const pathname = usePathname();

  const isMentorPage = pathname?.startsWith("/mentor");
  const isCoursePage = pathname?.includes("/courses");
  const isBrowsePage = pathname === "/browse";

  return (
    <>
      {isBrowsePage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-x-2 ml-auto">
        {isMentorPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/mentor/courses">
            <Button size="sm" variant="ghost">
              Mentor mode
            </Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
