import React from 'react';
import { Helmet } from 'react-helmet-async';

// Local Business Schema for SEO
export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "المحامية نور بركات",
    "alternateName": "محامية نور بركات",
    "description": "مكتب محاماة متخصص في قضايا التأمين والقانون المدني في عمان، الأردن. خبرة تمتد لأكثر من 14 عاماً في تقديم الخدمات القانونية الاحترافية",
    "image": "https://nourbarakat.com/og-image.jpg",
    "logo": "https://nourbarakat.com/logo.png",
    "url": "https://nourbarakat.com",
    "telephone": "+962799262786",
    "email": "info@nourbarakat.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "أبو نصير - الشارع الرئيسي - بناية 71",
      "addressLocality": "عمان",
      "addressRegion": "عمان",
      "postalCode": "11953",
      "addressCountry": "JO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.9566",
      "longitude": "35.9457"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "عمان"
      },
      {
        "@type": "Country",
        "name": "الأردن"
      }
    ],
    "serviceType": [
      "قضايا التأمين",
      "تحصيل الديون",
      "مراجعة العقود",
      "قانون العمل",
      "قضايا الإيجار",
      "استشارات قانونية"
    ],
    "knowsAbout": [
      "قانون التأمين الأردني",
      "القانون المدني الأردني",
      "قانون العمل الأردني",
      "تحصيل الديون",
      "صياغة ومراجعة العقود",
      "قضايا الإيجار"
    ],
    "sameAs": [
      "https://wa.me/962799262786"
    ],
    "paymentAccepted": ["نقداً", "تحويل بنكي"],
    "currenciesAccepted": "JOD"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Attorney Schema
export const AttorneySchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "نور بركات",
    "honorificPrefix": "المحامية",
    "jobTitle": "محامية متخصصة في قانون التأمين والقانون المدني",
    "telephone": "+962799262786",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "أبو نصير - الشارع الرئيسي - بناية 71",
      "addressLocality": "عمان",
      "addressRegion": "عمان",
      "postalCode": "11953",
      "addressCountry": "JO"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "جامعة آل البيت",
        "location": "الأردن"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "جامعة العلوم الإسلامية",
        "location": "الأردن"
      }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "نقابة المحامين الأردنيين",
      "identifier": "16872"
    },
    "knowsAbout": [
      "Insurance Law",
      "Debt Collection",
      "Contract Law",
      "Labor Law",
      "Landlord Tenant Law",
      "Civil Law"
    ],
    "knowsLanguage": ["ar", "en"],
    "areaServed": "Jordan",
    "yearsOfExperience": "14"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Article Schema
interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  image?: string;
  category?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  publishedDate,
  modifiedDate,
  author,
  image = "https://nourbarakat.com/og-image.jpg",
  category
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "محامية",
      "memberOf": {
        "@type": "Organization",
        "name": "نقابة المحامين الأردنيين"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "المحامية نور بركات",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nourbarakat.com/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : "https://nourbarakat.com"
    },
    ...(category && { "articleSection": category }),
    "inLanguage": "ar-JO",
    "keywords": category
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
