import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginModal from "@/components/LoginModal";
import LoginProvider from "@/redux/provider"
export default function RootLayout({ children }) {
  return (
        <LoginProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <LoginModal />
        </LoginProvider>
  );
}