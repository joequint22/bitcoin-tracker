import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultRow from '../../components/ResultRow';

// Mocking images
jest.mock('../assets/paybis-logo.png', () => 'paybis-logo.png');
jest.mock('../assets/moonpay-logo.png', () => 'moonpay-logo.png');
jest.mock('../assets/transak-logo.png', () => 'transak-logo.png');
jest.mock('../assets/gaurdarian-logo.png', () => 'gaurdarian-logo.png');

describe('ResultRow component', () => {
  const defaultProps = {
    loading: false,
    providerName: 'paybis',
    btc: '1.23456789',
  };

  it('renders with provided props', () => {
    const { getByText, getByAltText } = render(<ResultRow {...defaultProps} />);

    const btcElement = getByText('1.23456789 BTC');
    const providerLogo = getByAltText('provider-logo');

    expect(btcElement).toBeInTheDocument();
    expect(providerLogo).toBeInTheDocument();
  });

  it('renders loading skeleton when loading is true', () => {
    const { container } = render(<ResultRow loading={true} />);

    const skeletonElement = container.querySelector('.skeleton-animation');

    expect(skeletonElement).toBeInTheDocument();
  });

  it('renders without crashing when providerName is not provided', () => {
    const { container } = render(<ResultRow btc="1.23456789" />);

    expect(container).toBeInTheDocument();
  });

  it('renders with correct className for different provider logos', () => {
    const { getByAltText } = render(<ResultRow providerName="paybis" />);

    const paybisLogo = getByAltText('provider-logo');

    expect(paybisLogo).toHaveClass('h-8 invert');
  });

});