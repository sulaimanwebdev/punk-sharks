import React from 'react'
import Head from 'next/head'
import ProvenenceRecord from '../components/ProvenenceRecord';
import HeaderProvenance from '../components/HeaderProvenance'

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

     <HeaderProvenance/>
<div className="widthMax overflow-hidden mx-auto px-7 mt-32 mb-10">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Provenence Record</div>
<p className="specs mx-auto text-center mb-14"> 
Each PunkShark artwork contains a unique DNA hash stored on the blockchain and its ownership can be verified. All metadata is permanently stored on the IPFS. A combined hash string is obtained by concatenating DNA hash of each Punkshark image in the specific order listed below.
</p>
<ProvenenceRecord/>


</div>

</>

    )
}

export default provenance





