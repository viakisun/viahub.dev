import { render, screen } from '@testing-library/react';
import IndexPage from './IndexPage';

describe('IndexPage', () => {
  beforeEach(() => {
    render(<IndexPage />);
  });

  test('renders the three main section headings', () => {
    const coreHeading = screen.getByRole('heading', { name: /core/i });
    expect(coreHeading).toBeInTheDocument();

    const advancedHeading = screen.getByRole('heading', { name: /advanced/i });
    expect(advancedHeading).toBeInTheDocument();

    const managementHeading = screen.getByRole('heading', { name: /management/i });
    expect(managementHeading).toBeInTheDocument();
  });

  test('renders a total of 12 page cards and checks specific hrefs', () => {
    // Find all elements with a test id that starts with "card-"
    const pageCards = screen.getAllByTestId(/^card-/);
    expect(pageCards).toHaveLength(12);

    // Check a few specific links to be sure, using their new test ids
    const dashboardCard = screen.getByTestId('card-dashboard');
    expect(dashboardCard).toHaveAttribute('href', './robotics_ui_dashboard001.html');

    const landingCard = screen.getByTestId('card-landing');
    expect(landingCard).toHaveAttribute('href', './landing.html');

    const analyticsCard = screen.getByTestId('card-analytics');
    expect(analyticsCard).toHaveAttribute('href', './robotics_ui_analytics001.html');
  });
});
