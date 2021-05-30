import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Moto Tri</title>
      </Head>
      <div>Olá</div>
    </Layout>
  )
}

export default Home;
