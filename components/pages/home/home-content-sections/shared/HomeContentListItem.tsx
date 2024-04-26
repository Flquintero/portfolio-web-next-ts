import Image from 'next/image';

const HomeContentListItem = () => {
  return (
    <section className="w-full flex border py-3 mb-5 shadow-sm rounded-lg">
      <div className="w-20 flex justify-center items-center">
        <Image
          src="icons/social-media/linkedin.svg"
          className="rounded-full"
          width="40"
          height="40"
          alt="Linkedin Icon"
        />
      </div>
      <div className="w-4/6 flex flex-col md:flex-row">
        <div>
          <div>Co-Founder & Full Stack Developer</div>
          <div>Company Name</div>
        </div>
      </div>
      <div className="w-1/6 flex justify-center items-center mx-5">
        <span>01/23 - Present</span>
      </div>
    </section>
  );
};
export default HomeContentListItem;
