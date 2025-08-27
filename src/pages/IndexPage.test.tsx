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

  test('renders the Stats and Terminal sections', () => {
    const statsHeading = screen.getByText(/trusted by 500\+/i);
    expect(statsHeading).toBeInTheDocument();

    const terminalText = screen.getByText(/agricultural-robot-deploy/i);
    expect(terminalText).toBeInTheDocument();
  });

  test('renders the three card section titles', () => {
    const coreHeading = screen.getByRole('heading', { name: 'Core' });
    expect(coreHeading).toBeInTheDocument();

    const advancedHeading = screen.getByRole('heading', { name: 'Advanced' });
    expect(advancedHeading).toBeInTheDocument();

    const managementHeading = screen.getByRole('heading', { name: 'Management' });
    expect(managementHeading).toBeInTheDocument();
  });

  test('renders a total of 12 page cards', () => {
    const pageCards = screen.getAllByTestId(/^card-/);
    expect(pageCards).toHaveLength(12);

    // Check one card's content and href
    const dashboardCard = screen.getByTestId('card-dashboard');
    expect(dashboardCard).toHaveAttribute('href', '/robotics_ui_dashboard001.html');
    expect(dashboardCard.querySelector('.feature-icon')?.textContent).toBe('📊');
    expect(dashboardCard.querySelector('.feature-title')?.textContent).toBe('Dashboard');
  });
});
