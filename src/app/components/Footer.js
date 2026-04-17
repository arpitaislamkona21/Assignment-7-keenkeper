import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#064e3b] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold mb-2">
          Keen<span className="font-extrabold text-white">Keeper</span>
        </h2>
        <p className="text-white mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="py-2.5">
          <p>Social Links</p>
          <div className="flex justify-center gap-4 py-2.5 mb-8">
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
              <FaFacebookF className="text-white text-xs" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
              <FaInstagram className="text-white text-xs" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
              <FaTwitter className="text-white text-xs" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[10px] opacity-60 border-t border-white/10 pt-6">
          <span>© 2024 KeenKeeper. All rights reserved.</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}