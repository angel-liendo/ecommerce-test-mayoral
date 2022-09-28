import { ButtonIconStyle } from '../button/Button.style';
import { SearchBarStyle } from './SearchBar.style';
import Form from '../form';
import Icon from '../icon';
import Textfield from '../textfield';
import { SearchBarTypes } from 'types/SearchBar';

const SearchBar = ({
  onChange,
  inputValue,
  onClickSortButton,
  setSortButtons,
  sortButtons,
}: SearchBarTypes) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleOnClickButton = (sortType: string) => {
    setSortButtons({
      ...sortButtons,
      active: sortType,
    });
    onClickSortButton(sortType);
  };

  return (
    <SearchBarStyle>
      <Form onSubmit={handleOnSubmit}>
        <Textfield
          id="search"
          name="search"
          value={inputValue}
          label={'Buscar'}
          placeholder="Buscar"
          onChange={onChange}
        />
      </Form>

      <div>
        <ButtonIconStyle
          theme="transparent"
          active={sortButtons.active === sortButtons.descendant}
          onClick={() => handleOnClickButton(sortButtons.descendant)}
        >
          <Icon imgRoute="minus.png" />
        </ButtonIconStyle>

        <ButtonIconStyle
          theme="transparent"
          active={sortButtons.active === sortButtons.ascendant}
          onClick={() => handleOnClickButton(sortButtons.ascendant)}
        >
          <Icon imgRoute="plus.png" />
        </ButtonIconStyle>
      </div>
    </SearchBarStyle>
  );
};

export default SearchBar;
