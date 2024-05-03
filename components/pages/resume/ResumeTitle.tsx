import Image from 'next/image';
import Link from 'next/link';

const ResumeTitle = () => {
  return (
    <div className="px-6 pt-6 pb-3 flex flex-col justify-start md:justify-center items-center text-center">
      <article>
        <Image
          src="/profile-picture.png"
          className="duration-75 mx-auto mb-4 rounded-full border-2 border-slate-900 shadow"
          width="175"
          height="175"
          alt="The photo is of the author of the page Francisco Quintero"
        />
        <h1 className="text-6xl font-light mb-4">Francisco Quintero Abbo</h1>
        <h2 className="text-3xl font-extralight">Software Engineer</h2>
        <div className="w-24 flex justify-evenly mx-auto mt-4">
          <Link href="https://github.com/Flquintero" target="_blank">
            <Image
              src="icons/social-media/github.svg"
              className="rounded-full"
              width="35"
              height="35"
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fquinteroa/" target="_blank">
            <Image
              src="icons/social-media/linkedin.svg"
              className="rounded-full"
              width="35"
              height="35"
              alt="Linkedin Icon"
            />
          </Link>
        </div>
        {/* To Do: Next iteration */}
        {/* <button className="my-4">Download Resume</button> */}
      </article>
    </div>
  );
};
export default ResumeTitle;
