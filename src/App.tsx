import { useEffect, useMemo, useState } from 'react'
import { Icon } from './components/Icons'
import { Section, Badge, Anchor } from './components/Section'
import { SOCIALS } from './data/socials'
import { STACK } from './data/stack'
import { EXPERIENCE } from './data/experience'
import { PROJECTS } from './data/projects'
import { getEducation } from './data/education.i18n';import { getLanguages } from './data/languages.i18n';import { NAV, UI, type Lang, getInitialLang, persistLang } from './i18n'

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const offsetY = () => window.scrollY + window.innerHeight * 0.28
    const calcActive = () => {
      const y = offsetY()
      const found = ids.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + el.offsetHeight
        return y >= top && y < bottom
      })
      setActive(found || ids[0])
    }
    calcActive()
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { calcActive(); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', calcActive)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', calcActive)
    }
  }, [ids.join('-')])
  return active
}

function applyTheme(t: 'light'|'dark') {
  const root = document.documentElement
  if (t === 'dark') root.classList.add('dark'); else root.classList.remove('dark')
  localStorage.setItem('theme', t)
}

function getInitialTheme(): 'light'|'dark' {
  const saved = localStorage.getItem('theme') as 'light'|'dark'|null
  if (saved) return saved
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const education = useMemo(() => getEducation(lang), [lang]);
  const languages = useMemo(() => getLanguages(lang), [lang]);
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const initialLang = getInitialLang()
    setLang(initialLang); persistLang(initialLang)
    const initialTheme = getInitialTheme()
    setTheme(initialTheme); applyTheme(initialTheme)
  }, [])

  useEffect(() => { persistLang(lang) }, [lang])
  useEffect(() => { applyTheme(theme) }, [theme])
  useEffect(() => {
    document.body.classList.toggle('body-lock', menuOpen)
    return () => document.body.classList.remove('body-lock')
  }, [menuOpen])

  const nav = NAV[lang]
  const ui = UI[lang]

  const sections = useMemo(
    () => [
      { id: 'about', label: nav.about },
      { id: 'skills', label: nav.skills },
      { id: 'experience', label: nav.experience },
      { id: 'work', label: nav.work },
      { id: 'tutoring', label: 'Tutoring' },
      { id: 'education', label: nav.education },
      
    ],
    [nav],
  )

  const active = useActiveSection(sections.map((s) => s.id))
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      {/* Desktop top-right controls */}
      <div id="desktop-controls" className="fixed right-4 top-10 z-40 hidden items-center gap-2 md:flex">
        <div className="inline-flex items-center gap-1 rounded-lg border p-1 text-xs" role="group" aria-label="Language selector">
          {(['en','cs','ru'] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-md px-2 py-1 ${lang === l ? 'bg-zinc-100 dark:bg-zinc-900 font-medium' : 'opacity-70'}`}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-lg p-2" aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
      </div>
    
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8 py-8">
        <div className="grid min-h-screen gap-6 md:gap-12 lg:gap-16 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.2fr] items-start">
          {/* LEFT SIDEBAR */}
          <aside className="md:sticky md:top-10 z-20 bg-white dark:bg-zinc-950 max-h-[calc(100vh-2.5rem)] overflow-auto">
            <header className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Shamil Akhmadyshev</h1>
                <div className="flex items-center gap-2">
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hidden" aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
                </div>
              </div>
              <p className="text-lg opacity-80">{ui.tagline}</p>
              <a href={lang === 'cs' ? '/CV_CZ.pdf' : '/CV_EN.pdf'} download className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900" aria-label="Download CV">{ui.resumeBtn}</a>
              <p className="max-w-sm text-sm opacity-70">
                {lang === 'en' && 'I like clean code, strong typing and tiny, pleasant micro-interactions.'}
                {lang === 'cs' && 'Mám rád čistý kód, silné typování a drobné, příjemné mikrointerakce.'}
                {lang === 'ru' && 'Люблю чистый код, типобезопасность и приятные микро-микроанимации.'}
              </p>
            </header>

            {/* Desktop Nav */}
            <nav className="mt-6 hidden flex-col gap-2 md:flex" aria-label="Primary">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={`rounded-lg px-3 py-2 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-900 ${active === s.id ? 'bg-zinc-100 font-medium dark:bg-zinc-900' : ''}`}>
                  {s.label}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Social links">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="rounded-lg p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-900">
                  <Icon name={s.icon as string} />
                </a>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a href="mailto:shamil.akhmadyshev@gmail.com" className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
                {ui.sayHello}
              </a>
            </div>
          </aside>
          {/* RIGHT CONTENT */}
          <main className="pr-3 sm:pr-4 md:pr-6 lg:pr-8">
            <Section id="about" title={ui.title}>
              <div className="grid gap-4 sm:grid-cols-[120px_1fr] md:grid-cols-[160px_1fr]">
                <img src="/shamil.jpg" alt="Shamil Akhmadyshev" className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-2xl border object-cover object-center ring-1 ring-black/5 dark:ring-white/5 mx-auto sm:mx-0" />
                <div>
                  <p>{ui.about1}</p>
                  <p className="mt-2">{ui.about2}</p>
                </div>
              </div>
            </Section>

            <Section id="skills" title={ui.techTitle}>
              <div className="mt-2 flex flex-wrap gap-2">
                {STACK.map((t) => (
                  <button key={t as string} className="rounded-2xl border px-3 py-1 text-sm opacity-80 transition transform hover:opacity-100 hover:-translate-y-0.5 hover:shadow hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-md active:scale-95" type="button">
                    {t as string}
                  </button>
                ))}
              </div>
            </Section>

            <Section id="experience" title={ui.expTitle}>
              <div className="space-y-6">
                {EXPERIENCE.map((job) => (
                  <div key={job.company} className="rounded-2xl border p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium">{job.role}</h3>
                        <p className="opacity-80">{job.company}</p>
                      </div>
                      <span className="text-sm opacity-60">{job.period}</span>
                    </div>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm opacity-90">
                      {job.points.map((p, i) => (<li key={i}>{lang === 'en' ? p.en : lang === 'cs' ? p.cs : p.ru}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
</Section>

            <Section id="work" title={ui.workTitle}>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                {PROJECTS.map((p, i) => (
                  <button key={p.title} onClick={() => setOpenIdx(i)} className="group text-left">
                    <div className="overflow-hidden rounded-2xl border">
                      <img src={p.cover} alt="" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <h3 className="text-base font-semibold">{p.title}</h3>
                      <span className="rounded-full border px-2 py-0.5 text-xs opacity-70">{lang === 'en' ? p.tag.en : lang === 'cs' ? p.tag.cs : p.tag.ru}</span>
                    </div>
                    <p className="mt-1 text-sm opacity-80">{lang === 'en' ? p.summary.en : lang === 'cs' ? p.summary.cs : p.summary.ru}</p>
                  </button>
                ))}
              </div>
            </Section>
                    <Section id="tutoring" title="Tutoring">
              <p className="mt-2">{ui.tutorText}</p>
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop" alt="" className="mt-3 w-full rounded-xl object-cover" />
            </Section>


            <Section id="education" title={ui.eduTitle}>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.org} className="rounded-2xl border p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium">{e.org}</h3>
                        <p className="opacity-80">{e.program}</p>
                      </div>
                      <span className="text-sm opacity-60">{e.period}</span>
                    </div>
                    <p className="mt-2 text-sm opacity-80">{e.note}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="languages" title={ui.langTitle}>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                {languages.map((l) => (<li key={l.name} className="rounded-xl border px-3 py-2">{l.name} — {l.level}</li>))}
              </ul>
            </Section>

            <Section id="contact" title={ui.contactTitle}>
              <p>{ui.contactLine} <a href="mailto:shamil.akhmadyshev@gmail.com" className="underline decoration-dotted underline-offset-4 hover:decoration-solid">shamil.akhmadyshev@gmail.com</a>.</p>
            </Section>
          </main>
        </div>
      </div>

      {/* Floating mobile menu button */}
      {!menuOpen && (<button id="floating-menu-button" onClick={() => setMenuOpen(true)} className="fixed right-3 top-4 z-50 rounded-lg border bg-white/80 p-2 backdrop-blur md:hidden dark:bg-zinc-900/80" aria-label="Open menu"><Icon name="menu" /></button>)}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 p-4 md:hidden" role="dialog" aria-modal>
          <div className="mx-auto w-[min(92vw,22rem)] rounded-2xl border bg-white p-4 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
            <div className="mb-2 flex items-center justify-between">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-lg p-2" aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-1" aria-label="Close">✕</button>
            </div>
            <div className="mb-3 inline-flex items-center gap-1 rounded-xl border p-1 text-xs" role="group" aria-label="Language selector">
              {(['en','cs','ru'] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-lg px-2 py-1 ${lang === l ? 'bg-zinc-100 dark:bg-zinc-900 font-medium' : 'opacity-70'}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <nav className="grid gap-1">
              {sections.map((s) => (
                <button key={s.id} onClick={() => goTo(s.id)} className={`rounded-lg px-3 py-2 text-left text-sm ${active === s.id ? 'bg-zinc-100 dark:bg-zinc-900' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}>
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Project modal */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/50 p-4" role="dialog" aria-modal>
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 overflow-hidden">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{PROJECTS[openIdx].title}</h3>
                <p className="whitespace-pre-line opacity-80">{lang === 'en' ? PROJECTS[openIdx].details.en : lang === 'cs' ? PROJECTS[openIdx].details.cs : PROJECTS[openIdx].details.ru}</p>
              </div>
              <button onClick={() => setOpenIdx(null)} className="rounded-full p-2 opacity-60 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Close">✕</button>
            </div>
            <img src={PROJECTS[openIdx].cover} alt="" className="mt-5 w-full rounded-xl" />
            <div className="mt-4 flex gap-3">
              {PROJECTS[openIdx].links?.map((l) => (
                <a key={l.label} href={l.href} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  {l.label}
                  <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z M20 20H4V4h5V2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-2v5Z"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <a href="#about" className="fixed bottom-6 right-6 hidden rounded-full border bg-white/70 p-2 backdrop-blur transition hover:bg-white dark:bg-zinc-900/70 md:block" aria-label="Back to top">↑</a>
    </div>
  )
}