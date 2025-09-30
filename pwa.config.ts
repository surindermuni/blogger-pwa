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
      name: 'Silent Mysteries Part 1',
      shortName: 'Part 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/Silent%20Mysteries?utm_source=homescreen',
    },
    {
      name: 'Silent Mysteries Part 1',
      shortName: 'Part 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/Silent%20Mysteries?utm_source=homescreen',
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
