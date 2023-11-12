import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface CoursesPageProps {}

const CoursesPage: FC<CoursesPageProps> = ({}) => {
  return (
    <div className="p-6">
      <Link href="/mentor/create">
        <Button>New Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
