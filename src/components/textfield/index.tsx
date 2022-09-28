import Icon from '../icon';
import { BoxInput } from './Textfield.style';

interface TextfieldTypes {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield = ({ value, onChange, type = 'text', ...props }: TextfieldTypes) => {
  return (
    <BoxInput>
      <Icon imgRoute="search-icon.png" />
      <input onChange={onChange} value={value} type={type} {...props} />
    </BoxInput>
  );
};

export default Textfield;
