const Footer = () => {
  return (
    <footer className="bg-[#040F2D] text-white py-10 px-4 text-center ">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo */}
        <div className="text-orange-500 text-3xl font-bold flex items-center space-x-2">
          <img src="/images/ieee-logo.png" alt="IEEE" className="h-20 w-30" />
          <div className="text-left p-5">
            <div className="text-yellow-400 text-3xl">IEEE</div>
            <div className="text-orange-500 text-sm font-medium -mt-1">MANIT Student Branch</div>
          </div>
        </div>

        {/* Quote */}
        <p className="max-w-3xl text-sm text-gray-300 leading-relaxed p-3">
          Whether you are starting out or at the very height of your career, these are the stepping stones of your
          professional path. No matter where you are in your journey, IEEE can help you find your path.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com/IEEEMANIT/" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition rounded">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/ieee_manit/" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition rounded">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/ieeemsb" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition rounded">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/ieeenitb/" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition rounded">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          Copyright © 2022 All Rights Reserved by <span className="font-semibold text-white">IEEE MSB</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
