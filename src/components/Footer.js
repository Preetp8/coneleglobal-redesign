const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Conele Global. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Outstanding Quality, Innovation, and Services.</p>
      </div>
    </footer>
  );
};

export default Footer;
