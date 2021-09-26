import Head from "next/head";
import { PrismaClient } from "@prisma/client";

const Home = ({ posts }) => {
  return (
    <div style={{ margin: 60 }}>
      <Head>
        <title>Next.js + Prisma.io</title>
      </Head>
      <h1>Posts</h1>

      <p>
        Example of Next.js connection with Prisma.io to read MongoDB database.
      </p>

      {posts.map((post) => {
        return (
          <div key={post.id} style={{ marginTop: 40 }}>
            <h3>{post.title}</h3>
            <p style={{ fontSize: 16 }}>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return {
    props: { posts },
  };
}

export default Home;
