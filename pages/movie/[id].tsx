import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { getMovie, getMovieDetail } from '../api'
import { IMovie } from '../interface/index';
import BoxMovie from '../components/BoxMovie'

const MovieDetail: NextPage = (props:any) => {
  console.log(props)

  return (
    <div className={styles.container}>
      <BoxMovie {...props.detail} />
    </div>
  )
}

export async function getStaticPaths() {
  const data = await getMovie()
  const paths = data.map((item: IMovie) => { return { params: { id: item.id } } })

  return { paths, fallback: false }
}

export async function getStaticProps(context:any) {
  const movieDetail = await getMovieDetail(context.params.id)
  return {
    props: {
      detail: movieDetail
    }, 
  }
}

export default MovieDetail
