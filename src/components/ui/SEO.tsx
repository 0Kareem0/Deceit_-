import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  characterName?: string;
}

export function SEO({ title, description, characterName }: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const isArabic = lang === 'ar';

    if (characterName) {
      // Character page SEO
      document.title = isArabic
        ? `${characterName} - ديسيت | Deceit Online`
        : `${characterName} - Deceit Online`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          isArabic
            ? `تعرف على تفاصيل شخصية ${characterName} في لعبة ديسيت. القدرات، القيود، والاستراتيجيات. لعبة الخداع والاستراتيجية العربية.`
            : `Learn about ${characterName} character in Deceit game. Abilities, constraints, and strategies. The ultimate Arabic deception and strategy game.`
        );
      }
    } else if (title) {
      document.title = title;
      if (description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description);
        }
      }
    } else {
      // Default home page SEO
      document.title = isArabic
        ? "Deceit Online | ديسيت - لعبة الخداع والاستراتيجية العربية"
        : "Deceit Online - The Ultimate Arabic Deception and Strategy Game";

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          isArabic
            ? "Deceit Online — ديسيت، لعبة الخداع والاستراتيجية العربية. لعبة جماعية تعتمد على الأدوار المخفية، الخداع، التحالفات والقدرات الخاصة. اكتشف شخصيات المملكة والظلال، وتعلم القدرات والاستراتيجيات. تحميل مجاني لأندرويد."
            : "Deceit Online - The ultimate Arabic multiplayer game based on hidden roles, deception, alliances, and special abilities. Discover Kingdom and Shadow characters, learn abilities and strategies. Free download for Android."
        );
      }
    }

    // Update HTML lang attribute
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    // Cleanup on unmount
    return () => {
      document.title = "Deceit Online | ديسيت - لعبة الخداع والاستراتيجية العربية";
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    };
  }, [title, description, characterName, lang]);

  return null;
}