import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'array',
      of : [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping and hotspot selection
      },
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block', // Allows rich text with headings, lists, etc.
        },
      ],
    }),
    defineField({
      name: 'problemOpportunity',
      title: 'Problem/Opportunity',
      type: 'text', // Use "text" for multi-line input
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'string' }], // Array of bullet points
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }], // Array of stack labels
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website Link',
      type: 'url',
    }),
  ],
});
