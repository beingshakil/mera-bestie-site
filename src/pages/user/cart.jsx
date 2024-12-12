import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../../components/user/cart/Cartitems";
import RecentlyViewed from "../../components/user/cart/recentlyviewed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

const ShoppingCartPage = () => {
  return (
    <>
      <Helmet>
        <title>Shopping Cart | Mera Bestie</title>
      </Helmet>

      <Navbar />

      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header Section */}
        <div className="bg-pink-100 p-4 rounded-md">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Shopping Cart</h2>
          <Link
            to="/shop"
            className="flex items-center text-sm md:text-base text-pink-500 font-semibold hover:text-pink-800"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Continue Shopping
          </Link>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-6">
          <CartItems />
        </div>

        {/* Recently Viewed Products */}
        <RecentlyViewed />
      </div>
    </>
  );
};

export default ShoppingCartPage;
