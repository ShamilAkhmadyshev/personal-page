// src/data/education.ts
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

const EDU_I18N = [
  {
    org: {
      en: 'Charles University',
      cs: 'Univerzita Karlova',
      ru: 'Карлов университет',
    },
    program: {
      en: 'Bachelor’s Degree in Bohemistics',
      cs: 'Bakalářské studium bohemistiky',
      ru: 'Бакалавриат по богемистике',
    },
    period: '2021 — 2025',
    note: {
      en: 'Completed; free access to the labor market',
      cs: 'Ukončeno; volný přístup na trh práce',
      ru: 'Завершено; свободный доступ к рынку труда',
    },
  },
  {
    org: {
      en: 'Petrochemical Secondary Technical School',
      cs: 'Střední průmyslová škola petrochemická',
      ru: 'Нефтехимический средний технический колледж',
    },
    program: {
      en: 'Information Technology',
      cs: 'Informační technologie',
      ru: 'Информационные технологии',
    },
    period: '2016 — 2020',
    note: {
      en: 'Graduated with final exam in 2020',
      cs: 'Absolvováno s maturitou v roce 2020',
      ru: 'Окончил с итоговым экзаменом в 2020 году',
    },
  },
] as const;

// Экспорт в прежнем формате (строки), чтобы ничего не ломать
export const EDUCATION = EDU_I18N.map((i) => ({
  org: i.org[L],
  program: i.program[L],
  period: i.period,
  note: i.note[L],
}));
