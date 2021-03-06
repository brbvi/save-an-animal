import { Header } from '../components/MasterPages/DefaultMasterPage/Header'
import { Content } from '../components/MasterPages/DefaultMasterPage/Content'

import Head from 'next/head'
import { useEffect } from 'react'
import Router from 'next/router'
import { SpaceHeader } from '../styles/style'

interface MainProps {
  title: string
}
export const Main: React.FC<MainProps> = ({ title, children }) => {
  useEffect(() => {
    if (!children) {
      Router.push('/home')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Animal | {title} </title>
      </Head>
      <SpaceHeader />
      <Header />
      <Content children={children} />
    </>
  )
}

export default Main
