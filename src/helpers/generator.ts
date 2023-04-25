import {
  BlockTypes,
  Blocks,
  IBlocks,
  SelectableOption,
  TypedBlock,
} from "../@types/block";

export const createBlock = (
  id: string,
  type: BlockTypes,
  order: number
): IBlocks => {
  const blockShape = { id, type, order, required: false };

  switch (type) {
    case Blocks.BLANK:
      return blockShape as TypedBlock<typeof Blocks.BLANK>;

    case Blocks.SHORT_TEXT:
      return Object.assign(blockShape, {
        answer: "",
      }) as TypedBlock<typeof Blocks.SHORT_TEXT>;

    case Blocks.LONG_TEXT:
      return Object.assign(blockShape, {
        answer: "",
      }) as TypedBlock<typeof Blocks.LONG_TEXT>;

    case Blocks.SWITCH:
      return Object.assign(blockShape, {
        switchTitle: "",
        answer: false,
      }) as TypedBlock<typeof Blocks.SWITCH>;

    case Blocks.CHECK_BOX:
      return Object.assign(blockShape, {
        checkboxTitle: "",
        answer: false,
      }) as TypedBlock<typeof Blocks.CHECK_BOX>;

    case Blocks.SINGLE_SELECT:
      return Object.assign(blockShape, {
        question: [] as SelectableOption[],
        answer: null,
      }) as TypedBlock<typeof Blocks.SINGLE_SELECT>;

    case Blocks.MULTI_SELECT:
      return Object.assign(blockShape, {
        question: [] as SelectableOption[],
        answer: [] as string[],
      }) as TypedBlock<typeof Blocks.MULTI_SELECT>;

    case Blocks.DROPDOWN:
      return Object.assign(blockShape, {
        question: [] as SelectableOption[],
        answer: null,
      }) as TypedBlock<typeof Blocks.DROPDOWN>;

    // case Blocks.FILE_UPLOAD:
    //   return Object.assign(blockShape, {
    //     multiple: true,
    //     answer: [],
    //   }) as TypedBlock<typeof Blocks.FILE_UPLOAD>;

    case Blocks.RANGE:
      return Object.assign(blockShape, {
        min: 1,
        minTitle: "",
        max: 5,
        maxTitle: "",
        answer: null,
      }) as TypedBlock<typeof Blocks.RANGE>;

    // case Blocks.DATE:
    //   return Object.assign(blockShape, {
    //     value: '',
    //     answer: '',
    //   }) as TypedBlock<typeof Blocks.DATE>;

    // case Blocks.TIME:
    //   return Object.assign(blockShape, {
    //     value: '',
    //     answer: '',
    //   }) as TypedBlock<typeof Blocks.TIME>;

    default:
      throw new Error("return untyped block.");
  }
};

export const getRange = (size: number): number[] => {
  const range = [];

  for (let i = 0; i < size; i++) {
    range.push(i);
  }

  return range;
};
