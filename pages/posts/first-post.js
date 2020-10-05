import Link from "next/link";
import Head from "next/head";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>FIRST POST</h1>
      <h2>
        {" "}
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
