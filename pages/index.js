import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DOIONS - An AI Automation Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <img src="/logo.png" alt="DOIONS Logo"/>
       <p>AI company from India</p>
      </main>
      
      <div>
     
                    </div>
     
      <Footer />
    </div>
  )
}
const ulStyle = {
  padding: 0,
  listStyle: 'none',
};

const liStyle = {
  float: 'left',
  display: 'inline',
  padding: '0 20px',
};
