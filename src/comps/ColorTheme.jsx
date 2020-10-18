const getThemeColor = () => {
  if (!typeof Storage) return
  let color = localStorage.getItem('theme-color')
  return color
}

const ApplyThemeColor = () => {
  let color = getThemeColor()
  if (color) document.documentElement.style.setProperty('--primary', color)
}

const setThemeColor = (color) => {
  if (!typeof Storage) return
  localStorage.setItem('theme-color', color)
}

export { getThemeColor, setThemeColor, ApplyThemeColor }
