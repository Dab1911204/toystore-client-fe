import React, { useState } from "react";

const CustomerInfo = () => {
    const [formData, setFormData] = useState({
        phone: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Xử lý dữ liệu form ở đây, ví dụ gửi API hoặc lưu state
        console.log("Thông tin khách hàng:", formData);
    };

    return (
        <div className="lg:max-w-[670px] w-full">
            <form onSubmit={handleSubmit}>
                <div className="bg-white shadow-1 rounded-[10px]">
                    <div className="border-b border-gray-3 py-5 px-4 sm:px-5.5">
                        <h3>Thông tin khách hàng</h3>
                    </div>

                    <div className="py-8 px-4 sm:px-8.5">
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Số điện thoại"
                                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                            />

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Địa chỉ"
                                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20 resize-none"
                                rows={3}
                            />

                            <button
                                type="submit"
                                className="inline-flex font-medium text-white bg-blue py-3 px-8 rounded-md ease-out duration-200 hover:bg-blue-dark "
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CustomerInfo;
