import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

import { Hero, Navbar, Mapbase, WhyClime } from "../components";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClimeCheck UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navbar />
          <Hero />
        </div>
        <Mapbase />
        <WhyClime />
      </div>
      <main className="main w-screen m-auto justify-center items-center">
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
