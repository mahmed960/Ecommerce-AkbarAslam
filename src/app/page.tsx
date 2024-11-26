import Sliderr from './components/slider';
import Products from './components/products';

async function getPosts() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/posts';
  const res = await fetch(apiUrl);

  if (!res.ok) {
    console.error("Failed to fetch data from API");
    return []; // Return empty array if fetch fails
  }

  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Sliderr />
      <hr />
      <Products posts={posts} />
    </>
  );
}
