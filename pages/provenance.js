import React from 'react'
import Head from 'next/head'
import ProvenenceRecord from '../components/ProvenenceRecord';
import Header from '../components/Header'

const provenance = () => {
    return (
     <>
        <Head>
       <title>Provenance Record</title>
       <link rel="shortcut icon" href="/images/favicon.png" />
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
     </Head>

     <Header/>
<div className="widthMax overflow-hidden mx-auto px-7 mt-32 mb-10">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Provenence Record</div>

<ProvenenceRecord/>


</div>

</>

    )
}

export default provenance





