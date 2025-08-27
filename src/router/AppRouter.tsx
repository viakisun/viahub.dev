import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all the pages
import IndexPage from '../pages/IndexPage';
import LandingPage from '../pages/Landing';
import AuthPage from '../pages/Auth';
import DashboardPage from '../pages/Dashboard';
import RepoPage from '../pages/Repo';
import RobotsPage from '../pages/Robots';
import ActionsPage from '../pages/Actions';
import MobilePage from '../pages/Mobile';
import MarketPage from '../pages/Market';
import DeployPage from '../pages/Deploy';
import OrgPage from '../pages/Org';
import SettingsPage from '../pages/Settings';
import AnalyticsPage from '../pages/Analytics';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        {/* Core */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/repo" element={<RepoPage />} />
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/actions" element={<ActionsPage />} />

        {/* Advanced */}
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/deploy" element={<DeployPage />} />

        {/* Management */}
        <Route path="/org" element={<OrgPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
