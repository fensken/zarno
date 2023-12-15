"use client";

import { FC } from "react";
import { Category } from "@prisma/client";
import {
  FcBiotech,
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons";

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
};

const Categories: FC<CategoriesProps> = ({ items }) => {
  return (
    <div className="flex items-center pb-2 overflow-x-auto gap-x-2">
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
  );
};

export default Categories;
