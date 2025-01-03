const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-14 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">About Our Cakes</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at aliquam odio. Ut fermentum felis nec nisi tincidunt, sit amet
            vulputate turpis auctor. Experience the joy of freshly baked cakes
            crafted with love.
          </p>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Blog</h2>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
