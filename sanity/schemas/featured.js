export default {
  name: "featured",
  type: "document",
  title: "featured",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restarurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
