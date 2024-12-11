import { defineType, defineField } from "sanity";

export default defineType({
    name: 'upcomingProjects',
    title: 'Upcoming Projects',
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
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                layout: 'tags'
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'projectStatus',
            title: 'Project Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Completed', value: 'Completed' },
                    { title: 'In Progress', value: 'In Progress' },
                    { title: 'On Hold', value: 'On Hold' },
                ], 
              }
        }),
    ]
})