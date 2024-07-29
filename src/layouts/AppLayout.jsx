import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="px-3  md:px-6 mt-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
