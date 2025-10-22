import type { I18nText } from '../i18n'
export const EXPERIENCE = [
  { company:'HomoDevelopus', role:'Technical Support Engineer', period:'2024 — 2025 · Hybrid', points:[
    { en:'Resolved customer issues and tracked incidents (Jira, Service Desk)', cs:'Řešil jsem uživatelské problémy a evidoval incidenty (Jira, Service Desk)', ru:'Решал запросы клиентов и вел инциденты (Jira, Service Desk)' },
    { en:'Reported bugs and collaborated with developers to improve stability', cs:'Reportoval chyby a spolupracoval s vývojem na stabilitě', ru:'Репортил баги и улучшал стабильность вместе с разработчиками' },
    { en:'Analyzed feedback and optimized internal support processes', cs:'Analyzoval zpětnou vazbu a optimalizoval support procesy', ru:'Анализировал отзывы и предлагал оптимизации процессов поддержки' },
  ] as I18nText[] },
  { company:'Faculty of Arts, Charles University', role:'Website Administrator', period:'2023 — 2025 · Hybrid', points:[
    { en:'Maintained WordPress/HTML/CSS/JS websites and content', cs:'Správa webů (WordPress/HTML/CSS/JS) a obsah', ru:'Поддержка сайтов (WordPress/HTML/CSS/JS) и контент' },
    { en:'Improved SEO and accessibility', cs:'Zlepšoval SEO a přístupnost', ru:'Улучшал SEO и доступность' },
    { en:'Staff support and redesign collaboration', cs:'Podpora pracovníků a spolupráce na redesignu', ru:'Техническая поддержка сотрудников и участие в редизайне' },
  ] as I18nText[] },
  { company:'Funjitsu Games', role:'Front-end Developer', period:'2022 — 2023 · Remote', points:[
    { en:'Implemented interactive features (React, TypeScript)', cs:'Implementace interaktivních funkcí (React, TS)', ru:'Реализовывал интерактивные фичи (React, TS)' },
    { en:'Performance optimization and UX improvements', cs:'Optimalizace výkonu a zlepšení UX', ru:'Оптимизация производительности и UX' },
    { en:'API integration with backend team', cs:'Integrace API s backend týmem', ru:'Интеграция API с бэкендом' },
  ] as I18nText[] },
  { company:'City Information Center', role:'Service Technician', period:'2018 — 2020 · On-site', points:[
    { en:'Maintained and repaired office hardware & computers', cs:'Údržba a opravy kancelářské techniky a PC', ru:'Обслуживание и ремонт офисной техники и ПК' },
    { en:'Installed software and ensured network connectivity', cs:'Instalace softwaru a zajištění konektivity', ru:'Установка ПО и обеспечение сетевой связности' },
    { en:'Basic IT trainings and inventory', cs:'Základní školení a správa inventáře', ru:'Базовые обучения и учёт IT-инвентаря' },
  ] as I18nText[] },
] as const
