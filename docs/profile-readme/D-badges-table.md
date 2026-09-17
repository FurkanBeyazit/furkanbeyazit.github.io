<h1 align="center">Hi 안녕하세요 👋 I'm Furkan</h1>
<h3 align="center">MLOps & Computer Vision Engineer · Seoul, Korea</h3>

<p align="center">
  <a href="https://furkanbeyazit.github.io"><img src="https://img.shields.io/badge/portfolio-furkanbeyazit.github.io-7c3aed?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio"></a>
  <a href="https://www.linkedin.com/in/furkanbyagiz/"><img src="https://img.shields.io/badge/LinkedIn-furkanbyagiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://www.kaggle.com/veridisquoo"><img src="https://img.shields.io/badge/Kaggle-veridisquoo-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle"></a>
  <a href="mailto:furkanb.yagiz@gmail.com"><img src="https://img.shields.io/badge/Email-furkanb.yagiz-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
</p>

Statistician turned AI engineer. I build the boring-but-critical parts of computer vision systems: auto-labelling, retraining pipelines, evaluation, and deployment — and I like shipping them as tools other people actually use.

- 🔭 **Now:** Researcher at **Danusys** — CCTV analytics models (YOLO, Re-ID, VLM) and the MLOps pipeline around them
- 🧠 **Before:** LLM/RAG products (Petobio), time-series anomaly detection (LeverLock), sports statistics (Genius Sports)
- 🎓 Statistics BSc (Ege University) · Big Data (Kyungbok University) · TOPIK 4 · TOEIC 940
- 💬 Ask me about: VLM-assisted labelling, YOLO retraining loops, Person Re-ID, RAG on internal docs
- 🌐 EN · KR · TR

## 🛠 What I've built

| Project | What it does | Stack |
|---|---|---|
| **MLOps Retraining Platform** | Event DB → two-stage VLM auto-label → human review → class balancing → YOLO training → CCTV eval → ONNX + model registry, all from one dashboard | YOLO · Qwen-VL · SAM · Prefect · MLflow · FastAPI · PostgreSQL |
| **Person Re-ID Search** | 1024-d SOLIDER embeddings for every person detection; "where else was this person seen?" across cameras and days | PyTorch · SOLIDER · FastAPI · PostgreSQL |
| **Security Analytics Dashboard** | TP/FP analysis, operator/server breakdowns, monthly reports and VLM-written event summaries over CCTV event tables | FastAPI · Alpine.js · ECharts · PostgreSQL |
| **Model Eval Platform** | Compare up to three YOLO checkpoints on real field CCTV sets, per-image TP/FP/FN, 12-sheet Excel export | Ultralytics · FastAPI · Gradio |
| **Video Summary Platform** | Web UI for a VLM video-analysis backend: timeline, bbox overlay, object tracks, cross-camera Re-ID linking | ES Modules · HLS · ffmpeg |
| **VLM-Gate** | Dockerised SSE bridge between an LLM, the VMS and a VLM | FastAPI · SSE · Docker |
| **AI Educational Suite** | Quiz generation from PDF/DOCX (GPT-4o + LangChain) and a RAG school assistant (FAISS) | LangChain · FAISS · FastAPI · MongoDB |

> Danusys projects are internal — no source here, but I'm happy to walk through the architecture. Details on the [portfolio](https://furkanbeyazit.github.io).

## 🧰 Tech stack

**Computer Vision** &nbsp;
![YOLO](https://img.shields.io/badge/YOLO-111?style=flat-square&logo=yolo&logoColor=00FFFF)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Re-ID](https://img.shields.io/badge/Person%20Re--ID-7c3aed?style=flat-square)
![VLM](https://img.shields.io/badge/VLM%20(Qwen--VL)-7c3aed?style=flat-square)
![SAM](https://img.shields.io/badge/SAM-7c3aed?style=flat-square)

**MLOps** &nbsp;
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white)
![Prefect](https://img.shields.io/badge/Prefect-070E10?style=flat-square&logo=prefect&logoColor=white)
![ONNX](https://img.shields.io/badge/ONNX-005CED?style=flat-square&logo=onnx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-F97316?style=flat-square&logoColor=white)

**LLM** &nbsp;
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI%20API-412991?style=flat-square&logo=openai&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-7c3aed?style=flat-square)
![FAISS](https://img.shields.io/badge/FAISS-7c3aed?style=flat-square)

**Data** &nbsp;
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)

**Frontend** &nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black)
![ECharts](https://img.shields.io/badge/ECharts-AA344D?style=flat-square&logo=apacheecharts&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## 📊 GitHub

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=FurkanBeyazit&show_icons=true&theme=tokyonight&hide_border=true&hide_title=true" alt="stats">
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=FurkanBeyazit&layout=compact&theme=tokyonight&hide_border=true" alt="top languages">
</p>

<p align="center"><i>Open to MLOps / computer vision / AI engineering roles.</i></p>
