export const ANDROID_LINK =
  "https://drive.google.com/file/d/1_eCu4wxU6cSfPPScbB_Kr7A6izxLCBRn/view?usp=sharing";
export const IOS_LINK: string | null = null; // ضع رابط الـ App Store هنا عندما يتوفر

export type Role = { icon: string; name: string; desc: string; image?: string };
export type Character = Role & { faction: string; color: string };

export const SHADOW_ROLES: Role[] = [
  { icon: "👑", name: "قائد الظلال", desc: "يقترح هدف الليلة الرئيسي، ويوجّه بقية الظلال نحو الفريسة المناسبة.", image: "/deset_shadow_leader.png" },
  { icon: "🗡️", name: "القاتل", desc: "يملك القرار الأخير في تنفيذ عملية القتل الرئيسية لتلك الليلة.", image: "/deset_assassin.png" },
  { icon: "🕵️", name: "الجاسوس", desc: "يراقب لاعبًا بعينه، ويكشف كل من تفاعل معه أثناء الليل.", image: "/deset_spy.png" },
  { icon: "☠️", name: "السامّ", desc: "يسمّم أحد اللاعبين، فيموت لاحقًا إن لم يُعالَج في الوقت المناسب.", image: "/deset_poisoner.png" },
  { icon: "🔧", name: "المخرّب", desc: "يعطّل قدرة لاعب آخر، فيمنعه من استخدامها في تلك الليلة.", image: "/deset_saboteur.png" },
  { icon: "🎭", name: "المزوّر", desc: "يشوّه نتائج التحقيقات، فيقلب الحقيقة رأسًا على عقب.", image: "/deset_forger.png" },
  { icon: "🎭", name: "المنتحل", desc: "ينسخ قدرة لاعب آخر ليستخدمها لليلة واحدة فقط.", image: "/deset_impersonator.png" },
  { icon: "🩸", name: "الجزّار", desc: "يقتل مباشرة؛ النجاح يمنحه قتلة إضافية، والفشل يعطّل قدرته مؤقتًا.", image: "/deset_slasher.png" },
];

export const KINGDOM_ROLES: Role[] = [
  { icon: "👑", name: "الملك", desc: "حاكم المملكة، قراراته تحدد مصير الجميع.", image: "/deset_king.png" },
  { icon: "🏚️", name: "الناسك", desc: "يعيش بعيدًا عن الصراعات، لكن يملك معرفة قيمة.", image: "/deset_hermit.png" },
  { icon: "🛡️", name: "الحارس", desc: "يحمي أحد اللاعبين من أي هجوم قد يستهدفه خلال الليل.", image: "/deset_guard.png" },
  { icon: "💉", name: "الطبيب", desc: "يعالج لاعبًا مسمومًا أو مصابًا قبل فوات الأوان.", image: "/deset_physician.png" },
  { icon: "🔎", name: "المحقق", desc: "يحقق مع لاعب ليكشف طبيعة دوره أو انتماءه الحقيقي.", image: "/deset_investigator.png" },
  { icon: "⚔️", name: "الفارس", desc: "مقاتل شجاع يدافع عن المملكة بكل قوته.", image: "/deset_knight.png" },
  { icon: "🏰", name: "الحارس الملكي", desc: "حارس شخصي للملك، يحمي أفراد العائلة المالكة.", image: "/deset_royal_guard.png" },
  { icon: "⚖️", name: "القاضي", desc: "يحكم في النزاعات ويقرر مصير المتهمين.", image: "/deset_judge.png" },
  { icon: "📜", name: "الوزير", desc: "مستشار الملك، يدير شؤون المملكة.", image: "/deset_vizier.png" },
  { icon: "🙏", name: "الكاهن", desc: "يرشد الناس ويقيم الطقوس الدينية.", image: "/deset_priest.png" },
  { icon: "📬", name: "الرسول", desc: "ينقل الرسائل والأخبار بين الأطراف المختلفة.", image: "/deset_messenger.png" },
  { icon: "🧙", name: "الساحر", desc: "يمتلك معرفة سحرية و قدرات غامضة.", image: "/deset_wizard.png" },
  { icon: "👤", name: "المواطن", desc: "من سكان المملكة العاديين.", image: "/deset_citizen.png" },
  { icon: "🤴", name: "الأمير", desc: "وريث العرش، يحظى باحترام الجميع.", image: "/deset_crown_prince.png" },
];

export const NEUTRAL_ROLES: Role[] = [
  { icon: "🎪", name: "المخادع", desc: "يلعب بأوراقه الخاصة لتحقيق أهدافه الشخصية.", image: "/deset_trickster.png" },
  { icon: "📋", name: "حامل العقد", desc: "يملك عقدًا يمنحه حقوقًا خاصة.", image: "/deset_contract_holder.png" },
];

export const INTERACTIONS: { title: string; steps: string[] }[] = [
  { title: "الاغتيال يقابل الحماية", steps: ["القاتل يهاجم", "الحارس يتدخل", "الهجوم يفشل"] },
  { title: "السمّ يقابل الترياق", steps: ["السامّ يسمّم", "الطبيب يعالج", "الهدف ينجو"] },
  { title: "التخريب يقابل التحقيق", steps: ["المخرّب يعطّل المحقق", "المحقق يحاول", "لا نتيجة تظهر"] },
];
