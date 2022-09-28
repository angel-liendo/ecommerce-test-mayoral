import { FormStyle } from './Form.style';

interface FormTypes {
  children: JSX.Element;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: FormTypes) => {
  return (
    <FormStyle onSubmit={onSubmit} role="form">
      {children}
    </FormStyle>
  );
};

export default Form;
