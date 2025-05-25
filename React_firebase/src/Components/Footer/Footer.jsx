import React from "react";

const footerData = [
  {
    title: "About Us",
    links: ["Our Story", "Team", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: ["Web Development", "App Development", "SEO", "Marketing"],
  },
  {
    title: "Products",
    links: ["Product 1", "Product 2", "Product 3"],
  },
  {
    title: "Support",
    links: ["FAQ", "Help Center", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerData.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
            <ul className="space-y-2">
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
