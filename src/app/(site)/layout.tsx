"use client";
import { useState, useEffect } from "react";
import { Inter } from 'next/font/google';
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { AppProvider } from "../context/AppContext";

<<<<<<< HEAD
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
<<<<<<< HEAD
        <ReduxProvider>
          <ModalProvider>
            <CartModalProvider>
              <PreviewSliderProvider>
                <PreLoader />
                <Header />
=======
=======
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'vietnamese'], // Thêm "vietnamese" để hỗ trợ tiếng Việt
  weight: ['300', '400', '500', '600', '700'], // Các trọng lượng tương ứng với mã ban đầu
  style: ['normal', 'italic'], // Hỗ trợ cả normal và italic
  display: 'swap', // Tối ưu hóa tải font
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
>>>>>>> 24bb53b (sadsdasdsa)
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <AppProvider>
              <ReduxProvider>
                <ModalProvider>
                  <CartModalProvider>
                    <PreviewSliderProvider>
                      <PreLoader />
                      <Header />
<<<<<<< HEAD
<<<<<<< HEAD
                    </AppProvider>
                    {children}
>>>>>>> 3323cab (sadada)

                {children}

                <Footer />
                <ScrollToTop />

                {/* Các modal toàn cục */}
                <QuickViewModal />
                <CartSidebarModal />
                <PreviewSliderModal />
              </PreviewSliderProvider>
            </CartModalProvider>
          </ModalProvider>
        </ReduxProvider>
=======
=======

>>>>>>> f57cedb (zXzxz)
                      {children}

                      <Footer />
                      <ScrollToTop />

                      {/* Các modal toàn cục */}
                      <QuickViewModal />
                      <CartSidebarModal />
                      <PreviewSliderModal />
                    </PreviewSliderProvider>
                  </CartModalProvider>
                </ModalProvider>
              </ReduxProvider>
            </AppProvider>
          </>
        )}
>>>>>>> 24bb53b (sadsdasdsa)
      </body>
    </html>
  )
}
