import type { I18nText } from '../i18n'; type I18nTag = { en: string; cs: string; ru: string }
export const PROJECTS = [
  { title:'Online Store', tag:{ en:'Web App', cs:'Webová aplikace', ru:'Веб-приложение' } as I18nTag,
    cover:'/first-store.png',
    summary:{ en:'Simple e-commerce with cart and product pages.', cs:'Jednoduchý e-shop s košíkem a produktovými stránkami.', ru:'Простой e-commerce с корзиной и карточками товаров.' } as I18nText,
    links:[ { label:'Live', href:'https://shamilakhmadyshev.github.io/first-store/' }, { label:'Repo', href:'https://github.com/ShamilAkhmadyshev/first-store' } ],
    details:{ en:'React + CSS. Product listing, cart, basic routing.', cs:'React + CSS. Výpis produktů, košík, základní routing.', ru:'React + CSS. Список товаров, корзина, базовый роутинг.' } as I18nText },

    
  { title:'Countries Info', tag:{ en:'Web App', cs:'Webová aplikace', ru:'Веб-приложение' } as I18nTag,
    cover:'/Countries.png',
    summary:{ en:'Browse countries and their details.', cs:'Procházení států a jejich detailů.', ru:'Обзор стран и их деталей.' } as I18nText,
    links:[ { label:'Live', href:'https://shamilakhmadyshev.github.io/countries.github.io' }, { label:'Repo', href:'https://github.com/ShamilAkhmadyshev/countries.github.io' } ],
    details:{ en:'React app consuming REST Countries API.', cs:'React aplikace nad REST Countries API.', ru:'React-приложение с REST Countries API.' } as I18nText },


  { title:'To-Do List', tag:{ en:'Web app', cs:'Webová aplikace', ru:'Веб-приложение' } as I18nTag,
    cover:'/ToDoList.png',
    summary:{ en:'Tasks with add/edit/delete and persistence.', cs:'Úkoly s přidáním/úpravou/smazáním a uložením.', ru:'Задачи с добавлением/редактированием/удалением и сохранением.' } as I18nText,
    links:[ { label:'Live', href:'https://shamilakhmadyshev.github.io/ToDoList/' }, { label:'Repo', href:'https://github.com/ShamilAkhmadyshev/ToDoList' } ],
    details:{ en:'React + local storage; clean UI and keyboard-friendly.', cs:'React + local storage; čisté UI a klávesové zkratky.', ru:'React + local storage; чистый UI и удобство с клавиатуры.' } as I18nText },


  { title:'Business Theme', tag:{ en:'Landing page', cs:'Webová aplikace', ru:'Веб-приложение' } as I18nTag,
    cover:'/BusinessTheme.png',
    summary:{ en:'Corporate landing with hero, services and CTA.', 
    cs:'Firemní landing se sekcemi hero, služby a CTA.', 
    ru:'Корпоративный лендинг с секциями hero, услуги и CTA.' } as I18nText,
    links:[ { label:'Live', href:'https://shamilakhmadyshev.github.io/BussinesTheme/' }, { label:'Repo', href:'https://github.com/ShamilAkhmadyshev/BussinesTheme' } ],
    details:{ en:'HTML + CSS + vanilla JS; responsive layout and smooth anchor scrolling.', 
    cs:'HTML + CSS + vanilla JS; responzivní layout a plynulé rolování na kotvy.', 
    ru:'HTML + CSS + vanilla JS; адаптивный макет и плавный скролл по якорям.' } as I18nText },
] as const
