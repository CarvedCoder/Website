import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Website</title>
      </Head>

        <h1>Hello World</h1>
        {/*Header*/}
        <Header/>

        <main className ="max-w-screen-2xl mx-auto">
          {/*banners*/}
          <Banner />
          {/*Product feed*/}
        </main>
    </div>
  );
}



