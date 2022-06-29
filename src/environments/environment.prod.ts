export const environment = {
  production: true,
  localization: {
    languages: [
      { code: 'en', name: 'EN', culture: 'en-EN' },
      { code: 'ja', name: 'JP', culture: 'ja-JP' }
    ],
    defaultLanguage: 'en'
  },
  pageSize: 20,
  API_SERVICE: 'http://localhost:8081'
};
