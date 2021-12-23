import Head from 'next/head'
import {useEffect, useState} from "react";
import FAQ from '../components/FAQ';

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
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"/>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
     </Head>

     <div className="header z-10 px-7 sticky top-0 bg-white py-2">
             <div className="mx-auto w-full widthMax flex items-center justify-between">
             <div className="logo"><a href="#" className="flex items-center gap-2 font-bold "><img src="/images/favicon.png" className="w-14" alt="Logo"/> <span className="opacity-80">Punk Sharks</span></a></div>

<nav className="flex items-center gap-20 font-bold">
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Home</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Project</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Games</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Rewards</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Stacking</a>
</nav>

<button className="px-5 py-3 bg-blue-500 cursor-pointer transition-colors hover:bg-blue-600 text-white font-bold rounded-md">Connect Wallet</button>

             </div>
     </div>



<div className="widthMax mb-20 mx-auto px-7 w-full mt-14">
<div className="flex">
<img src="/images/small-shark.png" alt="shark icon" className="w-10 mb-5"/>
<img src="/images/small-shark2.png" alt="shark icon" className="w-10 mb-5"/>
<img src="/images/favicon.png" alt="shark icon" className="w-10 mb-5"/>

</div>
<div className="font-bold text-5xl mb-7">The Punk Sharks</div>
<p className="opacity-90 aboutText mb-10">CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear</p>
<a href="#" className="px-5 py-5 bg-blue-500 transition hover:bg-blue-600 text-white font-bold rounded-lg">View On Opensea</a>
</div>



   
   <div className="cover w-full">
     <img src="/images/cover.png" alt="Cover Image" className="w-full select-none h-full object-cover object-center" />
   </div>


{/* main */}


        <div className="main text-center w-full px-7 mx-auto">
          <a href="https://opensea.io/collection/the-punksharks" target="_blank" className="profile w-28 h-28 mx-auto overflow-hidden rounded-full flex items-center justify-center"><img src="/images/profile.gif" alt="Profile" className="w-full h-full object-cover object-center" /></a>

         
        </div>




<div className="categories border h-96 flex items-center justify-center">
<div className="font-bold text-4xl opacity-70">Categories</div>
</div>











{/* FAQ */}
<div className="faq mt-20 mx-auto">
                <FAQ title="What does NFT Collection Comprise of?" />
                <FAQ title="How to get our NFT?" />
                <FAQ title="How much does our NFT cost?" />
                <FAQ title="Will you list your NFT on OpenSea?" />
                <FAQ title="What is a Rarity NFT?" />
                <FAQ title="What is a Rarity NFT?" />
</div>









<div className="bg-blue-500 w-full pt-20 pb-24 mt-28">
<div className="w-full widthMax mx-auto px-7">
<div className="font-bold w-fit text-4xl mx-auto text-white mb-20">Our Family</div>

<div className="flex items-center gap-10 text-white">
<div className="familyImage rounded-lg overflow-hidden"><img src="/images/family1.png" alt="Shark" className="w-full h-full object-cover object-center" /></div>
<div>
  <div className="font-bold text-white text-xl mb-3">Cyber Shark</div>
  <p className="mb-5 opacity-90">CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look</p>
  <ul className="list-disc opacity-90 transform translate-x-5">
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
  </ul>
</div>
</div>





<div className="flex items-center gap-10 text-white mt-28">
<div className="familyImage rounded-lg overflow-hidden"><img src="/images/family2.png" alt="Shark" className="w-full h-full object-cover object-center" /></div>
<div>
  <div className="font-bold text-white text-xl mb-3">Baby Shark</div>
  <p className="mb-5 opacity-90">CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look</p>
  <ul className="list-disc opacity-90 transform translate-x-5">
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
  </ul>
</div>
</div>







<div className="flex items-center gap-10 text-white mt-28">
<div className="familyImage rounded-lg overflow-hidden"><img src="/images/family3.png" alt="Shark" className="w-full h-full object-cover object-center" /></div>
<div>
  <div className="font-bold text-white text-xl mb-3">Hungry Shark</div>
  <p className="mb-5 opacity-90">CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look</p>
  <ul className="list-disc opacity-90 transform translate-x-5">
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
    <li>Some text that can be changed as per requirments</li>
  </ul>
</div>
</div>








</div>
</div>






<div className="widthMax mx-auto px-7 w-full mt-20">
<div className="font-bold w-fit text-3xl mx-auto mb-12">Future Direction</div>
<div className="font-bold text-xl mb-3">PunkSharks & Beyond</div>
<p className="opacity-90">CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar! CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar!</p>
</div>





<div className="widthMax mx-auto px-7 w-full mt-20">
<div className="font-bold w-fit text-3xl mx-auto mb-12">Future Direction</div>


<div className="grid grid-cols-3 gap-4 w-full">
  <div className="h-20 mb-20 bg-red-300"></div>
  <div className="h-20 mb-20 bg-red-300"></div>
  <div className="h-20 mb-20 bg-red-300"></div>
  <div className="h-20 mb-20 bg-red-300"></div>
  <div className="h-20 mb-20 bg-red-300"></div>
  <div className="h-20 mb-20 bg-red-300"></div>

</div>






</div>




   </>
  )
}
