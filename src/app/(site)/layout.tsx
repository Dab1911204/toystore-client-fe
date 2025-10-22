"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
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
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <AppProvider>
                      <Header />
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
      </body>
    </html>
  );
}
