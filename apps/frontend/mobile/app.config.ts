import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  name: 'DevManager',
  slug: 'mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/developer-icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/developer-splash.png',
    resizeMode: '50',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/developer-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    API_HOST: process.env.VITE_API_HOST,
  },
  assets: ['./assets/fonts/'],
};
