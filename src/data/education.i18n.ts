// src/data/education.i18n.ts
import type { Lang } from '../i18n';

export type EducationItem = {
  org: string;
  program: string;
  period: string;
  note?: string;
};

const EDU_I18N = [
  {
    org: { en: 'Charles University', cs: 'Univerzita Karlova', ru: 'Карлов университет' },
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
      ru: 'Петрохимический средний технический колледж',
    },
    program: { en: 'Information Technology', cs: 'Informační technologie', ru: 'Информационные технологии' },
    period: '2016 — 2020',
    note: {
      en: 'Graduated with final exam in 2020',
      cs: 'Absolvováno s maturitou v roce 2020',
      ru: 'Окончил с итоговым экзаменом в 2020 году',
    },
  },
] as const;

export function getEducation(lang: Lang): EducationItem[] {
  return EDU_I18N.map((i) => ({
    org: i.org[lang],
    program: i.program[lang],
    period: i.period,
    note: i.note?.[lang],
  }));
}
