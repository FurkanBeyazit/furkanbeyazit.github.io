<!-- C wave header + typing + E pipeline line + D project table + stats -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:06b6d4&height=180&section=header&text=Furkan%20Beyazit&fontSize=54&fontColor=ffffff&animation=fadeIn&desc=MLOps%20%C2%B7%20Computer%20Vision%20%C2%B7%20Seoul&descAlignY=70&descSize=18" width="100%" alt="header" />

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=20&duration=3200&pause=1200&color=A78BFA&center=true&vCenter=true&width=640&lines=Building+CCTV+analytics+models+at+Danusys;VLM+auto-labelling+%E2%86%92+YOLO+retraining+%E2%86%92+ONNX;Person+Re-ID+search+across+cameras" alt="typing" />
</p>

<p align="center">
  <a href="https://furkanbeyazit.github.io"><img src="https://img.shields.io/badge/Portfolio-7c3aed?style=for-the-badge&logo=googlechrome&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/furkanbyagiz/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://www.kaggle.com/veridisquoo"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white"></a>
  <a href="mailto:furkanb.yagiz@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white"></a>
</p>

## About

Statistician turned AI engineer. At **Danusys** I built — alone — the full loop that keeps a field CCTV detector alive:

```
Event DB  →  VLM auto-label  →  human review  →  class balance  →  YOLO train  →  CCTV eval  →  ONNX registry
```

Before it: LLM/RAG products at **Petobio**, time-series anomaly detection at **LeverLock**, match statistics at **Genius Sports**. Statistics BSc (Ege University), Big Data (Kyungbok University), TOPIK 4 · TOEIC 940.

## What I've built

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

## Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![YOLO](https://img.shields.io/badge/YOLO-111?style=flat-square&logoColor=00FFFF)
![Qwen-VL](https://img.shields.io/badge/Qwen--VL-7c3aed?style=flat-square)
![SAM](https://img.shields.io/badge/SAM-7c3aed?style=flat-square)
![Prefect](https://img.shields.io/badge/Prefect-070E10?style=flat-square&logo=prefect&logoColor=white)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white)
![ONNX](https://img.shields.io/badge/ONNX-005CED?style=flat-square&logo=onnx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-F97316?style=flat-square)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![FAISS](https://img.shields.io/badge/FAISS-7c3aed?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black)
![ECharts](https://img.shields.io/badge/ECharts-AA344D?style=flat-square&logo=apacheecharts&logoColor=white)
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=FurkanBeyazit&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" alt="stats" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=FurkanBeyazit&layout=compact&theme=tokyonight&hide_border=true" alt="langs" />
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:7c3aed&height=100&section=footer" width="100%" alt="footer" />
