import { z } from "zod";
import { schema as NameChangeSchema } from "~/components/forms/nameChangeForm/schema";

import { createTRPCRouter, userProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // USER ROUTES
  getMyUser: userProcedure.input(z.void()).query(({ ctx }) => {
    if (ctx.session.user.id)
      return ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
      });
    else return null;
  }),
  changeName: userProcedure
    .input(z.object(NameChangeSchema))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          name: input.name,
        },
      });
    }),
});
