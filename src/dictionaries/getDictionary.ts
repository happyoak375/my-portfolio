const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

// This function takes 'en' or 'es' and returns the correct JSON data
export const getDictionary = async (locale: 'en' | 'es') => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};