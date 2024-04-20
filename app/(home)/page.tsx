import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <article className="text-center">
        <Image
          src="/profile-picture.png"
          className="rounded-full mx-auto mb-4"
          width="250"
          height="250"
          alt="Fancisco's Image"
        />
        <h1 className="text-6xl font-light	 mb-4">Francisco Quintero</h1>
        <h2 className="text-2xl font-extralight">
          Being Built in Next, Typescript and Tailwind
        </h2>
      </article>
    </main>
  );
}
