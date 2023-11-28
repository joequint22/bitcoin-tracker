import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField, { InputFieldProps } from '../../components/InputField';

describe('InputField component', () => {
  const onChangeMock: InputFieldProps['onChange'] = jest.fn();

  const defaultProps: InputFieldProps = {
    value: '',
    onChange: onChangeMock,
    placeholder: 'Enter value',
  };

  it('renders with the provided props', () => {
    const { getByPlaceholderText } = render(<InputField {...defaultProps} />);

    const inputElement = getByPlaceholderText(defaultProps.placeholder) as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(defaultProps.value);
  });

  it('calls the onChange function when input value changes', () => {
    const { getByPlaceholderText } = render(
        <InputField value={''} placeholder={'Amount'}  onChange={onChangeMock} />
    )

    const inputElement = getByPlaceholderText('Amount') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '500' } });

    expect(onChangeMock);
  });

  it('renders with additional class name', () => {
    const additionalClassName = 'custom-class';

    const { container } = render(<InputField {...defaultProps} className={additionalClassName} />);

    const inputElement = container.querySelector('input');

    expect(inputElement).toHaveClass(additionalClassName);
  });
});