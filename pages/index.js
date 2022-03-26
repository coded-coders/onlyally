import Head from "next/head";
import Image from "next/image";
import Stories from "../components/Stories";
import NewsFeed from "../components/NewsFeed";
import NewsFeedSideBar from "../components/NewsFeedSideBar";
import SideNavLayout from "../components/SideNavLayout";
import { getSession } from "next-auth/react";

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <SideNavLayout>
        <main className=" p-0.5 lg:p-5">
          <Stories />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <NewsFeed />
            <NewsFeedSideBar />
          </div>
        </main>
      </SideNavLayout>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
