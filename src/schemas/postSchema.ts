import { z, reference } from "astro:content";

const postsSchema = ({ image }) => z.object({
  title: z.string().max(60, {
    message: "Your title must be 60 characters or less.",
  }),
  pubDate: z.date(),
  isDraft: z.boolean(),
  tags: z.array(z.string()),
  canonicalURL: z.string().url().optional(),
  author: reference("team"),
  cover: image().refine((img) => img.width >= 600, {
    message: "Cover image must be at least 600 pixels wide!",
  }),
  coverAlt: z.string(),
})

export default postsSchema