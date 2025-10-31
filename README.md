# مكتب نور بركات للمحاماة | Nour Barakat Law Firm

<div align="center">

[![Live Site](https://img.shields.io/badge/Live-Site-blue?style=for-the-badge)](https://nourbarakat.com/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

**موقع إلكتروني احترافي لمكتب محاماة في الأردن**

[العرض المباشر](https://nourbarakat.com/) • [التقرير عن مشكلة](https://github.com/ksalah1/NourBarakat.com/issues)

</div>

---

## 📋 نظرة عامة | Overview

موقع إلكتروني حديث ومتجاوب لمكتب نور بركات للمحاماة في عمان، الأردن. يقدم الموقع معلومات شاملة عن الخدمات القانونية المتخصصة في:

- 🚗 مطالبات وقضايا تأمين المركبات
- 💰 المطالبات المالية وتحصيل الديون
- 📄 مراجعة وصياغة العقود والاتفاقيات
- 👥 القضايا العمالية وحقوق الموظفين
- 🏠 قضايا المستأجرين والمالكين

A modern, responsive website for Nour Barakat Law Firm in Amman, Jordan, specializing in insurance claims, debt collection, contract review, labor disputes, and landlord-tenant matters.

---

## ✨ المميزات | Features

### 🎨 واجهة مستخدم حديثة
- تصميم عصري بألوان احترافية (أزرق، رمادي)
- واجهة متجاوبة تعمل على جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- دعم كامل للغة العربية (RTL)
- رسوم متحركة سلسة وانتقالات ناعمة

### 📱 أزرار الاتصال السريع (CTAs)
- زر WhatsApp عائم يظهر في جميع الصفحات
- أزرار اتصال سريعة (واتساب، هاتف، استشارة)
- CTAs مخصصة حسب محتوى كل مقال

### 📄 محتوى شامل
- **10 مقالات قانونية** مفصلة مع تنسيق محسّن
- **25+ سؤال وجواب** منظمة في 6 فئات
- **5 خدمات قانونية** مع شرح تفصيلي لكل خدمة
- صفحة "عن المكتب" احترافية

### 🔍 تحسين محركات البحث (SEO)
- Meta tags مخصصة لكل صفحة
- Open Graph tags للمشاركة على وسائل التواصل
- Schema.org structured data (LocalBusiness, Attorney, Article)
- Sitemap.xml و robots.txt
- Canonical URLs

### 🌐 صديق لمحركات البحث
- عناوين وصفية (H1, H2, H3) منظمة
- روابط داخلية لتحسين التنقل
- سرعة تحميل عالية
- صور محسّنة

---

## 🛠️ التقنيات المستخدمة | Tech Stack

### Frontend
- **React 19.2.0** - مكتبة JavaScript لبناء واجهات المستخدم
- **TypeScript 5.6.2** - لغة برمجة مكتوبة فوق JavaScript
- **React Router DOM 7.9.4** - للتنقل بين الصفحات (HashRouter)
- **React Icons 5.4.0** - مكتبة أيقونات شاملة

### Styling
- **Tailwind CSS 4.1.16** - إطار عمل CSS utility-first
- **PostCSS 8.4.49** - معالج CSS
- **Autoprefixer 10.4.20** - إضافة البادئات تلقائياً

### SEO & Metadata
- **react-helmet-async 2.0.5** - إدارة meta tags ديناميكياً
- **Schema.org JSON-LD** - بيانات منظمة للبحث

### Build & Development
- **Vite 6.2.0** - أداة بناء سريعة وخفيفة
- **ESLint 9.17.0** - أداة فحص الكود
- **TypeScript ESLint 8.18.2** - قواعد TypeScript

### Deployment
- **GitHub Pages** - استضافة ثابتة مجانية
- **GitHub Actions** - CI/CD تلقائي

---

## 📁 هيكل المشروع | Project Structure

```
NourBarakat.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── sitemap.xml             # خريطة الموقع
│   └── robots.txt              # ملف robots
├── components/
│   ├── Navbar.tsx              # شريط التنقل
│   ├── Footer.tsx              # تذييل الصفحة
│   ├── FloatingWhatsApp.tsx    # زر WhatsApp العائم
│   ├── CTAButtons.tsx          # أزرار الاتصال السريع
│   ├── SEO.tsx                 # مكون SEO
│   └── StructuredData.tsx      # Schema.org markup
├── pages/
│   ├── Home.tsx                # الصفحة الرئيسية
│   ├── Services.tsx            # صفحة الخدمات
│   ├── ArticleList.tsx         # قائمة المقالات
│   ├── ArticleDetail.tsx       # تفاصيل المقال
│   ├── About.tsx               # عن المكتب
│   ├── FAQ.tsx                 # أسئلة شائعة
│   └── Contact.tsx             # تواصل معنا
├── data/
│   ├── services.ts             # بيانات الخدمات
│   ├── articles.ts             # بيانات المقالات
│   └── faq.ts                  # بيانات الأسئلة الشائعة
├── types.ts                    # TypeScript interfaces
├── App.tsx                     # المكون الرئيسي
├── index.tsx                   # نقطة الدخول
├── index.css                   # الأنماط العامة
├── vite.config.ts              # إعدادات Vite
├── tailwind.config.js          # إعدادات Tailwind
├── postcss.config.js           # إعدادات PostCSS
├── tsconfig.json               # إعدادات TypeScript
└── package.json                # التبعيات والسكريبتات
```

---

## 🚀 البدء | Getting Started

### المتطلبات الأساسية | Prerequisites

- **Node.js** (النسخة 18 أو أحدث)
- **npm** (يأتي مع Node.js)

### التثبيت | Installation

1. **استنساخ المشروع | Clone the repository**
   ```bash
   git clone https://github.com/ksalah1/NourBarakat.com.git
   cd NourBarakat.com
   ```

2. **تثبيت التبعيات | Install dependencies**
   ```bash
   npm install
   ```

3. **تشغيل خادم التطوير | Start development server**
   ```bash
   npm run dev
   ```

4. **فتح المتصفح | Open browser**
   ```
   http://localhost:3000
   ```

---

## 📜 الأوامر المتاحة | Available Scripts

```bash
# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الكود (linting)
npm run lint
```

---

## 🌍 النشر | Deployment
</div>

This contains everything you need to run your app locally.


الموقع منشور تلقائياً على **GitHub Pages** عند كل دفع (push) للفرع الرئيسي:

1. يتم بناء المشروع تلقائياً بواسطة GitHub Actions
2. يتم نشر الملفات على GitHub Pages
3. الموقع متاح على: https://nourbarakat.com/

### النشر يدوياً | Manual Deployment

```bash
# بناء المشروع
npm run build

# الملفات الجاهزة للنشر موجودة في مجلد dist/
```

---

## 🎨 التخصيص | Customization

### تغيير المحتوى | Changing Content

#### الخدمات | Services
عدّل الملف `data/services.ts`

#### المقالات | Articles
عدّل الملف `data/articles.ts`

#### الأسئلة الشائعة | FAQs
عدّل الملف `data/faq.ts`

### تغيير معلومات الاتصال | Contact Information

ابحث عن `+962799262786` في المشروع واستبدله برقم الهاتف الجديد:
```bash
# البحث عن الرقم
grep -r "962799262786" .

# الملفات الرئيسية:
# - components/FloatingWhatsApp.tsx
# - components/CTAButtons.tsx
# - components/Footer.tsx
# - pages/Contact.tsx
# - pages/ArticleDetail.tsx
# - pages/FAQ.tsx
```

### تغيير الألوان | Colors

الألوان الرئيسية معرفة في Tailwind CSS:
- الأزرق: `blue-600`, `blue-700`, `blue-800`, `blue-900`
- الرمادي: `gray-50`, `gray-100`, `gray-600`, `gray-700`, `gray-800`

---

## 📊 معلومات الأداء | Performance

- **حجم JavaScript:** ~385 KB (مضغوط: ~119 KB)
- **حجم CSS:** ~32 KB (مضغوط: ~6 KB)
- **عدد الوحدات:** 70 module
- **وقت البناء:** ~2.5 ثانية

---

## 🔧 التقنيات المتقدمة | Advanced Features

### Schema.org Structured Data

الموقع يستخدم بيانات منظمة من Schema.org:

- **LocalBusiness** - معلومات المكتب
- **Attorney** - معلومات المحامي
- **Article** - المقالات القانونية
- **Breadcrumb** - مسار التنقل

### SEO Optimization

كل صفحة لها:
- عنوان فريد (Title)
- وصف ميتا (Meta Description)
- كلمات مفتاحية (Keywords)
- رابط Canonical
- Open Graph tags
- Twitter Card tags

### React 19 Features

استخدام أحدث ميزات React 19:
- Server Components ready
- Automatic batching
- Improved TypeScript support

---

## 📞 معلومات الاتصال | Contact

**مكتب نور بركات للمحاماة**

- 📍 العنوان: ابو نصير - الشارع الرئيسي - بنايه ٧١ - طابق ١ - مكتب ٣
- 📱 الهاتف: [+962 79 926 2786](tel:+962799262786)
- 💬 واتساب: [انقر للمراسلة](https://wa.me/962799262786)
- 🌐 الموقع: [NourBarakat.com](https://nourbarakat.com/)

---

## 📝 الترخيص | License

هذا المشروع خاص بمكتب نور بركات للمحاماة. جميع الحقوق محفوظة © 2024

---

## 🙏 شكر وتقدير | Acknowledgments

- تم البناء باستخدام [React](https://react.dev/)
- التصميم باستخدام [Tailwind CSS](https://tailwindcss.com/)
- الأيقونات من [React Icons](https://react-icons.github.io/react-icons/)
- الاستضافة على [GitHub Pages](https://pages.github.com/)

---

<div align="center">

**صُنع بـ ❤️ لخدمة العدالة في الأردن**

🤖 تم تطويره بمساعدة [Claude Code](https://claude.com/claude-code)

</div>
