import React from "react";
import { Search, ShoppingBag, User, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  image,
  className = "",
}) => {
  
  return (
    <div
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
    >
      <Link href="/category">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white text-3xl md:text-4xl font-bold leading-tight">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 group-hover:bg-opacity-30 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const EcommerceHomepage: React.FC = () => {
//   const navLinks = [
//   { label: "HOME", href: "/" },
//   { label: "SHOP", href: "/category" },
//   { label: "CONTACT US", href: "/contact-us" },
// ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        
        
        <nav className="border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-8 max-md:hidden py-2">
              <ul className="flex space-x-8">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 whitespace-nowrap text-sm font-medium transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header> */}

      {/* Main Content */}
      <main className="max-md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex max-md:flex-col lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">
          {/* Winter Arrival - Large Card */}
          <CategoryCard
            title="Monitor Health."
            subtitle="Live Better."
            image="/images/Winter.jpg"
            className="w-2/3 max-md:w-full lg:row-span-2"
          />

          {/* Top Cosmetics */}
          <CategoryCard
            title="Your Health,"
            subtitle="Precisely Measured."
            image="/images/Cosmetics.jpg"
            className="w-1/3 max-md:w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Gadgets On The Go */}
          <CategoryCard
            title="Smart Scales,"
            subtitle="Healthier You."
            image="/images/Gadgets.jpg"
            className="h-[300px]"
          />

          {/* Sport Footwear */}
          <CategoryCard
            title="Track Vitals."
            subtitle="Stay Healthy."
            image="/images/Sport.jpg"
            className="h-[300px]"
          />
        </div>
      </main>
    </div>
  );
};

export default EcommerceHomepage;
