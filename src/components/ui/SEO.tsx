import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  characterName?: string;
  characterDescription?: string;
  characterTeam?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://deceit.online";

const DEFAULTS = {
  ar: {
    title: "Deceit Online | ديسيت - لعبة الخداع والأدوار المخفية",
    description:
      "ديسيت Deceit Online هي لعبة جماعية عربية تعتمد على الخداع، الأدوار المخفية، الاستنتاج، التحالفات والقدرات الخاصة. اكتشف شخصيات المملكة والظلال وتعرّف على قدراتها واستراتيجياتها.",
  },

  en: {
    title: "Deceit Online - Arabic Social Deduction & Strategy Game",
    description:
      "Deceit Online is an Arabic multiplayer social deduction and strategy game featuring hidden roles, deception, alliances, investigation, and unique abilities.",
  },
};

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.href = url;
}

export function SEO({
  title,
  description,
  characterName,
  characterDescription,
  characterTeam,
  image,
  canonical,
  noIndex = false,
}: SEOProps) {
  const { i18n } = useTranslation();

  const language = i18n.language?.startsWith("ar")
    ? "ar"
    : "en";

  useEffect(() => {
    const isArabic = language === "ar";

    let finalTitle =
      title ||
      DEFAULTS[language].title;

    let finalDescription =
      description ||
      DEFAULTS[language].description;

    /*
     * Character SEO
     */
    if (characterName) {
      if (isArabic) {
        finalTitle =
          `${characterName} | ديسيت - Deceit Online`;

        finalDescription =
          characterDescription ||
          `تعرف على شخصية ${characterName} في لعبة ديسيت Deceit Online. اكتشف الفريق، القدرة الخاصة، القيود، فترة الانتظار والاستراتيجيات الخاصة بهذه الشخصية في لعبة الخداع والاستنتاج العربية.`;
      } else {
        finalTitle =
          `${characterName} | Deceit Online`;

        finalDescription =
          characterDescription ||
          `Learn about ${characterName} in Deceit Online. Discover the character's team, ability, constraints, cooldown, and strategy in the Arabic social deduction game.`;
      }
    }

    /*
     * Document title
     */
    document.title = finalTitle;

    /*
     * Language
     */
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic
      ? "rtl"
      : "ltr";

    /*
     * Basic SEO
     */
    setMeta(
      "name",
      "description",
      finalDescription
    );

    setMeta(
      "name",
      "robots",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large"
    );

    setMeta(
      "name",
      "googlebot",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large"
    );

    /*
     * Canonical
     */
    const currentCanonical =
      canonical ||
      `${SITE_URL}${window.location.pathname}`;

    setCanonical(currentCanonical);

    /*
     * Open Graph
     */
    setMeta(
      "property",
      "og:title",
      finalTitle
    );

    setMeta(
      "property",
      "og:description",
      finalDescription
    );

    setMeta(
      "property",
      "og:url",
      currentCanonical
    );

    setMeta(
      "property",
      "og:type",
      characterName
        ? "article"
        : "website"
    );

    setMeta(
      "property",
      "og:locale",
      isArabic
        ? "ar_AR"
        : "en_US"
    );

    setMeta(
      "property",
      "og:site_name",
      "Deceit Online | ديسيت"
    );

    setMeta(
      "property",
      "og:image",
      image ||
        `${SITE_URL}/og-image.png`
    );

    setMeta(
      "property",
      "og:image:alt",
      finalTitle
    );

    /*
     * Twitter
     */
    setMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "name",
      "twitter:title",
      finalTitle
    );

    setMeta(
      "name",
      "twitter:description",
      finalDescription
    );

    setMeta(
      "name",
      "twitter:image",
      image ||
        `${SITE_URL}/og-image.png`
    );

    /*
     * Character structured data
     */
    const oldSchema =
      document.getElementById(
        "deceit-character-schema"
      );

    if (oldSchema) {
      oldSchema.remove();
    }

    if (characterName) {
      const schema = document.createElement(
        "script"
      );

      schema.id =
        "deceit-character-schema";

      schema.type =
        "application/ld+json";

      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: "Deceit Online",
        alternateName: "ديسيت",
        url: currentCanonical,
        image:
          image ||
          `${SITE_URL}/og-image.png`,
        description: finalDescription,
        inLanguage: language,
        character: {
          "@type": "Thing",
          name: characterName,
          description:
            characterDescription ||
            finalDescription,
          ...(characterTeam && {
            memberOf: {
              "@type": "Thing",
              name: characterTeam,
            },
          }),
        },
      });

      document.head.appendChild(schema);
    }

    return () => {
      const schema =
        document.getElementById(
          "deceit-character-schema"
        );

      if (schema) {
        schema.remove();
      }
    };
  }, [
    language,
    title,
    description,
    characterName,
    characterDescription,
    characterTeam,
    image,
    canonical,
    noIndex,
  ]);

  return null;
}