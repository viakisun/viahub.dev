import { render, screen } from '@testing-library/react';
import IndexPage from './IndexPage';

describe('IndexPage', () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  test('renders the main hero heading', () => {
    const mainHeading = screen.getByRole('heading', { name: /viahub.dev mvp index/i });
    expect(mainHeading).toBeInTheDocument();
  });

  test('renders the three section headings', () => {
    const coreHeading = screen.getByRole('heading', { name: /core/i });
    expect(coreHeading).toBeInTheDocument();

    const advancedHeading = screen.getByRole('heading', { name: /advanced/i });
    expect(advancedHeading).toBeInTheDocument();

    const managementHeading = screen.getByRole('heading', { name: /management/i });
    expect(managementHeading).toBeInTheDocument();
  });

  test('renders a total of 12 page cards with icons and correct hrefs', () => {
    const pageCards = screen.getAllByTestId(/^card-/);
    expect(pageCards).toHaveLength(12);

    // Check for an icon in one of the cards
    const dashboardCard = screen.getByTestId('card-dashboard');
    const icon = screen.getByText('📊');
    expect(dashboardCard).toContainElement(icon);

    // Check a few specific links
    expect(dashboardCard).toHaveAttribute('href', '/robotics_ui_dashboard001.html');

    const landingCard = screen.getByTestId('card-landing');
    expect(landingCard).toHaveAttribute('href', '/landing.html');
  });
});
