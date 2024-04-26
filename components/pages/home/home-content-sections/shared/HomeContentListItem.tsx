const HomeContentListItem = () => {
  return (
    <section className="w-full flex border py-3 mb-5 shadow-sm rounded-lg">
      <div className="w-1/6 flex justify-center items-center">Logo</div>
      <div className="w-4/6 flex flex-col md:flex-row">
        <div>
          <div>Co-Founder & Full Stack Developer</div>
          <div>Company Name</div>
        </div>
        <div className="grow flex justify-start md:justify-center md:items-center">
          Badge
        </div>
      </div>
      <div className="w-1/6 flex justify-center items-center mx-3">
        <span>01/23 - Present</span>
      </div>
    </section>
  );
};
export default HomeContentListItem;
