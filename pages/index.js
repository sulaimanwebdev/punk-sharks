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
     </Head>

     <div className="header px-7 sticky top-0 bg-white py-2 flex items-center justify-between">
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


   </>
  )
}
