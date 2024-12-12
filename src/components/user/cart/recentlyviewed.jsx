import React from "react";
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';

const RecentlyViewed = () => {
  const products = [
    { id: 1, name: "Customized Journal", price: 199, image: img1 },
    { id: 2, name: "Floral Greeting Card Set", price: 289, image: img2 },
    { id: 3, name: "Premium Leather Diary", price: 289, image: img3 },
    { id: 4, name: "Eco-Friendly Pen Pack", price: 289, image: img4 },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Recently Viewed Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-md overflow-hidden mb-4 flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h4 className="font-medium text-lg text-gray-800 mb-2">{product.name}</h4>
            <p className="text-gray-500 text-base">
              <span className="line-through text-gray-400 text-sm">₹̶{product.price + 50}</span> Rs. {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
