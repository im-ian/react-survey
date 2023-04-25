import { IBlocks, SelectableOption } from "../../@types/block";

export interface IBlockPresenter {
  block: IBlocks;
  onUpdateBlock: (data: IBlocks) => void;
  onCopyBlock: (data: IBlocks) => void;
  onRemoveBlock: () => void;
  list: SelectableOption[];
}
