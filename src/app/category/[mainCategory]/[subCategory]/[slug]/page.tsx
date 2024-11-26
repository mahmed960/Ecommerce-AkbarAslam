// src/app/category/[mainCategory]/[subCategory]/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function ProductSlugPage() {
  const { mainCategory, subCategory, slug } = useParams(); // Access mainCategory, subCategory, and slug parameters

  return (
    <div>
      <h1>Product: {slug} in {subCategory} under {mainCategory} category</h1>
      <p>Here, you can display details for the product {slug}.</p>
    </div>
  );
}
