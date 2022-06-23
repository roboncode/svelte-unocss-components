interface KeyValue {
  [key: string]: string
}

export const useTheme = (theme: KeyValue) => {
  for (const [k, v] of Object.entries(theme)) document.body.style.setProperty(`--sa-${k}`, v)
  return theme
}