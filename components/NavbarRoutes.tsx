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
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-x-2 ml-auto">
        {isMentorPage || isPlayerPage ? (
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
