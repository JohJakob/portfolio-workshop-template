import React from 'react'
import Layout from '../components/Layout'
import ImprintComp from '../components/legal/ImprintComp'

const Imprint = () => {
  return(
    <Layout>
      <h1>Impressum</h1>
      <ImprintComp
        name="Max Mustermann"
        street="Musterstraße 12"
        location="01234 Musterstadt" />
    </Layout>
  )
}

export default Imprint
