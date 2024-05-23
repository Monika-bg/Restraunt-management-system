import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  useEffect(() => {
    const createOrderId = async () => {
      try {
        const response = await axios.post("/create/orderId", {
          amount: totalPrice * 100,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setOrderId(response.data.orderId);
      } catch (error) {
        console.error("Error creating orderId:", error);
      }
    };

    if (totalPrice > 0) {
      createOrderId();
    }
  }, [totalPrice]);

  useEffect(() => {
    if (orderId) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: 'rzp_test_repeCzAdhpB8Cu',
          amount: totalPrice * 100,
          currency: 'INR',
          order_id: orderId,
          handler: function (response) {
            // Payment successful, verify the payment
            axios.post("/api/payment/verify", response)
              .then((verifyResponse) => {
                if (verifyResponse.data.signatureIsValid) {
                  console.log("Payment verified successfully");
                  // Proceed with further actions like updating UI, redirecting, etc.
                } else {
                  console.error("Payment verification failed: Invalid signature");
                }
              })
              .catch((error) => {
                console.error("Error verifying payment:", error);
              });
          },
          prefill: {
            name: 'User Name',
            email: 'user@example.com',
            contact: '9876543210',
          },
          notes: {
            address: 'User Address',
          },
          theme: {
            color: '#3399cc',
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
          console.error("Payment failed:", response.error.description);
        });
      };
    }
  }, [orderId, totalPrice]);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}>
        {/* Cart items display */}
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          {orderId && (
            <button
              id="rzp-button1"
              className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
            >
              Pay
            </button>
          )}
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;