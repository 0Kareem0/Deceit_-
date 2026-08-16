import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  characterName?: string;
}

export function SEO({ title, description, characterName }: SEOProps) {
  useEffect(() => {
    if (characterName) {
      // Character page SEO
      document.title = `${characterName} - ديسيت | Deceit Online`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `تعرف على تفاصيل شخصية ${characterName} في لعبة ديسيت. القدرات، القيود، والاستراتيجيات. لعبة الخداع والاستراتيجية العربية.`
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
      document.title = "Deceit Online | ديسيت - لعبة الخداع والاستراتيجية العربية";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          "Deceit Online — ديسيت، لعبة الخداع والاستراتيجية العربية. لعبة جماعية تعتمد على الأدوار المخفية، الخداع، التحالفات والقدرات الخاصة. اكتشف شخصيات المملكة والظلال، وتعلم القدرات والاستراتيجيات. تحميل مجاني لأندرويد."
        );
      }
    }

    // Cleanup on unmount
    return () => {
      document.title = "Deceit Online | ديسيت - لعبة الخداع والاستراتيجية العربية";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          "Deceit Online — ديسيت، لعبة الخداع والاستراتيجية العربية. لعبة جماعية تعتمد على الأدوار المخفية، الخداع، التحالفات والقدرات الخاصة. اكتشف شخصيات المملكة والظلال، وتعلم القدرات والاستراتيجيات. تحميل مجاني لأندرويد."
        );
      }
    };
  }, [title, description, characterName]);

  return null;
}