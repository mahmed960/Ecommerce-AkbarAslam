// app/api/posts/route.js

export async function GET() {
    const posts = [
      { id: 1, title: 'Product 1', mainCategory: '11.11-Sale', subCategory: 'subcategory', slug: 'Solene' },
      { id: 2, title: 'Product 2', mainCategory: 'Co-Ords', subCategory: '', slug: 'calista' },
      { id: 3, title: 'Product 3', mainCategory: 'Lawn', subCategory: '', slug: 'calista-new' },
      { id: 4, title: 'Product 4', mainCategory: 'Formals', subCategory: '', slug: 'calista-old' },
      { id: 5, title: 'Product 5', mainCategory: 'Pret', subCategory: '', slug: 'leather-jacket' },
    ];
    return new Response(JSON.stringify(posts), { status: 200 });
  }
  