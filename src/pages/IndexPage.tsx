import React from 'react';
import IndexSection from '../components/IndexSection';

// Data for the cards, now with icons
const corePages = [
  { id: 'VIAHUB-UI-LANDING001', title: 'Landing', path: '/landing.html', icon: '🌾', description: '“GitHub for Agricultural Robotics” message, demo/stack/pricing.' },
  { id: 'VIAHUB-UI-AUTH002', title: 'Auth', path: '/robotics_ui_auth002.html', icon: '🔑', description: '4-step onboarding, GitHub OAuth, type/stack selection, team invite.' },
  { id: 'VIAHUB-UI-DASHBOARD001', title: 'Dashboard', path: '/robotics_ui_dashboard001.html', icon: '📊', description: 'Quick Stats/Activity/Robot/Deploy, real-time updates.' },
  { id: 'VIAHUB-UI-REPO003', title: 'Repo', path: '/robotics_ui_repo003.html', icon: '📂', description: 'Code/Issues/PRs/Actions/Deploy/Settings tabs, live comments.' },
  { id: 'VIAHUB-UI-ROBOT001', title: 'Robots', path: '/robotics_ui_robot001.html', icon: '🤖', description: 'Fleet overview/filter/grid/batch actions, real-time monitoring.' },
  { id: 'VIAHUB-UI-ACTIONS001', title: 'Actions', path: '/robotics_ui_actions001.html', icon: '⚙️', description: 'Pipeline status, ROS2/AI/Deploy stage log streaming.' },
];

const advancedPages = [
  { id: 'VIAHUB-UI-MOBILE001', title: 'Mobile', path: '/robotics_ui_mobile001.html', icon: '📱', description: 'Tab bar, offline/push/emergency control UX guide.' },
  { id: 'VIAHUB-UI-MARKET001', title: 'Market', path: '/robotics_ui_market001.html', icon: '🛒', description: 'Package search/install, categories, reviews/revenue sharing.' },
  { id: 'VIAHUB-UI-DEPLOY001', title: 'Deploy', path: '/robotics_ui_deploy001.html', icon: '🚀', description: 'Env/group deploy, A-B/canary, rollback, progress/metrics.' },
];

const managementPages = [
  { id: 'VIAHUB-UI-ORG001', title: 'Org', path: '/robotics_ui_org001.html', icon: '🏢', description: 'RBAC/SSO/audit logs/cost management.' },
  { id: 'VIAHUB-UI-SETTINGS001', title: 'Settings', path: '/robotics_ui_settings001.html', icon: '🔧', description: 'Profile/security/notifications/PAT/SSH/Webhook/personalization.' },
  { id: 'VIAHUB-UI-ANALYTICS001', title: 'Analytics', path: '/robotics_ui_analytics001.html', icon: '📈', description: 'Uptime/efficiency/energy/dev productivity/ROI, drill-down.' },
];


const IndexPage: React.FC = () => {
  return (
    <div className="bg-dark-bg-primary text-dark-text-primary font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-golden focus:p-4 focus:text-dark-bg-primary">
        Skip to main content
      </a>

      {/* Header based on landing.html */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg-primary/80 backdrop-blur-lg border-b border-white/10 px-6">
        <nav className="flex items-center justify-between h-16 max-w-6xl mx-auto">
          <a href="/" className="flex items-center gap-3 text-xl font-bold text-dark-text-primary no-underline">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-golden to-cyan text-dark-bg-primary font-bold text-lg">V</div>
            VIAHUB.DEV
          </a>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-dark-text-secondary font-medium">MVP Index</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/README.md" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md text-sm font-medium bg-white/5 border border-white/10 text-dark-text-primary hover:bg-white/10 transition-colors">
              View README
            </a>
            <a href="/landing.html" className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-br from-golden to-yellow-500 text-dark-bg-primary shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] hover:-translate-y-0.5 transition-all">
              🚀 View Landing Page
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="pt-16">
        {/* Hero Welcome Section */}
        <section className="text-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,_rgba(255,184,0,0.1)_0%,_transparent_50%)] z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-golden bg-clip-text text-transparent !leading-tight">
              VIAHUB.DEV MVP Index
            </h1>
            <p className="mt-4 text-lg text-dark-text-secondary">
              A curated collection of the Minimum Viable Product pages. Use this hub to navigate to each implemented feature.
            </p>
          </div>
        </section>

        {/* Main content with cards */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
            <IndexSection title="Core" cards={corePages} />
            <IndexSection title="Advanced" cards={advancedPages} />
            <IndexSection title="Management" cards={managementPages} />
        </div>
      </main>

      {/* Footer based on landing.html */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-dark-text-secondary text-sm">
          <p>&copy; 2025 VIAHUB.DEV. Empowering agricultural innovation through robotics.</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
