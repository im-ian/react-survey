export const Blocks = {
  BLANK: "blank",
  SHORT_TEXT: "short_text",
  LONG_TEXT: "long_text",
  SWITCH: "switch",
  CHECK_BOX: "check_box",
  SINGLE_SELECT: "single_select",
  MULTI_SELECT: "multi_select",
  DROPDOWN: "dropdown",
  // FILE_UPLOAD: 'file_upload',
  RANGE: "range",
  // DATE: 'date',
  // TIME: 'time',
} as const;

export type BlockTypes = typeof Blocks[keyof typeof Blocks];

export enum BlockAlign {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export interface IBlock {
  id: string;
  type: BlockTypes;
  order: number;
  title?: string;
  description?: string;
  required: boolean;
}

export type IBlocks =
  | ISurveyBlankBlock
  | ISurveyShortTextBlock
  | ISurveyLongTextBlock
  | ISurveySwitchBlock
  | ISurveyCheckBoxBlock
  | ISurveySingleSelectBlock
  | ISurveyMultiSelectBlock
  | ISurveyDropdownBlock
  // | ISurveyFileUploadBlock
  | ISurveyRangeBlock;
// | ISurveyDateBlock
// | ISurveyTimeBlock;

export type TypedBlock<T extends BlockTypes> = Extract<IBlocks, { type: T }>;

export interface SelectableOption {
  key: string;
  label: string;
  value: string | number;
}

export interface ISurveyBlankBlock extends IBlock {
  type: typeof Blocks.BLANK;
}

export interface ISurveyShortTextBlock extends IBlock {
  type: typeof Blocks.SHORT_TEXT;
  answer: string;
}

export interface ISurveyLongTextBlock extends IBlock {
  type: typeof Blocks.LONG_TEXT;
  answer: string;
}

export interface ISurveySwitchBlock extends IBlock {
  type: typeof Blocks.SWITCH;
  switchTitle: string;
  answer: boolean;
}

export interface ISurveyCheckBoxBlock extends IBlock {
  type: typeof Blocks.CHECK_BOX;
  checkboxTitle: string;
  answer: boolean;
}

export interface ISurveySingleSelectBlock extends IBlock {
  type: typeof Blocks.SINGLE_SELECT;
  question: SelectableOption[];
  answer: string | null;
}

export interface ISurveyMultiSelectBlock extends IBlock {
  type: typeof Blocks.MULTI_SELECT;
  question: SelectableOption[];
  answer: string[];
}

export interface ISurveyDropdownBlock extends IBlock {
  type: typeof Blocks.DROPDOWN;
  question: SelectableOption[];
  answer: string | null;
}

// export interface ISurveyFileUploadBlock extends IBlock {
//   type: typeof Blocks.FILE_UPLOAD;
//   multiple: boolean;
//   answer: string[];
// }

export interface ISurveyRangeBlock extends IBlock {
  type: typeof Blocks.RANGE;
  min: number;
  minTitle: string;
  max: number;
  maxTitle: string;
  answer: number | null;
}

// export interface ISurveyDateBlock extends IBlock {
//   type: typeof Blocks.DATE;
//   answer: string;
// }

// export interface ISurveyTimeBlock extends IBlock {
//   type: typeof Blocks.TIME;
//   answer: string;
// }
