import { SortButtonsTypes } from './Button';

export interface SearchBarTypes {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSortButton: (sort: string) => void;
  inputValue: string;
  setSortButtons: (sortButtons: SortButtonsTypes) => void;
  sortButtons: SortButtonsTypes;
}
