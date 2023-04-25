import { IBlocks } from "./block";

export interface ISurveyEditor {
  submitButtonOptions?: {
    text: string;
    visible: boolean;
  };
  defaultValue?: ISurveyResult;
  onSubmit?: (result: ISurveyResult) => void;
  onChange?: (result: ISurveyResult) => void;
  useHead?: boolean;
}

export type ISurveyContent = IBlocks[];

export interface ISurveyResult {
  title: string;
  description?: string;
  content: ISurveyContent;
}
