import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";

if (!projectId) {
  throw new Error(
    "Missing PUBLIC_SANITY_PROJECT_ID. Add it to Netlify environment variables and your local .env file."
  );
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
