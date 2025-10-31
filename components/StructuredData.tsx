import React from 'react';
import { Helmet } from 'react-helmet-async';

// Local Business Schema for SEO
export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "المحامية نور بركات",
    "image": "https://nourbarakat.com/og-image.jpg",
    "url": "https://nourbarakat.com",
    "telephone": "+962799262786",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ابو نصير - الشارع الرئيسي - قرب الإشارة - فوق مطعم بوبايز - بنايه ٧١ - طابق ١ - مكتب ٣",
      "addressLocality": "عمان",
      "addressRegion": "عمان",
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
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Jordan"
    },
    "knowsAbout": [
      "قضايا التأمين",
      "تحصيل الديون",
      "العقود",
      "قانون العمل",
      "قضايا الإيجار"
    ],
    "sameAs": [
      "https://wa.me/962799262786"
    ]
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
    "telephone": "+962799262786",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "عمان",
      "addressCountry": "JO"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "جامعة"
    },
    "knowsAbout": [
      "Insurance Law",
      "Debt Collection",
      "Contract Law",
      "Labor Law",
      "Landlord Tenant Law"
    ],
    "areaServed": "Jordan"
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
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  publishedDate,
  modifiedDate,
  author,
  image = "https://nourbarakat.com/og-image.jpg"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
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
      "@id": window.location.href
    }
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
