import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-screen p-8 flex flex-col justify-start md:justify-center items-center">
      <article className="text-center">
        <Image
          src="/profile-picture.png"
          className="mx-auto mb-4 rounded-full border border-slate-50 shadow"
          width="250"
          height="250"
          alt="Fancisco's Image"
        />
        <h1 className="text-6xl font-light	 mb-4">Francisco Quintero Abbo</h1>
        <h2 className="text-3xl font-extralight">Software Engineer</h2>
        <div className="w-40 flex justify-evenly mx-auto mt-4">
          <Link href="https://github.com/Flquintero" target="_blank">
            <Image
              src="/github.svg"
              className="rounded-full"
              width="50"
              height="50"
              alt="Fancisco's Image"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fquinteroa/" target="_blank">
            <Image
              src="/linkedin.svg"
              className="rounded-full"
              width="50"
              height="50"
              alt="Fancisco's Image"
            />
          </Link>
        </div>
      </article>
      <footer className="mt-auto mb-0 mx-auto">
        <p className="text-1xl font-extralight text-center">
          Site being built in React+Next, TypeScript and Tailwind
        </p>
      </footer>
    </main>
  );
}
