import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", type: "string", validation: r => r.required() }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),

    defineField({
      name: "serviceArea",
      title: "Service Area",
      type: "array",
      of: [{ type: "string" }],
      description: "Ex: Greeley, Fort Collins, Loveland, Denver Metro…",
    }),

    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
      ],
    }),

    defineField({
      name: "social",
      type: "object",
      fields: [
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "nextdoor", type: "url" }),
      ],
    }),
  ],
});
