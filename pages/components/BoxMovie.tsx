import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { IMovie } from '../interface'


const BoxMovie = (movie: IMovie) => {
  const router = useRouter()


  const onClickData = () => {
    router.push('/movie/' + movie.id)
  }

  return (
    <div onClick={onClickData} className={styles.container}>
      <img src={movie.image} width={200} height={200} />
      <div>{movie.title}</div>
      <div>{movie.description}</div>
    </div>
  )
}
export default BoxMovie
