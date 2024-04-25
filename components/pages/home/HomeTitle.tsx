import Image from 'next/image';
import Link from 'next/link';

export default function HomeTitle() {
  return (
    <div className="p-6 flex flex-col justify-start md:justify-center items-center text-center">
      <article>
        <Image
          src="/profile-picture.png"
          className="mx-auto mb-4 rounded-full border border-slate-50 shadow"
          width="175"
          height="175"
          alt="The photo is of the author of the page Francisco Quintero"
        />
        <h1 className="text-6xl font-light mb-4">Francisco Quintero Abbo</h1>
        <h2 className="text-3xl font-extralight">Software Engineer</h2>
        <div className="w-24 flex justify-evenly mx-auto mt-4">
          <Link href="https://github.com/Flquintero" target="_blank">
            <Image
              src="/github.svg"
              className="rounded-full"
              width="35"
              height="35"
              alt="Fancisco's Image"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fquinteroa/" target="_blank">
            <Image
              src="/linkedin.svg"
              className="rounded-full"
              width="35"
              height="35"
              alt="Fancisco's Image"
            />
          </Link>
        </div>
      </article>
    </div>
  );
}
