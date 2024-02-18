"use client";

import Link from "next/link";
import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Badge } from "@/components/ui/badge";
import ConfirmModal from "@/components/modals/ConfirmModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const Columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price") || "0");
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div>{formattedPrice}</div>;
    },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPublished = row.getValue("isPublished") || false;

      return (
        <Badge className={cn("bg-slate-500", isPublished && "bg-sky-700")}>
          {isPublished ? "Published" : "Draft"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;

      const router = useRouter();
      const [isLoading, setIsLoading] = useState(false);

      const onDelete = async () => {
        try {
          setIsLoading(true);

          await axios.delete(`/api/courses/${id}`);

          toast.success("Course deleted");
          router.refresh();
        } catch (error) {
          toast.error("Something went wrong");
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <div className="w-fit flex gap-x-2">
          <Link href={`/mentor/courses/${id}`} className="bg-red flex">
            <Button
              aria-label="Edit Course"
              title="Edit Course"
              size="sm"
              disabled={isLoading}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </Link>

          <ConfirmModal onConfirm={onDelete}>
            <Button
              aria-label="Delete Course"
              title="Delete Course"
              size="sm"
              disabled={isLoading}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </ConfirmModal>
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const { id } = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="w-8 h-4 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="w-4 h-4" />
  //           </Button>
  //         </DropdownMenuTrigger>

  //         <DropdownMenuContent align="end">
  //           <Link href={`/mentor/courses/${id}`} className="bg-red">
  //             <DropdownMenuItem>
  //               <Pencil className="w-4 h-4 mr-2" />
  //               Edit
  //             </DropdownMenuItem>
  //           </Link>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
