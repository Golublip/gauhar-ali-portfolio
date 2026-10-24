# Gauhar Ali — Cardiac Perfusion Technology & Clinical AI Portfolio

A bespoke, clinical-grade streaming-series portfolio website for **Gauhar Ali**, a first-year **B.Sc. (Hons) Cardiac Perfusion Technology** undergraduate at MNR University, Hyderabad, India.

---

## 🩺 Design Direction & Concept

* **Metaphor & Theme**: The portfolio is structured around the **extracorporeal circulation loop** and the **heart-lung machine (HLM)** used during cardiopulmonary bypass (CPB) surgery, combined with an episodic **streaming-series architecture** (Episodes, Originals, Seasons, Protocols, Vitals, Finale).
* **Clinical Color Palette**:
  * **Deep Navy Background**: `#0d1620` (Dark Mode Default) / Soft Slate (`#f8fafc`) in Light Mode
  * **Arterial Red Accent**: `#e03a3e` (Oxygenated bloodline)
  * **Venous Blue Secondary**: `#5b7fa6` (Deoxygenated inflow)
  * **Warm Off-White**: `#f7f8f9`
* **Typography**:
  * Headings: **Bricolage Grotesque** (expressive, rhythmic, authoritative)
  * Body: **Instrument Sans** (crisp, readable, clinical clarity)
  * Telemetry / Accents: **JetBrains Mono**
* **Signature Moment**: An authentic P-Q-R-S-T **ECG cardiac waveform** that dynamically draws itself directly beneath Gauhar's name on initial page load, respecting `prefers-reduced-motion`.
* **Zero Generic Grids**: Handcrafted perfusion telemetry ribbon, episodic swipe dossier, interactive modal dialogs, and timeline circuits.

---

## 🛠️ Tech Stack

* **Framework**: React 18 + TypeScript + Vite
* **Styling**: Tailwind CSS (with bespoke perfusion theme tokens & dark/light mode following system settings)
* **Animation**: Framer Motion (minimal, intentional, reduced-motion compliant)
* **Icons**: Lucide React
* **Single Source of Truth**: All data and content live exclusively in `src/data/portfolio.ts`.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Open your terminal in the project directory and install dependencies:

```bash
npm install
```

*(On Windows PowerShell with strict execution policies, run `npm.cmd install`)*

### 3. Run Development Server
Start the local Vite dev server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 4. Build for Production
To typecheck and build optimized static assets:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory.

---

## 📝 How to Edit Portfolio Content

Every piece of text, project description, educational timeline item, certification, and skill chip is managed from **a single file**:

📍 **`src/data/portfolio.ts`**

No need to modify component code to update your details.

### Profile & Bio
Edit the `profile` object in `src/data/portfolio.ts`:
```typescript
profile: {
  fullName: "Gauhar Ali",
  headline: "Cardiac Perfusion Technology | Healthcare | Clinical Research...",
  firstLineIntro: "...",
  secondLineIntro: "...",
  email: "gauharali5550@gmail.com",
  linkedinUrl: "https://linkedin.com/in/gauharali5550",
  githubUrl: "https://github.com/Golublip",
  ...
}
```

### Adding or Updating Projects (Originals)
Edit the `projects` array in `src/data/portfolio.ts`. Each project supports:
- `title`, `episodeTag`, `category`, `role`, `year`
- `shortPitch` (card preview) and `fullDescription` (dialog synopsis)
- `techStack`, `highlights`, and `links`
- Clear `TODO:` tags where URLs or verification IDs are pending.

### Adding Journey Milestones (Seasons)
Edit the `seasons` array in `src/data/portfolio.ts`. Items are ordered newest first (e.g. YuvaIntern 2026, MNR University B.Sc. Perfusion 2025–29, Intermediate BiPC 2025, SSC 2021).

### Accreditations & Leadership (Protocols)
Edit the `leadership`, `conferences`, and `certifications` arrays.

---

## 📸 How to Replace Your Photo & CV

### Replacing Your Photo
1. Place your new portrait image at:
   `public/photo.jpg`
2. **Recommended framing**: A portrait ratio of 4:5 (e.g., 600×750px or 508×635px), cropped chest-up with a clean background.
3. Keep the filename as `photo.jpg` (or update `photoUrl` in `src/data/portfolio.ts`).

### Updating Your CV
1. Replace the file at:
   `public/cv.pdf`
2. The "Download CV" buttons across the header, hero, and footer will automatically serve your updated document.

---

## 📋 Comprehensive List of TODOs Left for Verification

Facts in this portfolio are strictly drawn from **Gauhar Ali Master CV v1**. Items explicitly requested that were not present in the Master CV have been retained with clear `TODO:` markers to avoid inventing facts:

1. **Perfusync & The Vital Sign AI Link**:
   * `TODO: Add live newsletter / Substack / LinkedIn URL (not present in Master CV v1)`
2. **Memora AI Repository Link**:
   * `TODO: Add dedicated public GitHub repository link for Memora AI (points to profile https://github.com/Golublip)`
3. **Classiq Quantum Challenge Submission**:
   * `TODO: Add Classiq challenge submission notebook or repository URL (not itemized in Master CV v1)`
4. **Clinical Research Portfolio Dossier Link**:
   * `TODO: Add link to the published clinical research portfolio or challenge submission PDF (not itemized in Master CV v1)`
5. **YuvaIntern Certificate**:
   * `TODO: Add YuvaIntern certificate verification link if available`
6. **Intermediate Grades**:
   * `TODO: Add Intermediate percentage / grade if desired (omitted in Master CV v1)`
7. **AmSECT Student Membership**:
   * `TODO: Add AmSECT Membership ID and membership term (requested in brief; pending verification record)`
8. **Lean Six Sigma AI Yellow Belt**:
   * `TODO: Add issuing organization and credential ID (requested in brief; pending verification record)`
9. **Phone Contact**:
   * `TODO: Add contact phone number if required for public display (omitted in Master CV v1)`

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended — 2 Minutes)

1. Push this project to your GitHub account (`github.com/Golublip/gauhar-ali-portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select `gauhar-ali-portfolio`.
4. Vercel automatically detects **Vite**:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio is live with instant SSL and global CDN!

### Option 2: Deploy to GitHub Pages

1. In `vite.config.ts`, add the base repository path:
   ```typescript
   export default defineConfig({
     base: '/gauhar-ali-portfolio/', // replace with your repository name
     plugins: [react()],
   })
   ```
2. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
3. In `package.json`, add deployment scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings under **Pages**, set the source branch to `gh-pages`.
