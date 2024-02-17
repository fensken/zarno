import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { isMentor } from "@/lib/mentor";

const MentorLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isMentor(userId)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default MentorLayout;
