# ديسيت — Deceit

موقع اللعبة، مبني بـ React + TypeScript + Tailwind (Vite).

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح الرابط اللي هيظهر في التيرمينال (عادة http://localhost:5173).

## البناء للنشر

```bash
npm run build
```

الملفات النهائية هتطلع في مجلد `dist`.

## أماكن التعديل السريعة (كلها في src/App.tsx)

- `ANDROID_LINK` / `IOS_LINK`: روابط التحميل. لما يجهز رابط الـ App Store، حط الرابط داخل `IOS_LINK` وهيتفعل الزر تلقائيًا بدل حالة "قريبًا".
- `SHADOW_ROLES` / `KINGDOM_ROLES` / `NEUTRAL_ROLES`: بيانات الشخصيات. كل عنصر فيه `icon` (حاليًا إيموجي مكانه صورة مؤقتة). لإضافة صورة حقيقية لاحقًا، عدّل مكوّن `CharacterCard` في `App.tsx` بحيث يعرض `<img src="..." />` بدل الإيموجي.
# Deceit_-
