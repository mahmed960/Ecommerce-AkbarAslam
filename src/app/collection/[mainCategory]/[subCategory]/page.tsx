// src/app/category/[mainCategory]/[subCategory]/page.tsx
'use client';

import { useParams } from 'next/navigation';

export default function SubCategoryPage() {
  const { mainCategory, subCategory } = useParams(); // Access mainCategory and subCategory parameters

  return (
    <div>
      <h1>Category: {mainCategory} - Sub Category: {subCategory}</h1>
      <p>Display products or posts for {subCategory} under {mainCategory}</p>
    </div>
  );
}
