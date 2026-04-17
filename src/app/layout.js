import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-white flex-col min-h-screen">
        {/* নেভবার এখানে থাকলে সব পেজে দেখাবে */}
        <Navbar /> 

        {/* children এর জায়গায় শুধু মাঝখানের পেজগুলো (Home, Details) লোড হবে */}
       
<main className="flex-grow bg-white"> {/* এখানে bg-gray-50 এর বদলে bg-white দিন অথবা আপনার পেজের ব্যাকগ্রাউন্ডের সাথে মিলিয়ে নিন */}
  {children}
</main>

        {/* ফুটার এখানে থাকলে সব পেজে ফিক্সড থাকবে */}
        <Footer />
      </body>
    </html>
  );
}