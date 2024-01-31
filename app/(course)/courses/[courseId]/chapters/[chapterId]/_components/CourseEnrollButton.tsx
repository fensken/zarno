"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import toast from "react-hot-toast";
import axios from "axios";

type CourseEnrollButtonProps = {
  price: number;
  courseId: string;
};

const CourseEnrollButton: FC<CourseEnrollButtonProps> = ({
  price,
  courseId,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      disabled={isLoading}
      onClick={onClick}
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
