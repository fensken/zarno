import { FC } from "react";
import { Category, Course } from "@prisma/client";

import CourseCard from "./CourseCard";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type CoursesListProps = {
  items: CourseWithProgressWithCategory[];
};

const CoursesList: FC<CoursesListProps> = ({ items }) => {
  return (
    <div className="">
      <div className="grid mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => {
          return (
            <CourseCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl!}
              chaptersLength={item.chapters.length}
              price={item.price!}
              progress={item.progress}
              category={item?.category?.name!}
            />
          );
        })}
      </div>

      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses were found
        </div>
      )}
    </div>
  );
};

export default CoursesList;
