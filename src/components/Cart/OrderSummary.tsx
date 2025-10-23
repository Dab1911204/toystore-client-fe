import { formatCurrency } from "@/utils/format";
import React from "react";

interface CartItem {
  product: {
    id: string;
    name: string;
    discountedPrice: number;
  };
  quantity: number;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="lg:max-w-[455px] w-full">
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Tóm tắt đơn hàng</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* Title */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Sản phẩm</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">Tổng tiền</h4>
            </div>
          </div>

          {/* Product items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-5 border-b border-gray-3"
            >
              <div>
                <p className="text-dark">{item.product.name}</p>
              </div>
              <div>
                <p className="text-dark text-right">
                  {formatCurrency(item.product.discountedPrice * item.quantity)}
                </p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg text-dark">Thành tiền</p>
            </div>
            <div>
              <p className="font-medium text-lg text-dark text-right">
                ${formatCurrency(totalPrice)}
              </p>
            </div>
          </div>

          {/* Checkout button */}

        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
