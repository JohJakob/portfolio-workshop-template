import Head from 'next/head'
import { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Build Your Online Portfolio – Website Template</title>
        </Head>
        <main>
          <h1>Hello World</h1>
        </main>
      </Layout>
    )
  }
}