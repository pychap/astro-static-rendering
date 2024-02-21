import { defineCollection, reference, z } from "astro:content";
import roleSchema from "../schemas/roleSchema";
import teamSchema from "../schemas/teamSchema";
import postsSchema from "../schemas/postSchema";

const team = defineCollection({
  type: "data",
  schema: teamSchema,
})

const posts = defineCollection({
  type: "content",
  schema: postsSchema,
})

const role = defineCollection({
  type: "data",
  schema: roleSchema
})

export const collections = {
  team,
  posts,
  role
}