# 📊 Insight Intelligence Web App – Build Prompt (MVP)

You are a **senior full-stack engineer and product-focused UI developer**.

Your task is to build a **static insight-filtering web application** that demonstrates how large volumes of business insights about well-known companies can be **curated, filtered, and explored** by users such as sales professionals, founders, consultants, and executives.

This is an **MVP / mock product**, not a production backend system.

---

## 1️⃣ Product Context (READ CAREFULLY)

### What this app is NOT

- ❌ Not a news aggregator
- ❌ Not a simple summarization UI
- ❌ Not real-time scraping

### What this app IS

- ✅ An **Insight Intelligence & Filtering platform**
- ✅ Focused on **decision-making, conversations, and strategy**
- ✅ Built around **pre-curated insight datasets**
- ✅ Designed to show how _hundreds of insights_ can be filtered meaningfully

The core value:

> “Help users quickly find the **most relevant insights** for a specific company, role, time horizon, and business concern.”

---

## 2️⃣ Data Source (VERY IMPORTANT)

You will be given **local JSON files** that act as the internal insight store.

Examples (already provided):

- `tesla_insights.json`
- `microsoft_insights.json`
- `openai_insights.json`
- `boeing.json`

### Data Characteristics

Each file contains:

- A company name
- A list of **deep, structured insights**
- Each insight includes fields such as:
  - `headline`
  - `source`
  - `keyInsight`
  - `talkingPoint`
  - `strategicBin`
  - `impactLevel`
  - `timeHorizon`
  - `roles`
  - `tags`
  - `confidence`
  - `relatedInsights`

⚠️ Treat these files as **truth**.  
Do NOT generate fake insights.  
Do NOT modify insight content — only **display, filter, and organize**.

---

## 3️⃣ Core Functional Requirements

### A. Company Selection

- Allow users to switch between companies (Tesla, Microsoft, OpenAI, Boeing, etc.)
- Company selection updates all insights on screen

### B. Insight Filtering (CRITICAL FEATURE)

Users must be able to filter insights using **multiple bins**:

#### Required Filters

- Strategic Bin  
  (e.g. Growth, Risk, Regulation, AI Strategy, Operations, Financials)
- Impact Level  
  (High / Medium / Low)
- Time Horizon  
  (Short / Mid / Long term)
- Role / Persona  
  (CEO, CFO, CTO, Sales, Strategy, Product, Compliance)
- Tags (multi-select)

Filters should:

- Be combinable
- Update results instantly (client-side filtering)

---

## 4️⃣ Insight Card Design (CORE UX)

Each insight should be displayed as a **card** with:

- Headline (primary)
- Strategic bin badge
- Impact level indicator
- Time horizon label
- Key insight text (concise but readable)
- Expandable section for:
  - Talking point
  - Source
  - Confidence
  - Related insights (if any)

Design goal:

> One insight = one **conversation starter**

---

## 5️⃣ UI & DESIGN REQUIREMENTS

### UI Reference

You will be shown an **image of the UI** that must be followed closely.

Instructions:

- Match layout, spacing, and hierarchy
- Do NOT redesign from scratch
- Adapt it to the insight content logically

### Tech Stack (MANDATORY)

- React (Vite or CRA)
- npm
- Tailwind CSS
- No backend required
- No authentication
- No persistence needed

---

## 6️⃣ Product Thinking Enhancements (IMPORTANT)

Apply these improvements explicitly:

### A. Insight Density

- Design UI assuming **50–200 insights per company**
- Scrolling, filtering, and grouping must feel usable

### B. Insight Curation (NOT ranking)

- Do NOT auto-rank insights
- Let users decide relevance through filters

### C. Persona-Driven Thinking

- Make it obvious _who should care_ about each insight
- Highlight roles visually (icons or labels)

### D. Customer POV

This app should feel useful to:

- A sales rep preparing for a meeting
- A consultant doing quick industry research
- A founder tracking competitor signals

---

## 7️⃣ File Structure Expectation

Suggested structure (you may improve):

src/
├─ data/
│ ├─ tesla_insights.json
│ ├─ microsoft_insights.json
│ ├─ openai_insights.json
│ └─ boeing.json
├─ components/
│ ├─ InsightCard.jsx
│ ├─ Filters.jsx
│ ├─ CompanySelector.jsx
├─ pages/
│ └─ Dashboard.jsx
├─ App.jsx
└─ main.jsx

---

## 8️⃣ Output Expectations

You must output:

1. Complete React + Tailwind code
2. Clear instructions to run locally
3. Components that are readable and well-structured
4. UI that demonstrates **filter-driven insight discovery**

Do NOT:

- Add backend APIs
- Add authentication
- Add databases
- Overengineer state management

---

## 9️⃣ Evaluation Criteria (BUILD FOR THIS)

Your output will be judged on:

- Clarity of insight presentation
- Quality of filtering UX
- Product realism
- Alignment with decision-making use cases
- Clean, understandable code

---

## 🔚 Final Reminder

This is a **product storytelling MVP**, not an engineering exercise.

Build something that makes the reviewer say:

> “I can clearly see how this would help someone prepare better conversations and decisions.”

Now build the web app accordingly.
