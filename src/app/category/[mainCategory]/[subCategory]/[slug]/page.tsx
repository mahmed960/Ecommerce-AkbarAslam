'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProductSlugPage() {
  const { mainCategory, subCategory, slug } = useParams(); // Access mainCategory, subCategory, and slug parameters

  return (
    <section  className='container flex flex-col justify-between'>
      <h1>
        This Detail Page 
        

      </h1>
    <a href="#" className="group block">
      <div className="card" style={{ width: '18rem' }}>
        {/* Dynamic Image based on the slug */}
        <Image
          src={`https://www.akbaraslam.com/cdn/shop/files/1O9A8525_x800.jpg?v=1728646042`} // Change this to a dynamic image URL if needed
          className="card-img-top h-[350px] w-full object-cover sm:h-[450px]"
          alt={`Image of ${slug}`}
          width={400}
          height={350}
        />
        <div className="mt-3 flex justify-between text-sm">
          <div>
            {/* Product Title */}
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              Product: {slug}
            </h3>
            {/* Product Description */}
            <p className="mt-1.5 text-xs text-gray-500">
              Product details for {slug} in the {subCategory} category under {mainCategory}.
            </p>
          </div>
          {/* Price (Example: Add dynamic price if applicable) */}
          <p className="text-gray-900">$299</p>
        </div>
      </div>
    </a>
    </section>
  );
}
