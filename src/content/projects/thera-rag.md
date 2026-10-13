---
title: "Thera-RAG"
pitch: "A chatbot that answers thrombosis treatment questions from clinical guidelines and shows the page it got each answer from."
summary: "A clinical RAG chatbot for thrombosis guidelines where every answer cites its source page. Preferred by specialists in 85% of blinded evaluations."
when: "2025"
with: "University Health Network"
stack: ["Docling", "LangGraph", "Pinecone", "Gemini 2.5 Pro"]
status: "Paper under review"
stats:
  - { value: "85%", label: "preferred over baseline" }
  - { value: "8", label: "specialist physicians" }
  - { value: "115", label: "blinded evaluations" }
order: 2
todo: "ResumeRepo marks these figures needs-confirmation. Check 85% / 8 / 115 and the year."
---

## The problem

Doctors won't trust an answer they can't check. A clinical chatbot has to show where every claim came from, down to the guideline page.

## What I built

A retrieval pipeline that keeps page-level provenance from start to finish: Docling to parse guideline PDFs and their tables, citation-aware chunking, E5 embeddings in Pinecone, and Gemini for generation. Then a blinded evaluation platform to test it against specialists.
