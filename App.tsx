
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
        <a href="https://www.linkedin.com/in/luca-rippe-b93a69217" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://github.com/Lucarr01" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
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
