import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMovie } from './api'
import BoxMovie from './components/BoxMovie'

const Home: NextPage = (props:any) => {

  console.log(props)

  return (
    <div className={styles.container}>
      {props.data.map(BoxMovie)}
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await getMovie()

  return {
    props: {
      data
    },
  }
}

export default Home
