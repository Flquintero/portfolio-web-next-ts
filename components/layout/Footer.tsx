const Footer = () => {
  const currentData = new Date();
  const currentYear = currentData.getFullYear();
  return (
    <footer>
      <div className="h-16 text-center">
        <small>Built with ❤️ in React+Next, TypeScript and Tailwind</small>
        <br />
        <small>Francisco Quintero Abbo © {currentYear} </small>
      </div>
    </footer>
  );
};

export default Footer;
