import Sliderr from './components/slider';
import Products from './components/products';


export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts`);
  const posts = await res.json();

  return (
    <>
      <Sliderr/> 
      
      <Products posts={posts}/>
    </>
  );
}
