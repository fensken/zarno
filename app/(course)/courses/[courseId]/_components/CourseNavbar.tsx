import { FC } from "react";
import { Chapter, Course, UserProgress } from "@prisma/client";

import NavbarRoutes from "@/components/NavbarRoutes";

type CourseNavbarProps = {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

const CourseNavbar: FC<CourseNavbarProps> = ({ course, progressCount }) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarRoutes />
    </div>
  );
};

export default CourseNavbar;
