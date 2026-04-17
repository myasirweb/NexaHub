import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Features from './pages/Features';
import HR from './pages/features/HR';
import Projects from './pages/features/Projects';
import Finance from './pages/features/Finance';
import Communication from './pages/features/Communication';
import Inventory from './pages/features/Inventory';
import Solutions from './pages/Solutions';
import ByIndustry from './pages/solutions/ByIndustry';
import ByTeam from './pages/solutions/ByTeam';
import Enterprise from './pages/Enterprise';
import Resources from './pages/Resources';
import Learn from './pages/resources/Learn';
import Support from './pages/resources/Support';
import Blog from './pages/resources/Blog';
import BlogDetail from './pages/resources/BlogDetail';
import Pricing from './pages/Pricing';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/hr" element={<HR />} />
          <Route path="/features/projects" element={<Projects />} />
          <Route path="/features/finance" element={<Finance />} />
          <Route path="/features/communication" element={<Communication />} />
          <Route path="/features/inventory" element={<Inventory />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/industry" element={<ByIndustry />} />
          <Route path="/solutions/team" element={<ByTeam />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/learn" element={<Learn />} />
          <Route path="/resources/support" element={<Support />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/detail" element={<BlogDetail />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
