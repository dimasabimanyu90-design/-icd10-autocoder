# ICD-10 Auto Coder
**Created by Dimas Abimanyu · Powered by Google Gemini AI**

Aplikasi auto coding ICD-10 2nd Edition 2005 + ICD-9-CM Vol.3 berbasis AI.
**100% Gratis — Pakai Google Gemini API (no credit card!)**

---

## 🔑 Langkah 1 — Dapat API Key Gratis
1. Buka [aistudio.google.com](https://aistudio.google.com)
2. Login pakai akun Google biasa
3. Klik **"Get API Key"** → **"Create API key"**
4. Copy API key-nya

---

## 🚀 Langkah 2 — Deploy ke Netlify (Gratis)
1. Buka [netlify.com](https://netlify.com) → Login / daftar gratis
2. Klik **"Add new site"** → **"Deploy manually"**
3. **Drag & drop folder `icd10-app`** ke halaman Netlify
4. Tunggu deploy selesai

---

## ⚙️ Langkah 3 — Set API Key di Netlify
1. Di dashboard Netlify → klik site kamu
2. **Site configuration** → **Environment variables**
3. Klik **"Add a variable"**
   - Key: `GEMINI_API_KEY`
   - Value: API key dari Google AI Studio
4. Klik **Save**

---

## 🔄 Langkah 4 — Redeploy
1. Tab **Deploys** → **"Trigger deploy"** → **"Deploy site"**
2. Selesai! App sudah online 🎉

---

## 📁 Struktur File
```
icd10-app/
├── index.html                  ← Aplikasi utama
├── netlify.toml                ← Konfigurasi Netlify
├── netlify/
│   └── functions/
│       └── claude.js           ← Backend proxy (simpan API key)
└── README.md                   ← Panduan ini
```

---

## ✅ Kenapa Gratis Selamanya?
- Google Gemini API free tier: 1.500 request/hari, 1 juta token/menit
- Netlify free tier: 125.000 function calls/bulan
- Tidak perlu credit card sama sekali!
