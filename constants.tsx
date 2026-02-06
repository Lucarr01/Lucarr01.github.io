
import { Project, Experience, Skill, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'visual-quality-decision-support',
    title: 'Visual Quality Decision Support',
    description:
      'End-to-end machine learning system for automated visual quality inspection of industrial components, with integrated decision support.',
    fullDescription: [
      'This project implements a production-oriented end-to-end ML system for visual quality inspection in an automotive-like industrial setting.',
      'A computer vision model detects defects in component images and estimates defect type and severity with reproducible training pipelines.',
      'Predictions are served via a versioned REST API and enriched with deterministic decision logic using a knowledge graph.',
      'A retrieval-augmented generation (RAG) component provides traceable, document-backed quality and process recommendations.',
      'The project is designed as a GitHub portfolio project to demonstrate ML engineering, deployment, monitoring, and system integration skills rather than maximizing model accuracy.'
    ],
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVxjnURHhKx_kuPOz66QuVQ98112cRkIdP9P8QkbW8B26HHGe2bZbCRU58XTWaKLCQnn1W_obn3A38m207lCm_R4w1ZIreCle3X2A84zhh2dcLNG9_PSuWyhHxdpyaWCnRv_bID0kSc_QZMBLAvwOwYHvo2hLSC6-gWDLM7MJoME7YN1JJWHGJEW7KsFAnDj9lIWP5cA4Tq7L2t9SqCyMJwlP-UQsPAMZrNaPWI2GEvHwADSn9dnfpB9x8Axrh3EjcdrsTRN0zvAo',
    tags: [
      'Machine Learning Engineering',
      'Computer Vision',
      'MLOps',
      'Decision Support Systems',
      'Industrial AI'
    ],
    techStack: [
      { category: 'ML Framework', value: 'PyTorch' },
      { category: 'API', value: 'FastAPI' },
      { category: 'Data & Logic', value: 'Knowledge Graph (Neo4j)' },
      { category: 'LLM Integration', value: 'RAG' },
      { category: 'Deployment', value: 'Docker' },
      { category: 'Monitoring', value: 'Prometheus & Grafana' }
    ],
    methodology: [],
    gallery: []
  }
];


export const EXPERIENCES: Experience[] = [
  {
    company: 'German Research Center for Artificial Intelligence (DFKI)',
    location: 'Oldenburg, Germany',
    roles: [
      {
        title: 'Student Research Assistant',
        type: 'Working Student',
        period: 'Aug 2025 - Apr 2026',
        current: true,
        description: 'Researching Visual Question Answering (VQA) with a focus on uncertainty quantification and model calibration to improve prediction reliability.'
      }
    ]
  },
  {
    company: 'CEWE Group',
    location: 'Oldenburg, Lower Saxony, Germany',
    totalPeriod: '2 yrs 4 mos',
    roles: [
      {
        title: 'Data Analyst',
        type: 'Working Student',
        period: 'Jun 2023 - Dec 2024 · 1 yr 7 mos',
        description: 'Conducted NLP analyses including text classification, LLM-based text summarization, and fine-tuning of BERT-based deep learning models. Applied clustering and segmentation techniques to identify patterns in large-scale customer datasets.',
        skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Transformers']
      },
      {
        title: 'Data Analyst',
        type: 'Internship',
        period: 'Apr 2023 - May 2023 · 2 mos',
        description: 'Developed an NLP-based analysis tool for processing customer data and reviews to support customer service operations.',
        skills: ['spaCy', 'Natural Language Processing (NLP)']
      },
      {
        title: 'Business Intelligence Analyst',
        type: 'Working Student',
        period: 'Sep 2022 - Mar 2023 · 7 mos',
        description: 'Created KPI reports and dashboards based on large datasets to support data-driven strategic decision-making.'
      }
    ]
  },
  {
    company: 'YAZAKI Systems Technologies GmbH',
    location: 'Brake/Cologne, Germany',
    roles: [
      {
        title: 'Intern',
        type: 'Rotational Program',
        period: 'Jul 2019 - Aug 2019',
        description: 'Gained insights into Engineering, Controlling, Production, and Quality Management in the automotive manufacturing sector.'
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'M.Sc. Applied Economics and Data Science',
    institution: 'Carl von Ossietzky University of Oldenburg',
    period: '10/2023 - 05/2026',
    details: 'Master Thesis: Application of uncertainty calibration methods to increase the reliability of VQA models in medical applications.'
  },
  {
    degree: 'Semester Abroad',
    institution: 'University of Dubrovnik, Croatia',
    period: '02/2025 - 06/2025'
  },
  {
    degree: 'B.A. Economics and Business Administration',
    institution: 'Carl von Ossietzky University of Oldenburg',
    period: '10/2019 - 09/2023',
    details: 'Bachelor Thesis: Application of Machine Learning techniques (SVM, MLP, RF) for predicting credit ratings.'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Programming',
    items: ['Python (PyTorch, TensorFlow)', 'SQL', 'R', 'Git']
  },
  {
    category: 'Data Science',
    items: ['NLP', 'Computer Vision', 'Model Calibration', 'Clustering']
  },
  {
    category: 'Languages',
    items: ['German (Native)', 'English (Fluent)']
  }
];
