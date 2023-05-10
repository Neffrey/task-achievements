// LIBRARIES
import { z } from "zod";
import { Role } from "@prisma/client";

// COMPONENTS
import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";

// API URL

// CREATE ROUTER
export const adminRouter = createTRPCRouter({
  // ADMIN ONLY
  // USER ROUTES
  getAllUsers: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  updateUser: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        role: z.nativeEnum(Role),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
          role: input.role,
        },
      });
    }),
  deleteUser: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.delete({ where: { id: input.id } });
    }),
});
