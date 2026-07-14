import groq from "groq";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  businessName,
  phone,
  email,
  serviceArea,
  address,
  defaultSeo,
  social
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc){
  title,
  body,
  "photos": photos[]{
    caption,
    "imageUrl": image.asset->url
  }
}`;
