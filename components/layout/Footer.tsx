const Footer = () => {
  const currentData = new Date();
  const currentYear = currentData.getFullYear();
  return (
    <footer>
      <div className="h-16 font-extralight text-center">
        <small>Built with ❤️ using React+Next, TypeScript and Tailwind</small>
        <br />
        <small>Francisco Quintero Abbo © {currentYear} </small>
      </div>
    </footer>
  );
};

export default Footer;
