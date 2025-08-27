import React from 'react';
import IndexSection from '../components/IndexSection';

const corePages = [
  { id: 'VIAHUB-UI-LANDING001', title: 'Landing', path: './landing.html', description: '“GitHub for Agricultural Robotics” message, demo/stack/pricing.' },
  { id: 'VIAHUB-UI-AUTH002', title: 'Auth', path: './robotics_ui_auth002.html', description: '4-step onboarding, GitHub OAuth, type/stack selection, team invite.' },
  { id: 'VIAHUB-UI-DASHBOARD001', title: 'Dashboard', path: './robotics_ui_dashboard001.html', description: 'Quick Stats/Activity/Robot/Deploy, real-time updates.' },
  { id: 'VIAHUB-UI-REPO003', title: 'Repo', path: './robotics_ui_repo003.html', description: 'Code/Issues/PRs/Actions/Deploy/Settings tabs, live comments.' },
  { id: 'VIAHUB-UI-ROBOT001', title: 'Robots', path: './robotics_ui_robot001.html', description: 'Fleet overview/filter/grid/batch actions, real-time monitoring.' },
  { id: 'VIAHUB-UI-ACTIONS001', title: 'Actions', path: './robotics_ui_actions001.html', description: 'Pipeline status, ROS2/AI/Deploy stage log streaming.' },
];

const advancedPages = [
  { id: 'VIAHUB-UI-MOBILE001', title: 'Mobile', path: './robotics_ui_mobile001.html', description: 'Tab bar, offline/push/emergency control UX guide.' },
  { id: 'VIAHUB-UI-MARKET001', title: 'Market', path: './robotics_ui_market001.html', description: 'Package search/install, categories, reviews/revenue sharing.' },
  { id: 'VIAHUB-UI-DEPLOY001', title: 'Deploy', path: './robotics_ui_deploy001.html', description: 'Env/group deploy, A-B/canary, rollback, progress/metrics.' },
];

const managementPages = [
  { id: 'VIAHUB-UI-ORG001', title: 'Org', path: './robotics_ui_org001.html', description: 'RBAC/SSO/audit logs/cost management.' },
  { id: 'VIAHUB-UI-SETTINGS001', title: 'Settings', path: './robotics_ui_settings001.html', description: 'Profile/security/notifications/PAT/SSH/Webhook/personalization.' },
  { id: 'VIAHUB-UI-ANALYTICS001', title: 'Analytics', path: './robotics_ui_analytics001.html', description: 'Uptime/efficiency/energy/dev productivity/ROI, drill-down.' },
];

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg-primary text-dark-text-primary font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-golden focus:p-4 focus:text-dark-bg-primary">
        Skip to main content
      </a>

      <header className="sticky top-0 z-10 border-b border-white/10 bg-dark-bg-primary/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-2xl font-bold">
              VIAHUB.DEV
              <span className="ml-2 font-light text-dark-text-secondary">— MVP Index</span>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <IndexSection title="Core" cards={corePages} />
        <IndexSection title="Advanced" cards={advancedPages} />
        <IndexSection title="Management" cards={managementPages} />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-dark-text-secondary sm:px-6 lg:px-8">
          <p>Version 0.1.0 (MVP) &copy; 2025 VIAHUB.DEV</p>
          <a href="./README.md" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-cyan hover:underline">
            View README
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
