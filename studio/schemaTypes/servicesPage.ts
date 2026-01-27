import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Services",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro Text",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "fixTitle",
      title: "Fix: Section Title",
      type: "string",
      initialValue: "Home Repairs and Handywoman Services",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fixBody",
      title: "Fix: Section Body",
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

    defineField({
      name: "adviseTitle",
      title: "Advise: Section Title",
      type: "string",
      initialValue: "Advice on Home Repair Projects",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "adviseBody",
      title: "Advise: Section Body",
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

    defineField({
      name: "manageTitle",
      title: "Manage: Section Title",
      type: "string",
      initialValue: "Project Management",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "manageBody",
      title: "Manage: Section Body",
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
});
