import { FilePondFile } from "filepond";
import { IBlocks } from "../../@types/block";

export interface IBlockPresenter {
  block: IBlocks;
  onFileUpload?: (file: FilePondFile) => void;
  onFileRemove?: (file: FilePondFile) => void;
  onUpdateBlock: (data: IBlocks) => void;
}
