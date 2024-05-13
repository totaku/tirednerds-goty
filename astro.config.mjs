import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    image: {
        service: squooshImageService(),
    },
    integrations: [tailwind(), mdx()],
});