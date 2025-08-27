import React from 'react';
import IndexSection from '../components/IndexSection';
import StatsSection from '../components/StatsSection';
import TerminalDemo from '../components/TerminalDemo';

const corePages = [
  { title: 'Landing', path: '/landing.html', icon: '🌾', description: '“GitHub for Agricultural Robotics” message, demo/stack/pricing.' },
  { title: 'Auth', path: '/robotics_ui_auth002.html', icon: '🔑', description: '4-step onboarding, GitHub OAuth, type/stack selection, team invite.' },
  { title: 'Dashboard', path: '/robotics_ui_dashboard001.html', icon: '📊', description: 'Quick Stats/Activity/Robot/Deploy, real-time updates.' },
  { title: 'Repo', path: '/robotics_ui_repo003.html', icon: '📂', description: 'Code/Issues/PRs/Actions/Deploy/Settings tabs, live comments.' },
  { title: 'Robots', path: '/robotics_ui_robot001.html', icon: '🤖', description: 'Fleet overview/filter/grid/batch actions, real-time monitoring.' },
  { title: 'Actions', path: '/robotics_ui_actions001.html', icon: '⚙️', description: 'Pipeline status, ROS2/AI/Deploy stage log streaming.' },
];

const advancedPages = [
  { title: 'Mobile', path: '/robotics_ui_mobile001.html', icon: '📱', description: 'Tab bar, offline/push/emergency control UX guide.' },
  { title: 'Market', path: '/robotics_ui_market001.html', icon: '🛒', description: 'Package search/install, categories, reviews/revenue sharing.' },
  { title: 'Deploy', path: '/robotics_ui_deploy001.html', icon: '🚀', description: 'Env/group deploy, A-B/canary, rollback, progress/metrics.' },
];

const managementPages = [
  { title: 'Org', path: '/robotics_ui_org001.html', icon: '🏢', description: 'RBAC/SSO/audit logs/cost management.' },
  { title: 'Settings', path: '/robotics_ui_settings001.html', icon: '🔧', description: 'Profile/security/notifications/PAT/SSH/Webhook/personalization.' },
  { title: 'Analytics', path: '/robotics_ui_analytics001.html', icon: '📈', description: 'Uptime/efficiency/energy/dev productivity/ROI, drill-down.' },
];


const IndexPage: React.FC = () => {
  return (
    <>
      <a href="#main-content" style={{position:'absolute',left:'-10000px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}}>Skip to main content</a>

      <header className="header">
        <nav className="nav">
          <a href="/" className="logo">
            <div className="logo-icon">V</div>
            VIAHUB.DEV
          </a>
          <div className="nav-links">
            <span style={{color: 'var(--text-secondary)'}}>MVP Index</span>
          </div>
          <div className="nav-actions">
            <a href="/README.md" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View README
            </a>
            <a href="/landing.html" className="btn btn-primary">
              🚀 View Landing Page
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="main">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              VIAHUB.DEV MVP Index
            </h1>
            <p className="hero-subtitle">
              A curated collection of the Minimum Viable Product pages. Use this hub to navigate to each implemented feature.
            </p>
          </div>
        </section>

        <TerminalDemo />
        <StatsSection />

        <div className="features-container" style={{paddingTop: '80px'}}>
            <IndexSection title="Core" cards={corePages} />
            <IndexSection title="Advanced" cards={advancedPages} />
            <IndexSection title="Management" cards={managementPages} />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">&copy; 2025 VIAHUB.DEV. Empowering agricultural innovation through robotics.</p>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
