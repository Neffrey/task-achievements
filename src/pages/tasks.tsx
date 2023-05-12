// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";
import type { User } from "@prisma/client";

// TRPC
import { api } from "~/utils/api";

// COMPONENTS
import IfUser from "~/components/helpers/ifUser";
import TasksAuthed from "~/components/page-templates/tasksAuthed/tasksAuthed";
import PageUnauthed from "~/components/page-templates/pageUnauthed";
import { LoadingPage } from "~/components/templates/loading";

// Types
export type UserProps = {
  user: User | undefined;
};

// PAGE
const Tasks: NextPage = () => {
  // TRPC
  const { data } = api.user.getMyUser.useQuery();
  const user = data ? data : undefined;

  const headTitle = user?.name
    ? `${user.name}'s Account Details`
    : "Sign into your account";
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="View & Edit Tasks" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="min-w-full">
        {IfUser(<TasksAuthed />, <PageUnauthed />, <LoadingPage />)}
      </main>
    </>
  );
};

export default Tasks;
