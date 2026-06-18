"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getUnitData } from "@/lib/unit-data-registry";
import { getModuleByUnitId } from "@/lib/grammar-data";
import UnitPage from "@/components/grammar/UnitPage";

export default function UnitRoute({
  params,
}: {
  params: Promise<{ unitId: string }>;
}) {
  const { unitId } = use(params);
  const data = getUnitData(unitId);
  const module = getModuleByUnitId(unitId);

  if (!data || !module) {
    notFound();
  }

  return <UnitPage data={data} moduleTitle={`模块${module.number}：${module.title}`} />;
}
