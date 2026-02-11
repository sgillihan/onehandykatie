import groq from "groq";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  businessName,
  phone,
  email,
  serviceArea,
  defaultSeo,
  social
}`;
