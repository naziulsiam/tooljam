import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tooljam.vercel.app';

  return [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/tools`, priority: 0.9 },
    { url: `${baseUrl}/tools/age-calculator`, priority: 0.9 },
    { url: `${baseUrl}/tools/currency-converter`, priority: 0.9 },
    { url: `${baseUrl}/tools/password-generator`, priority: 0.9 },
    { url: `${baseUrl}/tools/word-counter`, priority: 0.9 },
    { url: `${baseUrl}/tools/unit-converter`, priority: 0.9 },
    { url: `${baseUrl}/about`, priority: 0.5 },
    { url: `${baseUrl}/contact`, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
  ];
}

