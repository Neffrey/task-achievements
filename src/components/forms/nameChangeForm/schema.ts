import { z } from "zod";

// TYPES
export type SchemaKey = Extract<keyof typeof schema, string>;

// CONSTANTS
export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 30;

// SCHEMA
export const schema = {
  name: z
    .string()
    .min(NAME_MIN_LENGTH, {
      message: `Must be at least ${NAME_MIN_LENGTH} characters`,
    })
    .max(NAME_MAX_LENGTH, {
      message: `Must be ${NAME_MAX_LENGTH} characters or less`,
    }),
};
