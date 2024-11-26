import Sliderr from './components/slider';
import Products from './components/products';

export default async function Home() {
  // Use environment variable for API URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/posts'; 
  const res = await fetch(apiUrl); 
  const posts = await res.json();

  return (
    <>
      <Sliderr/>
      <hr />
      <Products posts={posts} />
    </>
  );
}
