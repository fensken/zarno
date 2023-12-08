import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { DataTable } from "./_components/DataTable";
import { columns } from "./_components/Columns";
import { db } from "@/lib/db";

const CoursesPage = async ({}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <Link href="/mentor/create">
        <Button>New Course</Button>
      </Link>

      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
