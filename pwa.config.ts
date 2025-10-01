import type { Config } from './types';

export default {
  id: '/',
  name: 'Silent Mysteries',
  shortName: 'Silent Mysteries',
  description: 'My journey began with a deep curiosity about life, existence, and the secrets beyond the visible world — which naturally led me into the realms of astrology, spirituality, and cosmic mysteries.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'पृथ्वी से ब्रह्मांड तक: सत्ता, पद और आधिपत्य का गहन रहस्य',
      shortName: 'Silent Mysteries Chapter-1',
      description: 'जब हम सीमाएँ पार करते हुए जीवन-मरण के द्वार से आगे बढ़ते हैं—तो क्या वहाँ भी सत्ता, पद और शिक्षा का क्रम रहता है',
      url: '/search/label/Silence%20Mysteries?utm_source=homescreen',
    },
    {
      name: 'Mystery of Life Consciousness Infinity',
      shortName: 'Silent Mysteries Chapter-2',
      description: 'A profound exploration into the secrets of life, consciousness, and the infinite beyond.',
      url: '/search/label/Life%20&%20Consciousness?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: true, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '7db6b0d4-3b4e-42d4-b8bc-13551a10c7bd', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://the-silent-mysteries.blogspot.com',
} satisfies Config;
