import Sliderr from './components/slider';
import Products from './components/products';


export default async function Home() {
  
  const res = await fetch('http://localhost:3000/api/posts'); 
  const posts = await res.json();

  return (
    <>
      <Sliderr/>
      <hr />
      <Products posts={posts} />
    </>
  );
}
