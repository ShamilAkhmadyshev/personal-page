// src/data/languages.ts
// Drop-in замена: возвращает строки на текущем языке (en/cs/ru) без изменений в App.tsx.

type Lang = 'en' | 'cs' | 'ru';

function getLang(): Lang {
  try {
    const saved = (localStorage.getItem('lang') as Lang | null) || (document.documentElement.lang as Lang | '');
    if (saved === 'cs' || saved === 'ru' || saved === 'en') return saved;
  } catch (_) {}
  return 'en';
}

const L = getLang();

const LANG_I18N = [
  {
    name: { en: 'Czech', cs: 'Čeština', ru: 'Чешский' },
    level: { en: 'C1', cs: 'C1', ru: 'C1' },
  },
  {
    name: { en: 'English', cs: 'Angličtina', ru: 'Английский' },
    level: { en: 'B2', cs: 'B2', ru: 'B2' },
  },
  {
    name: { en: 'Russian', cs: 'Ruština', ru: 'Русский' },
    level: { en: 'Native', cs: 'Rodilý mluvčí', ru: 'Родной' },
  },
  {
    name: { en: 'Tatar', cs: 'Tatarština', ru: 'Татарский' },
    level: { en: 'Native', cs: 'Rodilý mluvčí', ru: 'Родной' },
  },
] as const;

// Экспорт в прежнем формате (строки), чтобы ничего не ломать
export const LANGUAGES = LANG_I18N.map((l) => ({
  name: l.name[L],
  level: l.level[L],
}))
