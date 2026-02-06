
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const FULL_NAME = 'Luca Rippe';

const Home: React.FC = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedName(FULL_NAME.slice(0, index));
      if (index >= FULL_NAME.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 md:px-20 lg:px-40 py-10 max-w-[1200px] mx-auto">
      {/* Profile Header */}
      <section className="liquid-glass rounded-xl p-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover h-32 w-32 md:h-40 md:w-40 overflow-hidden border-2 border-primary/50 profile-blob" 
              style={{ backgroundImage: 'url("/profile-picture.png")' }}
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {displayedName}
                <span className={`inline-block w-[2px] h-[1em] bg-slate-100 ml-0.5 align-middle ${doneTyping ? 'animate-blink' : ''}`} />
              </h1>
            </div>
            <p className="text-slate-400 text-lg font-medium mb-4">Machine Learning Engineer | Applied Research & Reliable ML Systems</p>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            I am a Master’s student in Applied Economics and Data Science with a strong focus on machine learning and data-driven methods. 
            My experience includes applied research and industry projects in areas such as NLP, Visual Question Answering, and uncertainty-aware modeling. 
            I am particularly interested in developing robust and reliable ML systems for real-world applications.
            </p>
          </div>
        </div>

        {/* Info Icons */}
        <div className="flex justify-center gap-6 pt-6 mt-6 border-t border-white/10">
          {/* School */}
          <div className="relative group">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary text-[20px]">school</span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              M.Sc Applied Economics and Data Science &bull; University of Oldenburg
            </div>
          </div>

          {/* Work */}
          <div className="relative group">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary text-[20px]">work</span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              Research Assistant &bull; German Research Center for Artificial Intelligence
            </div>
          </div>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luca-rippe-b93a69217" target="_blank" rel="noopener noreferrer" className="relative group">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="size-5 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              Connect with me
            </div>
          </a>

          {/* Language */}
          <div className="relative group">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary text-[20px]">language</span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              German (Native), English (Fluent)
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Link 
            key={project.id} 
            to={`/project/${project.id}`}
            className="liquid-glass rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url("${project.thumbnail}")` }}
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">open_in_new</span>
              </div>
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
