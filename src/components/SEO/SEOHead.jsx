import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const currentUrl = canonicalUrl || `https://savoryops.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title Tag
    if (title) {
      document.title = title;
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

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
    }
    if (keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
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
        'name': 'SavoryOps Restaurant Management System',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web, iOS, Android',
        'description': description || 'Complete Restaurant Management System & Kitchen Display System SaaS platform.',
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
        'itemListElement': [
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
        ]
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