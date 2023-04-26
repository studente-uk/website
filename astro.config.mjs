import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import sitemap from "astro-sitemap";
import mdx from "@astrojs/mdx";
import AstroPWA from '@vite-pwa/astro'
import pagefind from 'astro-pagefind';


// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://studente.co.uk",
  adapter: cloudflare(),
  integrations: [
    solidJs(), 
    partytown(), 
    prefetch(), 
    compress(), 
    mdx(), 
    pagefind(),
    sitemap({
      customPages: [
        'https://studente.co.uk/',
        'https://studente.co.uk/404',
        'https://studente.co.uk/about',
        'https://studente.co.uk/blog',
        'https://studente.co.uk/recipes',
        'https://studente.co.uk/contact',
        'https://studente.co.uk/support',
        'https://studente.co.uk/terms',
        'https://studente.co.uk/privacy',
        'https://studente.co.uk/legal',
      ],
    }), 
//  robotsTxt(), 
//  AstroPWA(), // smh have to do this manually
  ]
});