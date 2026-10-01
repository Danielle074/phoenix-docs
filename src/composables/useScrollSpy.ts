import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/** Suit la section visible pour surligner l’entrée active du sommaire. */
export function useScrollSpy(ids: string[]): { activeId: Ref<string> } {
  const activeId = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) activeId.value = visible.target.id
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())
  return { activeId }
}
