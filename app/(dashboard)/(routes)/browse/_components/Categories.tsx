"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@prisma/client";
import {
  FcDatabase,
  FcBiotech,
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
  FcCurrencyExchange,
} from "react-icons/fc";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";
import CategoryItem from "./CategoryItem";

type CategoriesProps = {
  items: Category[];
};

const iconMap: Record<Category["name"], IconType> = {
  "Information Technology": FcMultipleDevices,
  Music: FcMusic,
  Fitness: FcSportsMode,
  "Content Creation": FcFilmReel,
  Business: FcSalesPerformance,
  Photography: FcOldTimeCamera,
  Engineering: FcEngineering,
  Science: FcBiotech,
  Finance: FcCurrencyExchange,
};

const Categories: FC<CategoriesProps> = ({ items }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategoryId = searchParams.get("categoryId");

  return (
    <>
      <div className="flex items-center pb-2 overflow-x-auto gap-x-2">
        {/* All category button */}
        <button
          onClick={() => {
            router.push("/");
          }}
          className={cn(
            "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
            !currentCategoryId && "border-sky-700 bg-sky-200/20 text-sky-800"
          )}
        >
          <FcDatabase size={20} />
          <div className="truncate">All</div>
        </button>

        {/* Other category buttons */}
        {items.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              label={item.name}
              icon={iconMap[item.name]}
              value={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
