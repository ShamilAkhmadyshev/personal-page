// src/data/languages.i18n.ts
import type { Lang } from '../i18n';

export type LanguageItem = {
  name: string;
  level: string;
};

const LANG_I18N = [
  { name: { en: 'Czech',   cs: 'Čeština',    ru: 'Чешский'    }, level: { en: 'C1',     cs: 'C1',               ru: 'C1' } },
  { name: { en: 'English', cs: 'Angličtina', ru: 'Английский' }, level: { en: 'B2',     cs: 'B2',               ru: 'B2' } },
  { name: { en: 'Russian', cs: 'Ruština',    ru: 'Русский'    }, level: { en: 'Native', cs: 'Rodilý mluvčí',    ru: 'Родной' } },
  { name: { en: 'Tatar',   cs: 'Tatarština', ru: 'Татарский'  }, level: { en: 'Native', cs: 'Rodilý mluvčí',    ru: 'Родной' } },
] as const;

export function getLanguages(lang: Lang): LanguageItem[] {
  return LANG_I18N.map((l) => ({ name: l.name[lang], level: l.level[lang] }));
}
