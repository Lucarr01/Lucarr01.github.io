
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-10 max-w-[1200px] mx-auto">
      {/* Profile Header */}
      <section className="liquid-glass rounded-xl p-8 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 overflow-hidden" 
              style={{ backgroundImage: 'url("/profile-picture.png")' }}
            />
            <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-background-dark animate-pulse"></div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight">Luca Rippe</h1>
              <span className="text-primary text-xs font-semibold px-2 py-1 rounded bg-primary/10 border border-primary/20">Available for Work</span>
            </div>
            <p className="text-slate-400 text-lg font-medium mb-4">Full-Stack Developer | Specialized in Modern Web Architectures</p>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              I am a passionate software engineer dedicated to building seamless digital experiences. 
              With a deep focus on performance and clean code, I bridge the gap between complex 
              backend logic and intuitive frontend design to create products that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Details Card */}
      <section className="liquid-glass rounded-xl p-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm text-slate-500">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">school</span>
            </div>
            <span>B.S. Computer Science • Stanford University</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">work</span>
            </div>
            <span>5+ Years Experience • Ex-Google, Fintech startups</span>
          </div>
          <a href="#" className="flex items-center gap-3 justify-center md:justify-start hover:text-primary transition-colors group">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="size-5 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.1 0-2 .6-2.5 1.4V10h-3v8.5h3v-4.8a1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5v4.8h3M6.5 10H9v8.5H6.5V10M8 6.5A1.3 1.3 0 0 1 6.8 7.8 1.3 1.3 0 0 1 5.5 6.5 1.3 1.3 0 0 1 6.8 5.2 1.3 1.3 0 0 1 8 6.5z"/>
              </svg>
            </div>
            <span>linkedin.com/in/lucarippe</span>
          </a>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">language</span>
            </div>
            <span>English, Spanish, Javascript, Go</span>
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
