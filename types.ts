// FIX: Import `React` to resolve namespace error for `React.ElementType`.
import type React from 'react';

export interface Service {
  id: string;
  title: string;
  summary: string;
  icon: React.ElementType;
  details: {
    title: string;
    points: string[];
  }[];
}

export interface Article {
  id: string;
  slug: string; // SEO-friendly URL slug
  title:string;
  author: string;
  date: string;
  summary: string;
  content: string; // Could be Markdown or plain text
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}