"use client";
import React, { useEffect, useState } from "react";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import SingleItem from "./SingleItem";
import Link from "next/link";
import EmptyCart from "./EmptyCart";
import { CartService } from "@/services/CartServices";
import { formatCurrency } from "@/utils/format";

const CartSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // ✅ Hàm xoá item và tự cập nhật tổng tiền
  const handleRemoveItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // ✅ Tính tổng tiền mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  }, [cartItems]);

  // ✅ Lấy dữ liệu giỏ hàng từ server
  const fetchDatacart = async () => {
    try {
      const cookies = document.cookie
        .split("; ")
        .find(row => row.startsWith("sessionToken="));
      if (!cookies) {
        console.log("Không có sessionToken — bỏ qua gọi API giỏ hàng");
        return;
      }
      const response = await CartService.getCart("/api/Cart/by-user");
      if (response.success) {
        setCartItems(response.result.products);
        setTotalPrice(response.result.totalPrice);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDatacart();

    // Đóng modal khi click ra ngoài
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartModalOpen, closeCartModal]);

  return (
    <div
      className={`fixed top-0 left-0 z-99999 overflow-y-auto no-scrollbar w-full h-screen bg-dark/70 ease-linear duration-300 ${isCartModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex items-center justify-end">
        <div className="w-full max-w-[500px] shadow-1 bg-white px-4 sm:px-7.5 lg:px-11 relative modal-content">
          <div className="sticky top-0 bg-white flex items-center justify-between pb-7 pt-4 sm:pt-7.5 lg:pt-11 border-b border-gray-3 mb-7.5">
            <h2 className="font-medium text-dark text-lg sm:text-2xl">
              Giỏ hàng
            </h2>
            <button
              onClick={closeCartModal}
              aria-label="Đóng"
              className="flex items-center justify-center ease-in duration-150 bg-meta text-dark-5 hover:text-dark"
            >
              ✕
            </button>
          </div>

          <div className="h-[66vh] overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              {cartItems.length > 0 ? (
                cartItems.map((item, key) => (
                  <SingleItem
                    key={key}
                    item={item}
                    onRemove={handleRemoveItem}
                  />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>

          <div className="border-t border-gray-3 bg-white pt-5 pb-4 sm:pb-7.5 lg:pb-11 mt-7.5 sticky bottom-0">
            <div className="flex items-center justify-between gap-5 mb-6">
              <p className="font-medium text-xl text-dark">Tổng tiền:</p>
              <p className="font-medium text-xl text-dark">
                {formatCurrency(totalPrice)}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                onClick={closeCartModal}
                href="/cart"
                className="w-full flex justify-center font-medium text-white bg-blue py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                Xem chi tiết giỏ hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebarModal;
