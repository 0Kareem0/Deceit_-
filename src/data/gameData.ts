export const ANDROID_LINK =
  "https://drive.google.com/file/d/1_eCu4wxU6cSfPPScbB_Kr7A6izxLCBRn/view?usp=sharing";
export const ANDROID_DIRECT_LINK = "/ديسيت.apk";
export const IOS_LINK: string | null = null; // ضع رابط الـ App Store هنا عندما يتوفر

export type Role = { icon: string; name: string; desc: string; image?: string };
export type Character = Role & { faction: string; color: string };

export const SHADOW_ROLES: Role[] = [
  { icon: "👑", name: "قائد الظلال", desc: "يقترح هدف الليلة الرئيسي، ويوجّه بقية الظلال نحو الفريسة المناسبة. دوره قيادي ويساعد الفريق على التنسيق.", image: "/cards/deset_shadow_leader.webp" },
  { icon: "🗡️", name: "القاتل", desc: "يملك القرار الأخير في تنفيذ عملية القتل الرئيسية لتلك الليلة. هو المسؤول النهائي عن القتل.", image: "/cards/deset_assassin.webp" },
  { icon: "🕵️", name: "الجاسوس", desc: "يراقب لاعبًا بعينه، ويكشف كل من تفاعل معه أثناء الليل. يساعد في معرفة من يتحرك واللاعبين النشطين.", image: "/cards/deset_spy.webp" },
  { icon: "☠️", name: "السامّ", desc: "يسمّم أحد اللاعبين، فيموت لاحقًا إن لم يُعالَج في الوقت المناسب. سمّه يعمل ببطء، مما يجعله قاتلاً مخادعًا.", image: "/cards/deset_poisoner.webp" },
  { icon: "🔧", name: "المخرّب", desc: "يعطّل قدرة لاعب آخر، فيمنعه من استخدامها في تلك الليلة. ممتاز لإيقاف الحماية أو التحقيق.", image: "/cards/deset_saboteur.webp" },
  { icon: "🎭", name: "المزوّر", desc: "يشوّه نتائج التحقيقات، فيقلب الحقيقة رأسًا على عقب. يجعل المحققين يرون معلومات خاطئة.", image: "/cards/deset_forger.webp" },
  { icon: "🎭", name: "المنتحل", desc: "ينسخ قدرة لاعب آخر ليستخدمها لليلة واحدة فقط. يسمح له باستخدام أي قدرة بشكل مؤقت.", image: "/cards/deset_impersonator.webp" },
  { icon: "🩸", name: "الجزّار", desc: "يقتل مباشرة؛ النجاح يمنحه قتلة إضافية، والفشل يعطّل قدرته مؤقتًا. خطر عالي لكن مكافأة كبيرة.", image: "/cards/deset_slasher.webp" },
];

export const KINGDOM_ROLES: Role[] = [
  { icon: "👑", name: "الملك", desc: "حاكم المملكة، قراراته تحدد مصير الجميع. دور قيادي مهم ومؤثر في اللعبة.", image: "/cards/deset_king.webp" },
  { icon: "🏚️", name: "الناسك", desc: "يعيش بعيدًا عن الصراعات، لكن يملك معرفة قيمة. قد يملك معلومات سرية تساعد المملكة.", image: "/cards/deset_hermit.webp" },
  { icon: "🛡️", name: "الحارس", desc: "يحمي أحد اللاعبين من أي هجوم قد يستهدفه خلال الليل. دور دفاعي أساسي لحماية المملكة.", image: "/cards/deset_guard.webp" },
  { icon: "💉", name: "الطبيب", desc: "يعالج لاعبًا مسمومًا أو مصابًا قبل فوات الأوان. ضروري لمواجهة قدرات السم والقتل.", image: "/cards/deset_physician.webp" },
  { icon: "🔎", name: "المحقق", desc: "يحقق مع لاعب ليكشف طبيعة دوره أو انتماءه الحقيقي. يساعد في اكتشاف الظلال.", image: "/cards/deset_investigator.webp" },
  { icon: "⚔️", name: "الفارس", desc: "مقاتل شجاع يدافع عن المملكة بكل قوته. يمتلك قدرات قتالية ومهارات حماية.", image: "/cards/deset_knight.webp" },
  { icon: "🏰", name: "الحارس الملكي", desc: "حارس شخصي للملك، يحمي أفراد العائلة المالكة. يركز على حماية الأدوار القيادية.", image: "/cards/deset_royal_guard.webp" },
  { icon: "⚖️", name: "القاضي", desc: "يحكم في النزاعات ويقرر مصير المتهمين. دوره مهم في اتخاذ قرارات مصيرية.", image: "/cards/deset_judge.webp" },
  { icon: "📜", name: "الوزير", desc: "مستشار الملك، يدير شؤون المملكة. يمتلك معرفة واسعة ونفوذ كبير.", image: "/cards/deset_vizier.webp" },
  { icon: "🙏", name: "الكاهن", desc: "يرشد الناس ويقيم الطقوس الدينية. قد يمتلك قدرات روحية أو معرفة خاصة.", image: "/cards/deset_priest.webp" },
  { icon: "📬", name: "الرسول", desc: "ينقل الرسائل والأخبار بين الأطراف المختلفة. مهم للتنسيق والتواصل السري.", image: "/cards/deset_messenger.webp" },
  { icon: "🧙", name: "الساحر", desc: "يمتلك معرفة سحرية و قدرات غامضة. قدرة فريدة يمكن أن تغير مسار اللعبة.", image: "/cards/deset_wizard.webp" },
  { icon: "👤", name: "المواطن", desc: "من سكان المملكة العاديين. لا يمتلك قدرات خاصة، لكن صوته مهم في التصويت.", image: "/cards/deset_citizen.webp" },
  { icon: "🤴", name: "الأمير", desc: "وريث العرش، يحظى باحترام الجميع. دور قيادي مؤثر وله أهمية خاصة.", image: "/cards/deset_crown_prince.webp" },
];

export const NEUTRAL_ROLES: Role[] = [
  { icon: "🎪", name: "المخادع", desc: "يلعب بأوراقه الخاصة لتحقيق أهدافه الشخصية. هدفه الخاص قد يتطلب مساعدة فريق معين أو خداع الجميع.", image: "/cards/deset_trickster.webp" },
  { icon: "📋", name: "حامل العقد", desc: "يملك عقدًا يمنحه حقوقًا خاصة. عليه إتمام شروط العقد للفوز، بصرف النظر عن الفريق الفائز.", image: "/cards/deset_contract_holder.webp" },
];

export const INTERACTIONS: { title: string; steps: string[] }[] = [
  { title: "الاغتيال يقابل الحماية", steps: ["القاتل يهاجم هدفًا", "الحارس يحمي نفس الهدف", "الهجوم يفشل والهدف ينجو"] },
  { title: "السمّ يقابل الترياق", steps: ["السامّ يسمّم لاعبًا", "الطبيب يعالج نفس اللاعب", "السم يُحظر والهدف ينجو"] },
  { title: "التخريب يقابل التحقيق", steps: ["المخرّب يعطّل قدرة المحقق", "المحقق يحاول التحقيق", "لا تظهر نتيجة بسبب التخريب"] },
];
