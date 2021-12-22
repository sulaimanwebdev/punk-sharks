import Head from 'next/head'
import {useEffect, useState} from "react";

export default function Home() {
  // const [getdata, setgetdata] = useState([])

  // const fetchData = async () => {
  //          const response = await fetch("/api/sharks");
  //          setgetdata(await response.json());

  // }


  //         useEffect(() => {
  //           fetchData();
  //           }, []);
  return (
   <>
     <Head>
       <title>Punk Sharks</title>
       <link rel="shortcut icon" href="/images/favicon.png" />
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
     </Head>

     <div className="header z-10 px-7 sticky top-0 bg-white py-2 flex items-center justify-between">
             <div className="logo"><a href="#" className="flex items-center gap-2 font-bold "><img src="/images/favicon.png" className="w-14" alt="Logo"/> <span className="opacity-80">Punk Sharks</span></a></div>

             <nav className="flex items-center gap-20 font-bold">
                    <a href="#" className="opacity-70 transition-colors hover:opacity-90">Home</a>
                    <a href="#" className="opacity-70 transition-colors hover:opacity-90">Project</a>
                    <a href="#" className="opacity-70 transition-colors hover:opacity-90">Games</a>
                    <a href="#" className="opacity-70 transition-colors hover:opacity-90">Rewards</a>
                    <a href="#" className="opacity-70 transition-colors hover:opacity-90">Stacking</a>
             </nav>

             <button className="px-5 py-3 bg-purple-600 cursor-pointer transition-colors hover:bg-purple-700 text-white font-bold rounded-md">Connect Wallet</button>

     </div>
   
   <div className="cover w-full">
     <img src="/images/cover.png" alt="Cover Image" className="w-full select-none h-full object-cover object-center" />
   </div>


{/* main */}


        <div className="main text-center w-full px-7 mx-auto">
          <a href="https://opensea.io/collection/the-punksharks" target="_blank" className="profile w-28 h-28 mx-auto overflow-hidden rounded-full flex items-center justify-center"><img src="/images/profile.gif" alt="Profile" className="w-full h-full object-cover object-center" /></a>

          <h1 className="text-6xl title mb-5">Punk Sharks</h1>
          <p>PunkSharks are cool and fun loving crypto enthusiasts. Carefully and algorithmically generated 10,000 unique NFTs for all crypto lovers❤️
<br /><br />
All base layers are hand drawn. Each PunkShark contains a unique DNA ID stored on blockchain and will never be duplicated, deleted or stolen. All images and metadata information is permanently stored to a decentralized file storage system. All PunkShark HODLers have 100% right to use their NFTs in any way they want.
<br /><br />
<div className="mb-5">🔥Rarity:</div>

<div className="mb-5">🎁7 Types = Alien, Ape, Arctic, Ghost, Martian, Vampire and Zombie🎁</div>

<div className="mb-5">💚Common PunkSharks🦈</div>

<div className="mb-5">💙Uncommon = Octopus, Sailor, Frog, Birthday, Army and Pirate PunkSharks🦈</div>

<div className="mb-5">❤️Rare:</div>

<div className="mb-5">🎃Halloween Monster "Halloween Hat" - 92 PunkSharks🦈</div>

<div className="mb-5">🎅Christmas Angel "Christmas Hat" - 85 PunkSharks🦈</div>

<div className="mb-5">🐱‍👤Samurai Warrior "Samurai Hat" - 71 PunkSharks🦈</div>

<div className="mb-5">🎩Big Boss "Top Hat" - 76 PunkSharks🦈</div>

<div className="mb-5">🧐Golden Monocle - 121 PunkSharks🦈</div>

<div className="mb-5">🧐Black Monocle - 162 PunkSharks🦈</div>

<div className="mb-5">💖Super Rare "Rare+Rare" - 12 PunkSharks🦈</div>

<div className="mb-5">No Gas Fee!⛽</div>
</p>
        </div>

   </>
  )
}
