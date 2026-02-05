
import React from 'react';
import { EXPERIENCES, SKILLS, EDUCATION } from '../constants';

// Function to get company logo based on company name
const getCompanyLogo = (companyName: string): string | null => {
  const logoMap: { [key: string]: string } = {
    'DFKI': '/dfki_logo.jpeg',
    'German Research Center for Artificial Intelligence': '/dfki_logo.jpeg',
    'CEWE': '/cewe_color_logo.jpeg',
    'CEWE Group': '/cewe_color_logo.jpeg',
    'YAZAKI': '/yazaki_europe_logo.jpeg',
    'YAZAKI Systems Technologies GmbH': '/yazaki_europe_logo.jpeg',
  };
  
  // Check for exact match first
  if (logoMap[companyName]) {
    return logoMap[companyName];
  }
  
  // Check for partial match (case-insensitive)
  const upperCompany = companyName.toUpperCase();
  for (const [key, logo] of Object.entries(logoMap)) {
    if (upperCompany.includes(key.toUpperCase())) {
      return logo;
    }
  }
  
  return null;
};

const Resume: React.FC = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-12 max-w-[1200px] mx-auto animate-in fade-in duration-500">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-black tracking-tight">Resume</h1>
          <p className="text-slate-400 text-lg">Applied Economics, Data Science & Artificial Intelligence.</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-all border border-white/10 liquid-glass group">
          <span className="material-symbols-outlined transition-transform group-hover:translate-y-0.5">download</span>
          <span>Download PDF</span>
        </button>
      </div>

      <div className="space-y-16">
        {/* Practical Experience */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Practical Experience</h2>
          </div>
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="liquid-glass p-8 rounded-xl relative group overflow-hidden border-l-4 border-primary/20 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  {/* Company logo or stylized initial */}
                  {getCompanyLogo(exp.company) ? (
                    <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 overflow-hidden">
                      <img 
                        src={getCompanyLogo(exp.company)!} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <span className="text-primary font-black text-xl">{exp.company.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-white text-xl font-bold">{exp.company}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400">
                      {exp.totalPeriod && <span>{exp.totalPeriod}</span>}
                      {exp.totalPeriod && exp.location && <span className="text-slate-600">•</span>}
                      {exp.location && <span>{exp.location}</span>}
                    </div>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-white/5 space-y-8">
                  {exp.roles.map((role, j) => (
                    <div key={j} className="relative">
                      {/* The dot on the timeline */}
                      <div className={`absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background-dark ${role.current ? 'bg-primary scale-125 shadow-[0_0_8px_rgba(17,82,212,0.6)]' : 'bg-slate-700'}`} />
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h4 className="text-white font-bold">{role.title}</h4>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                            {role.period}
                          </span>
                        </div>
                        <p className="text-primary/80 text-xs font-medium uppercase tracking-wide">{role.type}</p>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                          {role.description}
                        </p>
                        
                        {role.skills && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {role.skills.map((skill, k) => (
                              <span key={k} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Education</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="liquid-glass p-6 rounded-xl hover:bg-white/[0.05] transition-colors">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                    <p className="text-primary text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                {edu.details && (
                  <p className="text-slate-400 text-sm mt-3 border-l-2 border-white/10 pl-4 italic">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Skills & Tools</h2>
          </div>
          <div className="liquid-glass p-6 rounded-xl space-y-8">
            {SKILLS.map((skill, i) => (
              <div key={i}>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-60">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${skill.category === 'Programming' ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-white/5 text-slate-300'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
