import { useEffect, useState } from 'react';
import { ALL_PRODUCTS } from '../graphql/querys';
import CardList from '../components/cardList';
import SearchBar from '../components/searchBar';
import useSortItems from '../hooks/use-sort-items';
import useFilterElements from '../hooks/use-filter-elements';
import { HomeStyle } from './Home.style';
import { ProductTypes } from '../types/Product';
import { SortButtonsTypes } from '../types/Button';
import { useGetData } from '../hooks/use-get-data';
import ElementEmpty from '../components/emptyCart';
import Loader from '../components/loader';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const [data, loading] = useGetData(ALL_PRODUCTS);
  const [dataItems, setDataItems] = useState<ProductTypes[] | []>([]);
  const [inputSearch, setInputSearch] = useState('');
  const [productsSearched, setPoductsSearched] = useState<ProductTypes[] | []>([]);
  const [sortButtons, setSortButtons] = useState<SortButtonsTypes>({
    active: null,
    ascendant: 'ascendant',
    descendant: 'descendant',
  });
  const [sortItemsFunction] = useSortItems();
  const [filterElementsOnChange] = useFilterElements();

  useEffect(() => {
    if (data?.allProducts) {
      setDataItems(data?.allProducts);
    }
  }, [data]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterElementsOnChange(e.target.value, setPoductsSearched, dataItems);
    setInputSearch(e.target.value);
  };

  const handleOnClickSortButton = (sortType: string) => {
    const sortedItems = sortItemsFunction(sortType, dataItems);
    setDataItems(sortedItems);
  };

  const setProductsRender = () => {
    if (productsSearched.length > 0 && inputSearch !== '') {
      const productsSearchedAndSorted =
        sortButtons.active === null
          ? productsSearched
          : sortItemsFunction(sortButtons.active, productsSearched);

      return <CardList listItems={productsSearchedAndSorted} />;
    }

    if (productsSearched.length === 0 && inputSearch !== '') {
      return <ElementEmpty />;
    }

    return <CardList listItems={dataItems} />;
  };

  const productsRender = setProductsRender();

  return (
    <HomeStyle>
      <SearchBar
        onChange={handleOnChange}
        inputValue={inputSearch}
        onClickSortButton={handleOnClickSortButton}
        setSortButtons={setSortButtons}
        sortButtons={sortButtons}
      />
      {loading && <Loader column="1/-1" />}
      {loading === false && productsRender}
    </HomeStyle>
  );
};

export default HomePage;
