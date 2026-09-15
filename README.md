# 🎭 ديسيت — Deceit Online

<div align="center">

  <h1>🌐 <a href="https://deceit.online">deceit.online</a></h1>

  <p><b>الموقع الرسمي للعبة الخداع الاجتماعي والأدوار المخفية — Deceit Official Website</b></p>

  <p>
    <a href="https://deceit.online"><img src="https://img.shields.io/badge/Website-deceit.online-e11d48?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website deceit.online" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-7.3.6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://www.i18next.com/"><img src="https://img.shields.io/badge/i18n-Arabic_%26_English-26A69A?style=for-the-badge&logo=translate&logoColor=white" alt="i18n" /></a>
  </p>

</div>

---

## 🔗 الرابط الرسمي | Official Live Site

موقع اللعبة متاح ومباشر الآن عبر الرابط:  
👉 **[https://deceit.online](https://deceit.online)** 👈

---

## 🌟 Overview | نظرة عامة

**ديسيت (Deceit)** هي لعبة خداع اجتماعي جماعية تقع في عالم مظلم يتربص به الظلال. تجمع اللعبة اللاعبين كل ليلة تحت غطاء الخداع والاستنتاج؛ حيث يحمي أعضاء المملكة العرش، بينما يتسلل أتباع الظلال للتصفية والاغتيال في الخفاء.

---

## ✨ Features | المميزات الرئيسية

- 🌐 **الموقع الرسمي**: متوفر مباشرة على **[deceit.online](https://deceit.online)**.
- 👑 **فريقان متصارعان (Kingdom vs. Shadows)**: 
  - **المملكة (The Kingdom)**: الحكام، الحراس، والأطباء الذين يدافعون عن الشرعية.
  - **الظلال (The Shadows)**: القتلة والمخادعون الذين يعملون في الخفاء.
- 🌑 **بطاقات وقدرات مخصصة**: تفاصيل شاملة لجميع الشخصيات وقدراتها الخاصة في الليل والنهار.
- 🌙 **دورة ليل ونهار تفاعلية**: شرح ديناميكي لمراحل اللعب والتكتيكات المطلوبة لكل مرحلة.
- 🌍 **دعم لغوي كامل (Multi-Language i18n)**:
  - دعم كامل للغة العربية (RTL) واللغة الإنجليزية (LTR).
  - تبديل سلس بين اللغات مع حفظ التفضيلات.
- 🎨 **واجهة مستخدم مظلمة وجميلة**: تصميم قوطي ساحر مع مؤثرات بصريات متقدمة ورسوم متحركة سلسة.
- 📱 **تجاوب كامل (Fully Responsive)**: تجربة تصفح مثالية على الهواتف، الأجهزة اللوحية، وأجهزة الكمبيوتر.

---

## 🛠️ Tech Stack | التقنيات المستخدمة

- **Frontend Framework**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Gothic CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Localization**: [i18next](https://www.i18next.com/) & `react-i18next`
- **Analytics**: `@vercel/analytics`

---

## 📂 Project Structure | هيكل المشروع

```text
deceit-site/
├── public/                 # Static assets & images
│   └── logo.jpg
├── src/
│   ├── components/         # UI & Page components
│   │   ├── pages/          # Full pages (CharacterDetail, PrivacyPolicy, NotFound, AppAds)
│   │   ├── sections/       # Landing page sections (Hero, About, Roles, Cycle, Goals, Footer, etc.)
│   │   └── ui/             # Reusable UI elements
│   ├── data/               # Roles and game cards dataset
│   ├── hooks/              # Custom React hooks
│   ├── locales/            # Translation files (ar.json, en.json)
│   ├── i18n.ts             # Internationalization setup
│   ├── App.tsx             # Main App Router & Layout
│   └── main.tsx            # Application Entry Point
├── index.html              # Main HTML Document & SEO Meta tags
├── package.json            # Dependencies & Scripts
├── tailwind.config.js      # Tailwind Configuration
└── vite.config.ts          # Vite Configuration
```

---

## 🚀 Getting Started | التشغيل والتطوير المحلي

### Prerequisites | المتطلبات الأساسية
- **Node.js**: v18.0.0 أو أحدث
- **npm** أو **yarn** / **pnpm**

### Installation Steps | خطوات التثبيت

1. **استنسخ المستودع (Clone the Repository)**:
   ```bash
   git clone https://github.com/0Kareem0/Deceit_-.git
   cd Deceit_-
   ```

2. **تثبيت الحزم (Install Dependencies)**:
   ```bash
   npm install
   ```

3. **تشغيل خادم التطوير (Run Development Server)**:
   ```bash
   npm run dev
   ```
   افتح المتصفح على `http://localhost:5173` لمشاهدة الموقع.

4. **بناء النسخة النهائية (Build for Production)**:
   ```bash
   npm run build
   ```

5. **معاينة البناء (Preview Production Build)**:
   ```bash
   npm run preview
   ```

---

## 🤝 Contributing | المساهمة

المساهمات والتحسينات مرحب بها دائماً!  
إذا كنت ترغب في تحسين الموقع أو إضافة ميزات جديدة:

1. قم بعمل **Fork** للمشروع.
2. أنشئ فرعاً مخصصاً لـ Feature جديدة:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. قم بحفظ التغييرات:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. ارفع الفرع إلى المستودع:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. افتح **Pull Request**.

---

## 📄 License | الترخيص

هذا المشروع مرخص تحت رخصة **MIT License** — انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

<div align="center">

🌐 **الموقع الرسمي**: [deceit.online](https://deceit.online)  
**صُنع بـ ❤️ بواسطة فريق ديسيت**

[⬆ العودة للأعلى](#-ديسيت--deceit-online)

</div>

