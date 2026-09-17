import type {Profile} from './types';

const profile: Profile = {
  hero: {
    name: '야흐즈 푸르칸 베야짓',
    title: 'MLOps & Computer Vision 엔지니어',
    tagline:
      '통계학 전공에서 출발한 AI 엔지니어입니다. 다누시스에서 CCTV 영상 분석 모델 스택과 그 주변의 MLOps 파이프라인(VLM 자동 라벨링 → YOLO 학습 → 평가 → 배포)을 단독으로 설계·구축했습니다. 이전에는 LLM/RAG 서비스와 시계열 이상 탐지를 개발했습니다.',
    location: '대한민국, 서울',
    links: {
      github: 'https://github.com/FurkanBeyazit',
      linkedin: 'https://www.linkedin.com/in/furkanbyagiz/',
      email: 'furkanb.yagiz@gmail.com',
    },
  },
  labels: {
    projects: '주요 프로젝트',
    projectsSub:
      '다누시스 재직 중 개발한 운영 시스템 (2025 – 현재). 사내 시스템이라 소스 링크는 없으며, 상세 내용은 면접에서 설명드릴 수 있습니다.',
    earlier: '이전 프로젝트',
    experience: '경력',
    education: '학력',
    certs: '자격 및 수료',
    skills: '기술 스택',
    contact: '연락하기',
    contactSub: 'MLOps · 컴퓨터 비전 · AI 엔지니어 포지션에 관심이 있습니다.',
    viewGithub: 'GitHub',
    viewLinkedin: 'LinkedIn',
    sendEmail: '이메일',
  },
  projects: [
    {
      id: 'mlops-train',
      name: 'MLOps 재학습 플랫폼',
      summary:
        '현장 YOLO 탐지 모델의 재학습 전 과정을 하나의 웹 대시보드에서 운영: 이벤트 DB에서 FP/TP 이미지 수집 → 2단계 VLM 자동 라벨링 → 사람 검수 → 클래스 밸런싱 → MLflow 추적 학습 → CCTV 평가 → ONNX 내보내기 및 모델 레지스트리.',
      stack: ['YOLO', 'Qwen-VL', 'SAM', 'Prefect', 'MLflow', 'FastAPI', 'PostgreSQL', 'ONNX'],
      image: '/img/projects/mlops-train.svg',
      size: 'lg',
    },
    {
      id: 'reid',
      name: '인물 Re-ID 검색',
      summary:
        '모든 사람 탐지 결과를 1024차원 SOLIDER 임베딩으로 변환해 저장하고, 코사인 유사도로 “이 사람이 다른 카메라·다른 날짜에 어디에 있었는지”를 검색하는 백그라운드 서비스.',
      stack: ['PyTorch', 'SOLIDER', 'FastAPI', 'PostgreSQL', 'Gradio'],
      image: '/img/projects/reid.svg',
      size: 'md',
    },
    {
      id: 'analytics',
      name: '보안 통계 대시보드',
      summary:
        'CCTV 이벤트 테이블 기반 단일 페이지 대시보드: 정탐/오탐 분석, 관제사·서버별 통계, 월간 리포트, Excel 업로드, VLM 이벤트 보고서 생성.',
      stack: ['FastAPI', 'PostgreSQL', 'MariaDB', 'Alpine.js', 'ECharts'],
      image: '/img/projects/analytics.svg',
      size: 'md',
    },
    {
      id: 'model-eval',
      name: '모델 평가 플랫폼',
      summary:
        '실제 현장 CCTV 데이터셋에서 최대 3개의 YOLO 모델을 나란히 비교(mAP/P/R + 이미지별 TP/FP/FN)하고 12개 시트 Excel로 내보내기. MLOps 파이프라인의 평가 단계로도 사용.',
      stack: ['Ultralytics', 'FastAPI', 'Gradio', 'openpyxl'],
      image: '/img/projects/model-eval.svg',
      size: 'sm',
    },
    {
      id: 'video',
      name: '지능형 영상 요약 플랫폼',
      summary:
        'VLM 영상 분석 백엔드의 웹 프론트엔드: 녹화 영상 업로드·분석 큐, bbox 오버레이 타임라인, 추적 객체 조회, Re-ID 기반 카메라 간 인물 연결.',
      stack: ['ES Modules', 'HLS', 'ffmpeg', 'Python proxy'],
      image: '/img/projects/video.svg',
      size: 'md',
    },
    {
      id: 'vlm-gate',
      name: 'VLM-Gate',
      summary:
        'LLM ↔ VMS ↔ VLM 사이의 Docker 브리지 서비스: SSE 트리거를 VMS로 전달하고 VLM 콜백을 기다린 뒤 같은 연결로 설명 결과를 스트리밍.',
      stack: ['FastAPI', 'SSE', 'Docker'],
      image: '/img/projects/vlm-gate.svg',
      size: 'sm',
    },
    {
      id: 'daily-report',
      name: '일일 통계 메일링',
      summary:
        '매일 아침 전날 이벤트 요약을 차트와 함께 HTML 메일로 발송하는 Windows 트레이 앱. 통계 API를 호출해 생성하며 단일 exe로 배포.',
      stack: ['Python', 'SMTP', 'PyInstaller'],
      image: '/img/projects/daily-report.svg',
      size: 'sm',
    },
  ],
  earlier: [
    {
      id: 'ai-edu',
      name: 'AI 교육 솔루션',
      period: '2024 – 2025',
      summary:
        'PDF/DOCX 강의 자료에서 GPT-4o·LangChain으로 객관식·단답형 문제를 생성하는 Quiz Generation API와, FAISS·OpenAI 임베딩으로 강의·교수 정보를 질의응답하는 RAG 학교 어시스턴트.',
      stack: ['GPT-4o', 'LangChain', 'FAISS', 'FastAPI', 'MongoDB', 'Gradio'],
      image: '/img/projects/ai-suite.png',
      size: 'lg',
    },
  ],
  experience: [
    {org: '㈜다누시스', role: '연구원 — MLOps & Computer Vision', period: '2025.10 – 현재', note: 'CCTV 영상 분석 모델 개발, 파인튜닝, MLOps 파이프라인 구축'},
    {org: '㈜페토바이오', role: 'AI Engineer Intern', period: '2024.07 – 2025.01', note: '수의사용 LLM/RAG 진단 서비스, 서버 및 DB 관리'},
    {org: 'LeverLock', role: '연구원', period: '2024.07 – 2024.10', note: '생산 설비 모니터링, 시계열 분석 및 이상 탐지'},
    {org: 'Genius Sports', role: '스포츠 통계 분석가', period: '2023.07 – 현재', note: '농구·축구 경기 데이터'},
  ],
  education: [
    {org: '경복대학교', role: '빅데이터과', period: '2023 – 2026'},
    {org: 'Ege University', role: '통계학 학사', period: '2009 – 2013'},
  ],
  certs: ['TOEIC 940', 'TOPIK 4급', 'Google Data Analytics Professional', 'IBM Data Analyst Professional'],
  skills: [
    {group: 'Computer Vision', items: ['YOLO', 'PyTorch', 'Person Re-ID (SOLIDER)', 'VLM (Qwen-VL)', 'SAM']},
    {group: 'MLOps', items: ['Prefect', 'MLflow', 'ONNX', 'Docker', 'FastAPI', 'Gradio']},
    {group: 'LLM', items: ['LangChain', 'RAG', 'FAISS', 'OpenAI API']},
    {group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Pandas', '시계열 / 이상 탐지']},
    {group: 'Frontend', items: ['JavaScript', 'Alpine.js', 'ECharts', 'Tailwind']},
    {group: 'BI', items: ['Power BI', 'Tableau', 'Excel']},
  ],
};

export default profile;
