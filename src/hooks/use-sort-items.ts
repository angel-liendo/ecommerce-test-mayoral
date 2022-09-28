import { ProductTypes } from "../types/Product";

const useSortItems = () => {
  const checkIfDiscountItIsActive = (item: ProductTypes): number => {
    if (item.discount === null) return item.price;
    return item.discount;
  };

  const sortItem = (
    itemA: ProductTypes,
    itemB: ProductTypes,
    sortType: string
  ): number => {
    if (sortType === "ascendant") {
      return (
        checkIfDiscountItIsActive(itemB) - checkIfDiscountItIsActive(itemA)
      );
    }
    return checkIfDiscountItIsActive(itemA) - checkIfDiscountItIsActive(itemB);
  };

  const sortItemsFunction = (
    sortType: string,
    dataItems: ProductTypes[]
  ): ProductTypes[] => {
    const itemsCopy = [...dataItems];

    return itemsCopy?.sort((itemA, itemB) => sortItem(itemA, itemB, sortType));
  };

  return [sortItemsFunction] as const;
};

export default useSortItems;
