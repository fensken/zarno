"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { Button } from "./ui/button";
import SearchInput from "./SearchInput";
import { isMentor } from "@/lib/mentor";

interface NavbarRoutesProps {}

const NavbarRoutes: FC<NavbarRoutesProps> = ({}) => {
  const { userId } = useAuth();

  const pathname = usePathname();

  const isMentorPage = pathname?.startsWith("/mentor");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      {/* 
        IF ONLY THE ADMIN CAN BE MENTOR THROUGHOUT
        
        - CHECK env for: NEXT_PUBLIC_MENTOR_ID
        - CHECK /lib/mentor.tsx
        - CHECK /app/mentor/layout.tsx

        - Routes are not protected, protect in production. (/api)*
      
      */}
      <div className="flex gap-x-2 ml-auto">
        {isMentorPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isMentor(userId) ? (
          <Link href="/mentor/courses">
            <Button size="sm" variant="ghost">
              Mentor mode
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* 
        IF ANYONE CAN BE THE MENTOR 
        
        - No need to check userID in this file
        - Remove /app/mentor/layout.tsx
        - Uncomment code below and comment the one above

        - CHECK env for: NEXT_PUBLIC_MENTOR_ID and remove (*Optional)
        - REMOVE /lib/mentor.tsx (*Optional)
      
      */}

      {/* <div className="flex gap-x-2 ml-auto">
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
      </div> */}
    </>
  );
};

export default NavbarRoutes;
