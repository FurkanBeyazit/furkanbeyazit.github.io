import type {Profile} from './types';

const profile: Profile = {
  hero: {
    name: 'Yagiz Furkan Beyazit',
    title: 'MLOps & Computer Vision Engineer',
    tagline:
      'Statistician turned AI engineer. At Danusys I single-handedly built the CCTV analytics model stack and the MLOps pipeline around it — from VLM auto-labelling to YOLO training, evaluation and deployment. Before that: LLM/RAG products and time-series anomaly detection.',
    location: 'Seoul, Korea',
    links: {
      github: 'https://github.com/FurkanBeyazit',
      linkedin: 'https://www.linkedin.com/in/furkanbyagiz/',
      email: 'furkanb.yagiz@gmail.com',
    },
  },
  labels: {
    projects: 'What I build',
    projectsSub:
      'Production systems at Danusys (2025 – present). Internal tools, so no source links — happy to walk through any of them.',
    earlier: 'Earlier work',
    experience: 'Experience',
    education: 'Education',
    certs: 'Certificates',
    skills: 'Skills',
    contact: 'Get in touch',
    contactSub: 'Open to MLOps / computer vision / AI engineering roles.',
    viewGithub: 'GitHub',
    viewLinkedin: 'LinkedIn',
    sendEmail: 'Email',
  },
  projects: [
    {
      id: 'mlops-train',
      name: 'MLOps Retraining Platform',
      summary:
        'End-to-end retraining loop for the field YOLO detector, run from one web dashboard: collect FP/TP images from the event DB, two-stage VLM auto-labelling, human review, class balancing, training with MLflow tracking, CCTV evaluation, ONNX export and model registry.',
      stack: ['YOLO', 'Qwen-VL', 'SAM', 'Prefect', 'MLflow', 'FastAPI', 'PostgreSQL', 'ONNX'],
      image: '/img/projects/mlops-train.svg',
      size: 'lg',
    },
    {
      id: 'reid',
      name: 'Person Re-ID Search',
      summary:
        'Background service that turns every person detection into a 1024-d SOLIDER embedding and answers "where else was this person seen?" with cosine search across cameras and days.',
      stack: ['PyTorch', 'SOLIDER', 'FastAPI', 'PostgreSQL', 'Gradio'],
      image: '/img/projects/reid.svg',
      size: 'md',
    },
    {
      id: 'analytics',
      name: 'Security Analytics Dashboard',
      summary:
        'Single-page dashboard over CCTV event tables: true/false-positive analysis, operator and server breakdowns, monthly reports, Excel imports and VLM-written event reports.',
      stack: ['FastAPI', 'PostgreSQL', 'MariaDB', 'Alpine.js', 'ECharts'],
      image: '/img/projects/analytics.svg',
      size: 'md',
    },
    {
      id: 'model-eval',
      name: 'Model Eval Platform',
      summary:
        'Compare up to three YOLO checkpoints on real field CCTV sets — official mAP/P/R plus per-image TP/FP/FN — and export a 12-sheet Excel report. Also the evaluator step of the MLOps pipeline.',
      stack: ['Ultralytics', 'FastAPI', 'Gradio', 'openpyxl'],
      image: '/img/projects/model-eval.svg',
      size: 'sm',
    },
    {
      id: 'video',
      name: 'Video Summary Platform',
      summary:
        'Web front-end for a VLM video-analysis backend: upload and queue recordings, browse events on a timeline with bbox overlay, inspect tracked objects, and link one person across cameras with Re-ID.',
      stack: ['ES Modules', 'HLS', 'ffmpeg', 'Python proxy'],
      image: '/img/projects/video.svg',
      size: 'md',
    },
    {
      id: 'daily-report',
      name: 'Daily Report Mailer',
      summary:
        "Windows tray app that e-mails an HTML summary of yesterday's events with inline charts every morning, built from the analytics API. Shipped as a single signed exe.",
      stack: ['Python', 'SMTP', 'PyInstaller'],
      image: '/img/projects/daily-report.svg',
      size: 'sm',
    },
  ],
  earlier: [],
  experience: [
    {org: 'Danusys', role: 'Researcher — MLOps & Computer Vision', period: '2025.10 – Present', note: 'CCTV analytics models, fine-tuning, MLOps pipeline'},
    {org: 'Petobio', role: 'AI Engineer Intern', period: '2024.07 – 2025.01', note: 'LLM / RAG diagnostic assistant for veterinarians, server & DB'},
    {org: 'LeverLock', role: 'Researcher', period: '2024.07 – 2024.10', note: 'Time-series monitoring and anomaly detection for production equipment'},
    {org: 'Genius Sports', role: 'Sports Statistician', period: '2023.07 – Present', note: 'Basketball & football match data'},
  ],
  education: [
    {org: 'Kyungbok University', role: 'Big Data', period: '2023 – 2026'},
    {org: 'Ege University', role: 'B.Sc. Statistics', period: '2009 – 2013'},
  ],
  certs: ['TOEIC 940', 'TOPIK Level 4', 'Google Data Analytics Professional', 'IBM Data Analyst Professional'],
  skills: [
    {group: 'Computer Vision', items: ['YOLO', 'PyTorch', 'Person Re-ID (SOLIDER)', 'VLM (Qwen-VL)', 'SAM']},
    {group: 'MLOps', items: ['Prefect', 'MLflow', 'ONNX', 'Docker', 'FastAPI', 'Gradio']},
    {group: 'LLM', items: ['LangChain', 'RAG', 'FAISS', 'OpenAI API']},
    {group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Pandas', 'Time-series / Anomaly Detection']},
    {group: 'Frontend', items: ['JavaScript', 'Alpine.js', 'ECharts', 'Tailwind']},
    {group: 'BI', items: ['Power BI', 'Tableau', 'Excel']},
  ],
};

export default profile;
