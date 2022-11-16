export default function importImg(img: string) {
  return new URL(`../assets/images/${img}`, import.meta.url).href
}
