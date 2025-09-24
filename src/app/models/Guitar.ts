export type Guitar = {
  id: string
  model: string
  manufacturer: string
  bodyType: string
  materials: Materials
  strings: number
  image: string
}

export type Materials = {
  neck: string
  fretboard: string
  body: string
}