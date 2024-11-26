// app/api/posts/route.js

export async function GET() {
    const posts = [
      { id: 1, title: 'Post 1', mainCategory: 'electronics', subCategory: 'laptops', slug: 'acer-laptop' },
      { id: 2, title: 'Post 2', mainCategory: 'electronics', subCategory: 'laptops', slug: 'dell-laptop' },
      { id: 3, title: 'Post 3', mainCategory: 'fashion', subCategory: 'shoes', slug: 'nike-shoes' },
      { id: 4, title: 'Post 4', mainCategory: 'electronics', subCategory: 'phones', slug: 'iphone-14' },
      { id: 5, title: 'Post 5', mainCategory: 'fashion', subCategory: 'clothing', slug: 'leather-jacket' },
    ];
  
    return new Response(JSON.stringify(posts), { status: 200 });
  }
  