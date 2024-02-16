import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Simple Blog</title>
      </Head>
      <main>
        <h1>Simple Blog</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
