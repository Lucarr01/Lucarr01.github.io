
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isResume = location.pathname === '/resume';

  return (
    <header className="sticky top-0 z-50 px-4 md:px-20 lg:px-40 py-4 liquid-glass bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-white text-[20px]">terminal</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight">Luca Rippe - Portfolio</h2>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isHome ? 'text-white border-b-2 border-primary pb-0.5' : 'text-slate-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/resume" 
              className={`text-sm font-medium transition-colors ${isResume ? 'text-white border-b-2 border-primary pb-0.5' : 'text-slate-400 hover:text-white'}`}
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="px-4 md:px-20 lg:px-40 py-12 border-t border-white/10 mt-20 bg-black/20">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary">code</span>
        <p className="text-slate-500 text-sm">© 2024 Luca Rippe. Built with Modern Tech.</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-slate-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">terminal</span>
        </a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">hub</span>
        </a>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen hero-gradient">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
