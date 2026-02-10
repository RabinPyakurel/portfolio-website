import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-[#161b22]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Rabin Babu Pyakurel. Built with React.
          </p>
          <SocialLinks size="text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
