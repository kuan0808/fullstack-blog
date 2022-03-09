import Head from "next/head";

const posts = [
  { title: "Hello Next.js", excerpt: "This is my first post" },
  { title: "Hello Tailwind", excerpt: "Learn Next with Tailwind" },
];

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
