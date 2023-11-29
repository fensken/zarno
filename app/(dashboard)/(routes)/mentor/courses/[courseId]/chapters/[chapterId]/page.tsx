import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

interface ChapterIdPageProps {
  params: { courseId: string; chapterId: string };
}

const ChapterIdPage = async ({ params }: ChapterIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return <div>Chapter Id page</div>;
};

export default ChapterIdPage;
