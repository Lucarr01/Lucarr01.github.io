
import { Project, Experience, Skill, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'vqa-calibration',
    title: 'VQA Uncertainty Calibration',
    description: 'Research project focused on improving the reliability of Visual Question Answering models in medical contexts.',
    fullDescription: [
      'This research focuses on Visual Question Answering (VQA) with a heavy emphasis on uncertainty quantification and model calibration.',
      'Developed as part of my Master Thesis at the University of Oldenburg in collaboration with DFKI.',
      'The goal is to increase the trustworthiness of AI-driven medical diagnostic tools by providing reliable confidence scores for every model prediction.'
    ],
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVxjnURHhKx_kuPOz66QuVQ98112cRkIdP9P8QkbW8B26HHGe2bZbCRU58XTWaKLCQnn1W_obn3A38m207lCm_R4w1ZIreCle3X2A84zhh2dcLNG9_PSuWyhHxdpyaWCnRv_bID0kSc_QZMBLAvwOwYHvo2hLSC6-gWDLM7MJoME7YN1JJWHGJEW7KsFAnDj9lIWP5cA4Tq7L2t9SqCyMJwlP-UQsPAMZrNaPWI2GEvHwADSn9dnfpB9x8Axrh3EjcdrsTRN0zvAo',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'NLP'],
    techStack: [
      { category: 'Framework', value: 'PyTorch' },
      { category: 'Architecture', value: 'Transformers' },
      { category: 'Technique', value: 'Uncertainty Quant.' }
    ],
    methodology: [],
    gallery: []
  },
  {
    id: 'nlp-analytics-tool',
    title: 'NLP Customer Analytics',
    description: 'An automated tool for analyzing customer feedback and support reviews using BERT-based models.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnE3LJP12emEhqhw8unu3FPxUxPGuM3U_Xqbjj34hwEZtvVIva3bxC2viuP6MYFw8zH3ppwSUF-2xGZUs_7DEsxVuWWFzJgmy7kWw3Sfbb7iO-Lk3j7mMqdYXkSau5yB440Icyr027wZflrhqJ1KKt6e8xdSGe1C1yktv8zAAvDBWJru36GUajcmrcqCKpehphGwAbA6TUDCIyL7qw_cIp0QSACedd5MAKjQfpz23OIsWbueRBk_CW5Qp8Aq-GtozbbtiKb3WgKwc',
    tags: ['NLP', 'BERT', 'Python', 'FastAPI'],
    fullDescription: [],
    techStack: [],
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
