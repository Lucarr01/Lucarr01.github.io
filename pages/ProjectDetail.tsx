
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="px-6 md:px-20 lg:px-40 py-10 max-w-[1200px] mx-auto animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">terminal</span> Featured Case Study
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight">{project.title}</h1>
            <p className="text-slate-400 text-lg max-w-2xl">{project.description}</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-xl h-12 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-all">
              <span className="material-symbols-outlined">code</span>
              <span>GitHub</span>
            </button>
            <button className="flex items-center gap-2 rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:brightness-110">
              <span className="material-symbols-outlined">open_in_new</span>
              <span>Live Demo</span>
            </button>
          </div>
        </div>

        <div className="liquid-glass rounded-xl overflow-hidden aspect-video relative group">
          <div 
            className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: `url("${project.thumbnail}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <article className="liquid-glass p-8 rounded-xl">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">description</span>
              Project Description
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              {project.fullDescription.length > 0 ? (
                project.fullDescription.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>{project.description}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold border border-primary/30 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Methodology */}
          {project.methodology.length > 0 && (
            <article className="liquid-glass p-8 rounded-xl">
              <h2 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">architecture</span>
                Methodology
              </h2>
              <div className="space-y-0">
                {project.methodology.map((step, i) => (
                  <div key={i} className="grid grid-cols-[48px_1fr] gap-x-4">
                    <div className="flex flex-col items-center">
                      <div className={`size-10 rounded-full flex items-center justify-center transition-all ${i === 0 ? 'bg-primary text-white ring-8 ring-primary/10' : 'bg-primary/20 border border-primary/40 text-primary'}`}>
                        <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                      </div>
                      {i < project.methodology.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <article className="liquid-glass p-8 rounded-xl">
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">photo_library</span>
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden h-48 liquid-glass hover:border-primary/50 transition-all cursor-pointer group">
                    <div 
                      className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-700" 
                      style={{ backgroundImage: `url("${img}")` }}
                    />
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Results */}
          {project.stats && (
            <div className="liquid-glass p-6 rounded-xl border-l-4 border-primary">
              <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">insights</span>
                Results
              </h2>
              <ul className="space-y-6">
                {project.stats.map((stat, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack.length > 0 && (
            <div className="liquid-glass p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bolt</span>
                Tech Stack
              </h3>
              <div className="space-y-3">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded bg-white/5 border border-white/5">
                    <span className="text-slate-300 text-xs">{tech.category}</span>
                    <span className="text-white text-[10px] font-mono font-bold bg-primary px-2 py-1 rounded">
                      {tech.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="p-6 rounded-xl bg-primary relative overflow-hidden group cursor-pointer transition-all hover:brightness-110">
            <div className="absolute -right-4 -bottom-4 opacity-20 transform group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[120px] text-white">chat_bubble</span>
            </div>
            <h3 className="text-white font-bold text-xl relative z-10 mb-2">Want to work together?</h3>
            <p className="text-white/80 text-sm relative z-10 mb-6">I'm currently available for freelance projects and full-time opportunities.</p>
            <button className="relative z-10 w-full py-3 bg-white text-primary rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-xl">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
