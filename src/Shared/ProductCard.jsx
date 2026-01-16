import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-base-100 rounded-[2rem] border border-base-200 p-5 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 cursor-pointer flex flex-col">
      <div className="relative w-full mb-4 overflow-hidden rounded-[1.5rem] bg-base-200 aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-content px-3 py-1 rounded-lg text-xs font-bold">
            {product.discount}% OFF
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 space-y-3">
        <h3 className="text-lg font-bold text-base-content leading-tight overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 font-medium">{product.weight}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-black text-primary">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
          )}
        </div>

        <Link 
          href={`/items/${product.id}`} 
          className="btn btn-primary rounded-lg w-full text-center mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
