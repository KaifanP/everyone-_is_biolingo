import { UnitData, unit01Data } from "./unit-01-data";
import { unit02Data } from "./unit-02-data";
import { unit03Data } from "./unit-03-data";
import { unit04Data } from "./unit-04-data";
import { unit05Data } from "./unit-05-data";
import { unit06Data } from "./unit-06-data";
import { unit07Data } from "./unit-07-data";
import { unit08Data } from "./unit-08-data";
import { unit09Data } from "./unit-09-data";
import { unit10Data } from "./unit-10-data";
import { unit11Data } from "./unit-11-data";
import { unit12Data } from "./unit-12-data";
import { unit13Data } from "./unit-13-data";
import { unit14Data } from "./unit-14-data";
import { unit15Data } from "./unit-15-data";
import { unit16Data } from "./unit-16-data";
import { unit17Data } from "./unit-17-data";
import { unit18Data } from "./unit-18-data";
import { unit19Data } from "./unit-19-data";
import { unit20Data } from "./unit-20-data";
import { unit21Data } from "./unit-21-data";
import { unit22Data } from "./unit-22-data";
import { unit23Data } from "./unit-23-data";
import { unit24Data } from "./unit-24-data";
import { unit25Data } from "./unit-25-data";
import { unit26Data } from "./unit-26-data";
import { unit27Data } from "./unit-27-data";
import { unit28Data } from "./unit-28-data";
import { unit29Data } from "./unit-29-data";
import { unit30Data } from "./unit-30-data";
import { unit31Data } from "./unit-31-data";
import { unit32Data } from "./unit-32-data";
import { unit33Data } from "./unit-33-data";
import { unit34Data } from "./unit-34-data";
import { unit35Data } from "./unit-35-data";
import { unit36Data } from "./unit-36-data";
import { unit37Data } from "./unit-37-data";
import { unit38Data } from "./unit-38-data";
import { unit39Data } from "./unit-39-data";
import { unit40Data } from "./unit-40-data";
import { unit41Data } from "./unit-41-data";
import { unit42Data } from "./unit-42-data";

const unitDataMap: Record<string, UnitData> = {
  "unit-01": unit01Data,
  "unit-02": unit02Data,
  "unit-03": unit03Data,
  "unit-04": unit04Data,
  "unit-05": unit05Data,
  "unit-06": unit06Data,
  "unit-07": unit07Data,
  "unit-08": unit08Data,
  "unit-09": unit09Data,
  "unit-10": unit10Data,
  "unit-11": unit11Data,
  "unit-12": unit12Data,
  "unit-13": unit13Data,
  "unit-14": unit14Data,
  "unit-15": unit15Data,
  "unit-16": unit16Data,
  "unit-17": unit17Data,
  "unit-18": unit18Data,
  "unit-19": unit19Data,
  "unit-20": unit20Data,
  "unit-21": unit21Data,
  "unit-22": unit22Data,
  "unit-23": unit23Data,
  "unit-24": unit24Data,
  "unit-25": unit25Data,
  "unit-26": unit26Data,
  "unit-27": unit27Data,
  "unit-28": unit28Data,
  "unit-29": unit29Data,
  "unit-30": unit30Data,
  "unit-31": unit31Data,
  "unit-32": unit32Data,
  "unit-33": unit33Data,
  "unit-34": unit34Data,
  "unit-35": unit35Data,
  "unit-36": unit36Data,
  "unit-37": unit37Data,
  "unit-38": unit38Data,
  "unit-39": unit39Data,
  "unit-40": unit40Data,
  "unit-41": unit41Data,
  "unit-42": unit42Data,
};

export function getUnitData(unitId: string): UnitData | undefined {
  return unitDataMap[unitId];
}
