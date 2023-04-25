import { v4 as uniqid } from "uuid";
import { BlockTypes, Blocks } from "../@types/block";
import { getNameFromBlockType } from "../helpers/converter";

export const blockList = Object.values(Blocks).map((value, index) => ({
  index,
  key: uniqid(),
  label: getNameFromBlockType(value as BlockTypes),
  value,
}));
