import Link from "next/link";

const FirstPost = () => {
  return (
    <>
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
