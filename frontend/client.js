import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2022-02-01';
const useCdn = true;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

if (!projectId || !token) {
    throw new Error('Missing required environment variables');
}

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
