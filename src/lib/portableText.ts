import { toHTML } from "@portabletext/to-html";

export function renderPT(value: any) {
  if (!value) return "";
  return toHTML(value);
}
