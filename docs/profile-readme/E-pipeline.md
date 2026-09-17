<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&duration=3200&pause=1000&color=22D3EE&center=true&vCenter=true&width=700&lines=Yagiz+Furkan+Beyazit;MLOps+%26+Computer+Vision+Engineer;Statistician+turned+AI+engineer+%C2%B7+Seoul" alt="typing" />

<a href="https://furkanbeyazit.github.io"><img src="https://img.shields.io/badge/Portfolio-0b0e14?style=for-the-badge&logo=googlechrome&logoColor=22D3EE" alt="Portfolio"></a>
<a href="https://www.linkedin.com/in/furkanbyagiz/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://www.kaggle.com/veridisquoo"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle"></a>
<a href="mailto:furkanb.yagiz@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>

</div>

## About

I don't stop at a model that works in a notebook. At **Danusys** I built — alone — the full loop that keeps a field CCTV detector alive:

```
Event DB  →  VLM auto-label  →  human review  →  class balance  →  YOLO train  →  CCTV eval  →  ONNX registry
```

That line is my job description. Before it: LLM/RAG products at **Petobio**, time-series anomaly detection at **LeverLock**, match statistics at **Genius Sports**. Statistics BSc from Ege University, Big Data at Kyungbok University, TOPIK 4.

- 🔭 Building CCTV analytics models (YOLO, Person Re-ID, VLM) and the MLOps pipeline around them
- ⚙️ Obsessed with the "ops" part — reproducible runs, honest evaluation on real footage, models that survive deployment
- 💬 Ask me about VLM-assisted labelling, retraining loops, Re-ID search, RAG on internal documents
- 🌐 EN · KR · TR

## What I work on

<table>
<tr>
<td valign="top" width="50%">

**Computer Vision**
- YOLO detection: training, fine-tuning, field evaluation
- Person Re-ID with SOLIDER embeddings, cross-camera search
- VLM (Qwen-VL) as a labeller and as an event reporter
- SAM-assisted bbox correction in review tools

</td>
<td valign="top" width="50%">

**MLOps**
- Prefect flows with human checkpoints (review, balance)
- MLflow experiment tracking, ONNX export, model registry
- FastAPI services + Gradio/Alpine.js internal tools
- Docker deployment, Windows field packaging

</td>
</tr>
<tr>
<td valign="top" width="50%">

**LLM**
- RAG over course / product documents (LangChain, FAISS)
- Structured generation (quiz creation from PDFs, GPT-4o)
- LLM ↔ VMS ↔ VLM bridging over SSE

</td>
<td valign="top" width="50%">

**Data & Analytics**
- PostgreSQL / MySQL / MongoDB, Pandas
- Time-series monitoring and anomaly detection
- Dashboards & reports: ECharts, Power BI, Tableau, Excel automation

</td>
</tr>
</table>

## Projects

| Project | Outcome | Built with |
|---|---|---|
| **MLOps Retraining Platform** | One dashboard runs the whole retraining loop; two human checkpoints, everything else automatic | YOLO · Qwen-VL · SAM · Prefect · MLflow · FastAPI · PostgreSQL · ONNX |
| **Person Re-ID Search** | "Where else was this person seen?" — cosine search over 1024-d embeddings across cameras and days | PyTorch · SOLIDER · FastAPI · PostgreSQL |
| **Model Eval Platform** | Three checkpoints side by side on real field footage, per-image TP/FP/FN, 12-sheet Excel export | Ultralytics · FastAPI · Gradio |
| **Security Analytics Dashboard** | TP/FP analysis, operator & server stats, monthly reports, VLM-written event summaries | FastAPI · PostgreSQL · Alpine.js · ECharts |
| **Video Summary Platform** | Timeline + bbox overlay + object tracks + cross-camera person linking for a VLM video backend | ES Modules · HLS · ffmpeg |
| **VLM-Gate** | Dockerised SSE bridge between an LLM, the VMS and a VLM | FastAPI · SSE · Docker |
| **AI Educational Suite** *(2024–25)* | Quiz generation from course PDFs + RAG school assistant | GPT-4o · LangChain · FAISS · FastAPI · MongoDB |

<sub>Danusys projects are internal — no source here. Architecture walk-throughs on request; details on the <a href="https://furkanbeyazit.github.io">portfolio</a>.</sub>

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
![OpenAI](https://img.shields.io/badge/OpenAI%20API-412991?style=flat-square&logo=openai&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black)
![ECharts](https://img.shields.io/badge/ECharts-AA344D?style=flat-square&logo=apacheecharts&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?style=flat-square&logo=r&logoColor=white)

<div align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=FurkanBeyazit&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" alt="stats" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=FurkanBeyazit&layout=compact&theme=tokyonight&hide_border=true" alt="langs" />
</div>
