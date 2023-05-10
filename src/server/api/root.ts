import { createTRPCRouter } from "~/server/api/trpc";
import { publicRouter } from "~/server/api/routers/public";
import { userRouter } from "~/server/api/routers/user";
import { adminRouter } from "~/server/api/routers/admin";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  public: publicRouter,
  user: userRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
