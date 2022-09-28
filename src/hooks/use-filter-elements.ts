import { ProductTypes } from "../types/Product";

const useFilterElements = () => {
  const filterElementsOnChange = (
    search: string,
    setItems: (itemsArray: ProductTypes[]) => void,
    dataItemsTofilter: ProductTypes[]
  ) => {
    const itemsCopy = [...dataItemsTofilter];
    const searchCopy = search;
    const newArray = itemsCopy.filter((item: ProductTypes) => {
      return item.title.toLowerCase().search(searchCopy.toLowerCase()) !== -1;
    });

    setItems(newArray);
  };

  return [filterElementsOnChange] as const;
};

export default useFilterElements;
