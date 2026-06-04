import { defineType, defineField } from "sanity";

export const homepageGallery = defineType({
  name: "homepageGallery",
  title: "Home Page Gallery",
  type: "document",
  fields: [
    defineField({
      name: "photos",
      title: "Project Photos",
      description: "Photos shown in the scrollable gallery on the home page.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "caption", media: "image" },
            prepare({ title, media }: { title?: string; media?: unknown }) {
              return { title: title ?? "Untitled photo", media };
            },
          },
        },
      ],
    }),
  ],
});
