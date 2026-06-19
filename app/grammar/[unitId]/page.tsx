import { use } from "react";
import { notFound } from "next/navigation";
import { getUnitData } from "@/lib/unit-data-registry";
import { getModuleByUnitId } from "@/lib/grammar-data";
import UnitPage from "@/components/grammar/UnitPage";

const ALL_UNITS = Array.from({ length: 42 }, (_, i) => `unit-${String(i + 1).padStart(2, "0")}`);

export function generateStaticParams() {
  return ALL_UNITS.map((unitId) => ({ unitId }));
}

export default function UnitRoute({
  params,
}: {
  params: Promise<{ unitId: string }>;
}) {
  const { unitId } = use(params);
  const data = getUnitData(unitId);
  const moduleInfo = getModuleByUnitId(unitId);

  if (!data || !moduleInfo) {
    notFound();
  }

  return <UnitPage data={data} moduleTitle={`模块${moduleInfo.number}：${moduleInfo.title}`} />;
}
