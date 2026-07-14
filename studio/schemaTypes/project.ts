import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers show first. Leave blank to sort newest first.",
      type: "number",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      description: "Before/after or progress photos for this project, in the order they should appear.",
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
    defineField({
      name: "body",
      title: "Project Write-up",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "photos.0.image" },
  },
});
