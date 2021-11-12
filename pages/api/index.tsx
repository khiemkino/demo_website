import axios from 'axios'

const response = [
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg',
    name: 'Grave of the Fireflies',
    description: 'In the latter part of World War II, a boy and his sister, orpha'
  }
]

export async function getMovie() {
  return response
}

export function getPaths() {
  // ['id1', 'id2', 'id3']
  return response.map(itm => itm.id) 
}

export async function getMovieDetail(id: string) {
  const findData = response.find(itm => itm.id === id)
  return findData
}