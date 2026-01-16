import { FaTruck, FaLeaf, FaClock, FaCreditCard } from 'react-icons/fa';

const featureData = [
  {
    id: 1,
    icon: <FaTruck className="text-primary text-4xl" />,
    title: "Free Express Shipping",
    desc: "Free delivery for all orders over $50. We deliver within 30 minutes to your doorstep.",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    icon: <FaLeaf className="text-secondary text-4xl" />,
    title: "100% Organic Products",
    desc: "Sourced directly from local farms. We ensure the highest quality and freshness standards.",
    bgColor: "bg-orange-50",
  },
  {
    id: 3,
    icon: <FaClock className="text-accent text-4xl" />,
    title: "24/7 Customer Support",
    desc: "Our dedicated team is always here to help you with your daily grocery needs anytime.",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    icon: <FaCreditCard className="text-info text-4xl" />,
    title: "Secure Fast Payment",
    desc: "100% secure payment processing with encrypted transactions for your safety.",
    bgColor: "bg-purple-50",
  }
];

export default function Features() {
  return (
    <section className="pt-20 bg-base-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-base-content">
            Why Choose <span className="text-primary">FreshUp?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide the best grocery shopping experience with a focus on quality, speed, and customer satisfaction.
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature) => (
            <div 
              key={feature.id}
              className="group p-10 rounded-[2.5rem] bg-base-100 border border-base-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}