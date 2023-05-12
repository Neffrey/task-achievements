import { z } from "zod";
import { addTaskSchema } from "~/components/forms/addTaskForm";
import { nameChangeSchema } from "~/components/forms/nameChangeFormModal";

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
    .input(z.object(nameChangeSchema))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          name: input.name,
        },
      });
    }),

  // TASK ROUTES
  getMyTasks: userProcedure.input(z.void()).query(({ ctx }) => {
    if (ctx.session.user.id)
      return ctx.prisma.task.findMany({
        where: { ownerId: ctx.session.user.id },
      });
    else return null;
  }),
  createTask: userProcedure
    .input(z.object(addTaskSchema))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.task.create({
        data: {
          ownerId: ctx.session.user.id,
          title: input.title,
          timeframe: input.timeframe,
          timesToComplete: input.timesToComplete,
          comment: input.comment ? input.comment : undefined,
        },
      });
    }),
});
