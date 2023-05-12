import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tasks by Neffrey</title>
        <meta
          name="description"
          content="Lil task manager I made for me and you <3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary to-accent">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Tasks by Neffrey
          </h1>
          <p className="text-xl font-extrabold tracking-tight text-white">
            Just a quick little customizable task tracker
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/tasks">
              <button className="btn-primary btn rounded-md bg-primary-focus px-8 py-4 font-bold text-white hover:bg-primary">
                View Tasks
              </button>
            </Link>
            <Link href="/account">
              <button className="btn-primary btn rounded-md bg-primary-focus px-4 py-2 font-bold text-white hover:bg-primary">
                View My Account
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
