import axiosInstance from "@/lib/axiosInstance";
import ProductCard from "@/Shared/ProductCard";

export default async function Products() {
  let featuredProducts = [];

  try {
    const response = await axiosInstance.get("/grocery");
    const { grocery } = response.data;
    featuredProducts = grocery?.slice(0, 8) || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <section className="pt-16 md:pt-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
              Best Sellers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-base-content mt-2">
              Popular Products on <span className="text-primary">FreshUp</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/20 text-sm font-bold uppercase w-full sm:w-auto">
              Best Rated
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full py-10 text-gray-400">
              No products found.
            </p>
          )}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="btn btn-outline btn-primary rounded-full px-10 sm:px-12 btn-md sm:btn-lg uppercase tracking-widest text-sm font-bold w-full sm:w-auto">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
