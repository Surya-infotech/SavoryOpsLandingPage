import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import multilingualKeywords from '../../data/multilingualKeywords.json';

/**
 * SEOHead Component
 * Programmatically manages <head> meta tags and structured JSON-LD schema markup.
 */
const SEOHead = ({
  title,
  description,
  keywords = [],
  primaryKeyword,
  faqs = [],
  canonicalUrl,
  ogImage = '/Web_Logo.png',
  schemaType = 'SoftwareApplication'
}) => {
  const location = useLocation();
  const { language } = useLanguage();
  const currentUrl = canonicalUrl || `https://savoryops.com${location.pathname.toLowerCase()}`;

  useEffect(() => {
    // Determine active language data
    const langData = multilingualKeywords[language] || multilingualKeywords['English'];
    const activeLangCode = langData?.langCode || 'en';

    // Update <html lang="..."> attribute dynamically
    document.documentElement.lang = activeLangCode;

    // 1. Update Title Tag
    const resolvedTitle = title || langData?.metaTitle || document.title;
    if (resolvedTitle) {
      document.title = resolvedTitle;
    }

    // Helper function to update or create meta tags
    const setMetaTag = (selector, nameAttr, nameValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags with Multilingual Keyword Merging
    const resolvedDescription = description || langData?.metaDescription || '';
    if (resolvedDescription) {
      setMetaTag('meta[name="description"]', 'name', 'description', resolvedDescription);
    }

    const pageKeywords = Array.isArray(keywords)
      ? keywords
      : typeof keywords === 'string' && keywords.length > 0
      ? [keywords]
      : [];

    const localizedKeywords = langData?.primaryKeywords || [];
    const mergedKeywords = Array.from(new Set([...pageKeywords, ...localizedKeywords]));

    if (mergedKeywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', mergedKeywords.join(', '));
    }

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title || document.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description || '');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title || document.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description || '');
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 5b. Multilingual Hreflang Tags for Global Search Ranking
    const supportedLangs = [
      { code: 'en', lang: 'en' },
      { code: 'fr', lang: 'fr' },
      { code: 'de', lang: 'de' },
      { code: 'es', lang: 'es' },
      { code: 'el', lang: 'el' },
      { code: 'it', lang: 'it' },
      { code: 'nl', lang: 'nl' },
      { code: 'ru', lang: 'ru' },
      { code: 'x-default', lang: 'en' }
    ];

    supportedLangs.forEach(({ code }) => {
      let hreflangTag = document.querySelector(`link[rel="alternate"][hreflang="${code}"]`);
      if (!hreflangTag) {
        hreflangTag = document.createElement('link');
        hreflangTag.setAttribute('rel', 'alternate');
        hreflangTag.setAttribute('hreflang', code);
        document.head.appendChild(hreflangTag);
      }
      hreflangTag.setAttribute('href', currentUrl);
    });

    // 6. JSON-LD Structured Schema Injection
    const schemaId = 'dynamic-seo-jsonld';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'SavoryOps',
        'alternateName': ['SavoryOps SaaS', 'SavoryOps Restaurant Management System', 'SavoryOps POS'],
        'applicationCategory': 'RestaurantManagementApplication',
        'operatingSystem': 'Web, Cloud, iOS, Android',
        'url': 'https://savoryops.com',
        'description': description || 'Complete Restaurant Management System, Cloud POS, and Kitchen Display System SaaS platform.',
        'sameAs': [
          'https://reviews.capterra.com/products/new/cd4941f7-7adc-4ad9-8652-6766cd4e284d/',
          'https://www.trustpilot.com/review/savoryops.com',
          'https://www.linkedin.com/company/savoryops/',
          'https://www.instagram.com/savoryops'
        ],
        'offers': {
          '@type': 'Offer',
          'price': '0.00',
          'priceCurrency': 'USD',
          'name': 'Free Trial'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '128'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': (() => {
          const pathSegments = location.pathname.split('/').filter(Boolean);
          if (pathSegments.length <= 1) {
            return [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://savoryops.com/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': primaryKeyword || title || 'Page',
                'item': currentUrl
              }
            ];
          }
          const parentName = pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1);
          return [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://savoryops.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': parentName,
              'item': `https://savoryops.com/${pathSegments[0]}`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': primaryKeyword || title || 'Page',
              'item': currentUrl
            }
          ];
        })()
      }
    ];

    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    scriptTag.textContent = JSON.stringify(schemas, null, 2);

    return () => {
      // Cleanup dynamically injected schema when navigating away
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, primaryKeyword, faqs, currentUrl, ogImage, schemaType]);

  return null;
};

export default SEOHead;