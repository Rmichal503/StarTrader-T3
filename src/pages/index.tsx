import axios from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import CountdownTimer from "~/components/CountdownTimer.component";
import Travel from "~/components/Travel";
import { PlanetContext } from "~/context/planetContext";

const Home: NextPage = () => {
  const [status,setStatus] = useState('')
  const {planetState} = useContext(PlanetContext)
  // useEffect(() => {
  //   const travelStatus = async ()=>{
  //     const res = await axios.get('/api/actions/travel');
  //     const {player} = res.data
  //     console.log(res.data);
  //   }
  //   travelStatus()
  // }, [])
  console.log(planetState);
  return (
    <>
      <Head>
        <title>Trader</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/spaceship.svg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <CountdownTimer />
        <Travel/>
      </main>
    </>
  );
};

export default Home;
