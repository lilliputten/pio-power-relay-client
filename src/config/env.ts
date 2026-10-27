import appInfo from '@/app-info.json';

export const isDev = import.meta.env.DEV; // process.env.NODE_ENV === 'development'; // For webpack
export const isProd = !isDev;

export const versionInfo = appInfo.versionInfo;

export const originHost =
  window.location.origin || window.location.protocol + '//' + window.location.host;

export const rootHost = isProd ? originHost : 'http://localhost:5173';
export const apiHost = isProd ? originHost : 'http://localhost:3000';
export const apiUrl = apiHost + '/api';

export const VITE_NO_STRICT_MODE = import.meta.env.VITE_NO_STRICT_MODE;
