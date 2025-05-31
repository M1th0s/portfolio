// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define the schema for your collection
const projectCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => {
        return z.object({
            title: z.string(),
            client: z.string(),
            work: z.string(),
            mainImage: image(),
            otherImages: z.array(image()),
            storyTitle: z.string(),
            storyContent: z.string(),
            dayOneTitle: z.string(),
            dayOneContent: z.string(),
        });
    },
});


//  Export a single `collections` object to register your collection(s)
export const collections = { 
    projects: projectCollection, 
};