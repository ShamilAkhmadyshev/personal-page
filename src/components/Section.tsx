import { ReactNode, useRef, useEffect, useState } from 'react'

function useRevealOnScroll() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const { ref, visible } = useRevealOnScroll()
  return (
    <section
      id={id}
      ref={ref}
      className={`pt-16 sm:pt-20 md:pt-24 transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <h2 className={`text-2xl font-semibold tracking-tight ${id === 'about' ? 'text-center md:text-left' : ''}`}>{title}</h2>
      <div className="mt-4 space-y-4 sm:mt-6 text-zinc-600 dark:text-zinc-300">{children}</div>
    </section>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border px-3 py-1 text-sm opacity-80">{children}</span>
}
export function Anchor({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="underline decoration-dotted underline-offset-4 hover:decoration-solid">{children}</a>
}
