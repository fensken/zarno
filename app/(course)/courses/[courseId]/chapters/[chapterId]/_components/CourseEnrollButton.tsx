"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { FC } from "react";

type CourseEnrollButtonProps = {
  price: number;
  courseId: string;
};

const CourseEnrollButton: FC<CourseEnrollButtonProps> = ({
  price,
  courseId,
}) => {
  return (
    <Button className="w-full md:w-auto" size="sm">
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
