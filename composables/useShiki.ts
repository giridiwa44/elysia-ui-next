import { createHighlighter, bundledThemes, bundledLanguages } from 'shiki'

let highlighter: any

export async function useShiki() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [bundledThemes['github-dark'], bundledThemes['github-light']],
      langs: [
        bundledLanguages.javascript,
        bundledLanguages.typescript,
        bundledLanguages.html,
        bundledLanguages.css,
        bundledLanguages.bash,
        bundledLanguages.vue
      ]
    })
  }

  const highlight = (code: string, lang = 'js', theme = 'github-dark') => {
    return highlighter.codeToHtml(code, { lang, theme })
  }

  return { highlight }
}
