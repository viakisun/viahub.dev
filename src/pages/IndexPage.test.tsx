import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IndexPage from './IndexPage';

describe('IndexPage', () => {
  beforeEach(() => {
    // Wrap IndexPage in MemoryRouter because it contains Link components
    render(
      <MemoryRouter>
        <IndexPage />
      </MemoryRouter>
    );
  });

  test('renders the three main section headings', () => {
    // Check for the "Core" heading
    const coreHeading = screen.getByRole('heading', { name: /core/i });
    expect(coreHeading).toBeInTheDocument();

    // Check for the "Advanced" heading
    const advancedHeading = screen.getByRole('heading', { name: /advanced/i });
    expect(advancedHeading).toBeInTheDocument();

    // Check for the "Management" heading
    const managementHeading = screen.getByRole('heading', { name: /management/i });
    expect(managementHeading).toBeInTheDocument();
  });

  test('renders a total of 12 page cards', () => {
    // The cards are links, so we look for role 'link'
    // This is a bit broad, so we can also check for a class or a test-id if needed
    const cards = screen.getAllByRole('link');

    // We filter out the non-card links (e.g., skip link, footer link)
    const pageCards = cards.filter(card => card.href.endsWith('html') === false && card.getAttribute('href') !== '/README.md');

    // There's a skip-to-content link, so we expect 12 + 1 = 13 links if we don't filter.
    // A better way is to find the links within the sections.
    const coreSection = screen.getByRole('region', { name: /core/i });
    const advancedSection = screen.getByRole('region', { name: /advanced/i });
    const managementSection = screen.getByRole('region', { name: /management/i });

    const coreLinks = within(coreSection).getAllByRole('link');
    const advancedLinks = within(advancedSection).getAllByRole('link');
    const managementLinks = within(managementSection).getAllByRole('link');

    const totalCards = coreLinks.length + advancedLinks.length + managementLinks.length;

    expect(totalCards).toBe(12);
  });
});
