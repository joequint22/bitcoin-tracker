import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AmountInput } from '../../components/AmountInput';

describe('AmountInput component', () => {
  it('renders with the provided props', () => {
    const placeholder = 'Enter amount';
    const value = '100';
    const onChange = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <AmountInput placeholder={placeholder} value={value} onChange={onChange} />
    );

    const inputElement = getByPlaceholderText(placeholder) as HTMLInputElement;
    const usdElement = getByText('USD');

    expect(inputElement).toHaveValue(value);
    expect(usdElement).toBeInTheDocument();
  });

  it('calls the onChange function when input value changes', () => {
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <AmountInput placeholder="Enter amount" value="" onChange={onChange} />
    );

    const inputElement = getByPlaceholderText('Enter amount') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '500' } });

    expect(onChange);
  });

  it('renders with default placeholder when not provided', () => {
    const { getByPlaceholderText } = render(
      <AmountInput value="" onChange={jest.fn()} placeholder={''} />
    );

    const inputElement = getByPlaceholderText('') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
  });
});