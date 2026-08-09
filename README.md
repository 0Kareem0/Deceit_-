# 🎭 ديسيت — Deceit

<div align="center">

**لعبة خداع اجتماعي جماعية**

موقع اللعبة الرسمي، مبني بـ React + TypeScript + Tailwind CSS

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.2.1-646cff?logo=vite)](https://vitejs.dev/)

</div>

---

## 🌟 نظرة عامة

ديسيت هي لعبة خداع اجتماعي جماعية تقع في مملكة مظلومة يتربص بها الظلال. اللعبة تجمع اللاعبين كل ليلة تحت غطاء الخداع، حيث يحمي البعض ويقتل البعض الآخر، والجميع يكذب.

### 🎯 المميزات

- 👑 **فريقان متصارعان**: المملكة والظلال، كل فريق له أهدافه وقدراته الخاصة
- 🌑 **قدرات متنوعة**: ٨ قدرات للظلال وقدرات متعددة للمملكة
- 🌙 **دورة ليل ونهار**: نظام لعب فريد يقوم على التبديل بين الليل والنهار
- 🎨 **تصميم مذهل**: واجهة مستخدم جميلة مع رسوم متحركة سلسة
- 📱 **متجاوب**: يعمل على جميع الأجهزة والشاشات
- 🌐 **لغة عربية**: واجهة كاملة باللغة العربية مع خطوط عربية مخصصة

---

## 🚀 التقنيات المستخدمة

- **React 18.3.1** - مكتبة واجهة المستخدم
- **TypeScript 5.5.3** - للكتابة الآمنة والموثوقة
- **Vite 8.2.1** - لبناء سريع وتطوير فوري
- **Tailwind CSS 3.4.4** - لتصميم سريع ومتجاوب
- **Lucide React** - أيقونات حديثة وأنيقة

---

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18 أو أحدث
- npm أو yarn أو pnpm

### الخطوات

1. **استنساخ المستودع**
```bash
git clone https://github.com/0Kareem0/Deceit_-.git
cd Deceit_-
```

2. **تثبيت الحزم**
```bash
npm install
```

3. **تشغيل خادم التطوير**
```bash
npm run dev
```

افتح الرابط الذي سيظهر في التيرمينال (عادة `http://localhost:5173`)

---

## 🏗️ البناء للنشر

```bash
npm run build
```

الملفات النهائية ستكون في مجلد `dist` جاهزة للنشر على أي استضافة.

---

## 📁 هيكل المشروع

```
deceit-site/
├── public/                 # الملفات الثابتة (الصور، الأيقونات)
├── src/
│   ├── components/        # المكوّنات
│   │   ├── ui/           # مكوّنات واجهة المستخدم الأساسية
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── DownloadButtons.tsx
│   │   │   ├── Eyebrow.tsx
│   │   │   ├── Reveal.tsx
│   │   │   └── Starfield.tsx
│   │   └── sections/     # أقسام الصفحة
│   │       ├── About.tsx
│   │       ├── BackgroundEffects.tsx
│   │       ├── Cycle.tsx
│   │       ├── Footer.tsx
│   │       ├── Goals.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Interactions.tsx
│   │       └── Roles.tsx
│   ├── data/            # بيانات اللعبة
│   │   └── gameData.ts  # الشخصيات والقدرات
│   ├── hooks/           # خطافات React مخصصة
│   │   ├── useReveal.ts
│   │   └── useScrollProgress.ts
│   ├── App.tsx          # المكوّن الرئيسي
│   ├── main.tsx         # نقطة الدخول
│   └── index.css        # الأنماط العامة
├── index.html           # ملف HTML الرئيسي
├── package.json         # تبعيات المشروع
├── tailwind.config.js   # إعدادات Tailwind
├── tsconfig.json        # إعدادات TypeScript
└── vite.config.ts       # إعدادات Vite
```

---

## ⚙️ التخصيص

### تغيير روابط التحميل

عدّل الملف `src/data/gameData.ts`:

```typescript
export const ANDROID_LINK = "رابط_أندرويد_الخاص_بك";
export const IOS_LINK = "رابط_iOS_الخاص_بك"; // أو null إذا لم يكن متوفراً
```

### إضافة شخصيات جديدة

عدّل المصفوفات في `src/data/gameData.ts`:

```typescript
export const SHADOW_ROLES: Role[] = [
  { 
    icon: "🎭", 
    name: "اسم الشخصية", 
    desc: "وصف الشخصية",
    image: "/path/to/image.png" // اختياري
  },
  // ... المزيد من الشخصيات
];
```

### تخصيص الألوان

يمكنك تعديل الألوان في المكوّنات الفردية في مجلد `src/components/` لتغيير الألوان حسب الفصائل (المملكة والظلال).

---

## 🎨 المميزات التقنية

### 🎬 الرسوم المتحركة
- **Reveal Animation**: تأثيرات ظهور سلسة عند التمرير
- **Hover Effects**: تأثيرات تفاعلية عند تمرير الماوس
- **Smooth Transitions**: انتقالات ناعمة بين الحالات
- **Scale Effects**: تأثيرات تكبير/تصغير احترافية

### 🎯 المكوّنات القابلة لإعادة الاستخدام
- **CharacterCard**: بطاقة شخصية مع صورة ومعلومات
- **DownloadButtons**: أزرار تحميل متجاوبة
- **Starfield**: خلفية نجوم متحركة
- **Reveal**: مكوّن ظهور عند التمرير

### 🔧 الخطافات المخصصة
- **useReveal**: للكشف عند التمرير
- **useScrollProgress**: لتتبع تقدم التمرير

---

## 🌐 النشر

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

### GitHub Pages
```bash
npm run build
# ارفع مجلد dist إلى gh-pages branch
```

---

## 🤝 المساهمة

المساهمات مرحب بها! يمكنك المساهمة عن طريق:

1. عمل Fork للمشروع
2. إنشاء branch للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. عمل Commit للتغييرات (`git commit -m 'Add some AmazingFeature'`)
4. عمل Push إلى Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف LICENSE للتفاصيل.

---

## 🙏 شكر وتقدير

- **React Team** - لمكتبة React الرائعة
- **Tailwind CSS** - لإطار العمل الممتاز
- **Vite** - لأداة البناء السريعة
- **Lucide** - للأيقونات الجميلة

---

<div align="center">

**صُنع بـ ❤️ باستخدام React و TypeScript**

[⬆ العودة للأعلى](#-ديسيت--deceit)

</div>
