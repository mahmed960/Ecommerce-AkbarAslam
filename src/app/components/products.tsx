import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string;
  title: string;
  mainCategory: string;
  subCategory: string;
  slug: string;
}

interface ProductsProps {
  posts: Post[];
}

const Products = ({ posts }: ProductsProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">All Posts</h1>

      {/* Grid to hold cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <Link href={`/collection/${post.mainCategory}/${post.subCategory}/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src="https://www.akbaraslam.com/cdn/shop/files/1O9A8525_x800.jpg?v=1728646042"
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                <strong>{post.mainCategory}</strong> &gt; {post.subCategory}
              </p>

              <Link
                href={`/collection/${post.mainCategory}/${post.subCategory}/${post.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
