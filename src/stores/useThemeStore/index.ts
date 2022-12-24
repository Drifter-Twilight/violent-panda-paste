import { defineStore } from "pinia"
import { useDark, useToggle, useStorage } from "@vueuse/core"

export const useThemeStore = defineStore("themeStore", () => {
  let darkMode = useStorage("dark-mode", false)

  const isDark = useDark({
    storageKey: "dark-mode",
  })
  const toggleDark = useToggle(isDark)

  function setDarkMode(isDark: boolean) {
    darkMode.value = toggleDark(isDark)
    console.log(darkMode.value)
  }

  return { darkMode, setDarkMode }
})
