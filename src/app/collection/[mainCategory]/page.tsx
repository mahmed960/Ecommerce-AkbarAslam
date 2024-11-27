'use client';

import { useParams } from 'next/navigation';

export default function MainCategoryPage() {
  
  const { mainCategory } = useParams(); 

  return (
    <div>
      <h1>Main Category: {mainCategory}</h1>
      <p>Here, you can display the posts or products for {mainCategory}</p>
      {/* You can render all posts related to this category */}
    </div>
  );
}
