export type Lang = 'en' | 'cs' | 'ru'

export const NAV = {
  en: { about: 'About', skills: 'Skills', experience: 'Experience', work: 'Projects', education: 'Education', languages: 'Languages', contact: 'Contact' },
  cs: { about: 'O mně', skills: 'Dovednosti', experience: 'Zkušenosti', work: 'Projekty', education: 'Vzdělání', languages: 'Jazyky', contact: 'Kontakt' },
  ru: { about: 'Обо мне', skills: 'Навыки', experience: 'Опыт', work: 'Проекты', education: 'Образование', languages: 'Языки', contact: 'Контакты' },
} as const

export const UI = {
  en: {
    title: 'A Little Bit About Me',
    tagline: 'Frontend Developer • React & TypeScript',
    about1: 'I build landing pages and small web apps with strong focus on performance, clarity and responsive design.',
    about2: 'Comfortable across the stack when needed (Node/Express, MongoDB/MySQL), with hands-on support/ops background.',
    techTitle: 'Some technologies I work with',
    tutorTitle: 'Tutoring',
    tutorText: 'I help kids and absolute beginners learn the basics of web development (HTML, CSS, JavaScript). I am open for new students — lessons online or in Prague.',
    expTitle: 'Where I’ve worked',
    workTitle: 'Selected projects',
    eduTitle: 'Education',
    langTitle: 'Languages',
    moreSoon: '(more coming soon)',
    contactTitle: 'Get in touch',
    contactLine: 'Got an idea or a project? Email me at',
    sayHello: 'Email me',
    resumeBtn: 'Get my CV',
    phone: 'Phone',
  },
  cs: {
    title: 'Něco málo o mně',
    tagline: 'Frontend vývojář • React & TypeScript',
    about1: 'Tvořím landingy a menší webové aplikace se zaměřením na výkon, přehlednost a responzivitu.',
    about2: 'Podle potřeby zvládnu i backend (Node/Express, MongoDB/MySQL) a mám praxi v technické podpoře.',
    techTitle: 'Technologie, se kterými pracuji',
    tutorTitle: 'Repetitorství',
    tutorText: 'Pomáhám dětem a začátečníkům s webovým vývojem (HTML, CSS, JavaScript). Jsem otevřený novým studentům — lekce online nebo v Praze.',
    expTitle: 'Kde jsem pracoval',
    workTitle: 'Vybrané projekty',
    eduTitle: 'Vzdělání',
    langTitle: 'Jazyky',
    moreSoon: '(další brzy přidám)',
    contactTitle: 'Ozvi se',
    contactLine: 'Máš nápad nebo projekt? Napiš mi na',
    sayHello: 'Napsat email',
    resumeBtn: 'Stáhnout CV',
    phone: 'Telefon',
  },
  ru: {
    title: 'Немного обо мне',
    tagline: 'Фронтенд-разработчик • React & TypeScript',
    about1: 'Делаю лендинги и небольшие веб-приложения с упором на скорость, понятность и адаптив.',
    about2: 'При необходимости беру на себя бэкенд (Node/Express, MongoDB/MySQL) и опираюсь на опыт техподдержки.',
    techTitle: 'Технологии',
    expTitle: 'Где я работал',
    workTitle: 'Проекты',
    eduTitle: 'Образование',
    langTitle: 'Языки',
    moreSoon: '(скоро добавлю больше)',
    contactTitle: 'Связаться',
    contactLine: 'Есть идея или проект? Пишите на',
    sayHello: 'Написать',
    resumeBtn: 'Резюме',
    phone: 'Телефон',
  },
} as const

export type I18nText = { en: string; cs: string; ru: string }

export function getInitialLang(): Lang {
  const url = new URL(window.location.href)
  const param = url.searchParams.get('lang') as Lang | null
  const saved = localStorage.getItem('lang') as Lang | null
  const nav = navigator.language.toLowerCase()
  const guess: Lang = nav.startsWith('cs') ? 'cs' : nav.startsWith('ru') ? 'ru' : 'en'
  return param || saved || guess || 'en'
}

export function persistLang(lang: Lang) {
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
}
