import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: "Organic Vegetables",
    image: "https://d1hm90tax3m3th.cloudfront.net/web/vegetables.jpg",
    color: "bg-green-50"
  },
  {
    id: 2,
    name: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=400",
    color: "bg-orange-50"
  },
  {
    id: 3,
    name: "Dairy & Bakery",
    image: "https://plus.unsplash.com/premium_photo-1664391718852-4631572e3fec?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-blue-50"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqNMB1ZOe6hH9XQb1GGRAX1zePHApIkxsA&s",
    color: "bg-red-50"
  },
  {
    id: 5,
    name: "Frozen Foods",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400",
    color: "bg-cyan-50"
  },
  {
    id: 6,
    name: "Natural Beverages",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOFBoSuCZzHngxMwOM7A_cPLSFmH6jDPuPg&s",
    color: "bg-purple-50"
  }
];

export default function Category() {
  return (
    <section className="pt-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Specialties</span>
          <h2 className="text-3xl md:text-5xl font-black text-base-content leading-tight">
            Shop by <span className="text-primary">Categories</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className={`group flex flex-col items-center p-8 rounded-[2.5rem] ${cat.color} border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-500 cursor-default`}
            >
              <div className="w-24 h-24 mb-6 relative overflow-hidden rounded-full bg-white shadow-sm ring-4 ring-white group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}