import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="my-text-60">Hello Next Js</h1>
      <p className="text-center">Next.js is an open-source React framework created by Vercel that simplifies the process of building fast, server-rendered applications with React. It combines the best of both server-side rendering (SSR) and static site generation (SSG), enabling developers to create dynamic, highly optimized web applications. With features like automatic code splitting, API routes, and built-in CSS and Sass support, Next.js streamlines development while offering excellent performance and scalability. Its ability to handle both SSR and SSG makes it ideal for a wide range of use cases, from content-heavy sites to complex web applications.</p>
    </main>
  );
}
