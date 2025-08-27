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
    // Check for a heading from the Stats section
    const statsHeading = screen.getByText(/trusted by 500\+/i);
    expect(statsHeading).toBeInTheDocument();

    // Check for some text from the Terminal demo
    const terminalText = screen.getByText(/agricultural-robot-deploy/i);
    expect(terminalText).toBeInTheDocument();
  });

  test('renders the three card sections', () => {
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

    const dashboardCard = screen.getByTestId('card-dashboard');
    const icon = screen.getByText('📊');
    expect(dashboardCard).toContainElement(icon);
    expect(dashboardCard).toHaveAttribute('href', '/robotics_ui_dashboard001.html');
  });
});
