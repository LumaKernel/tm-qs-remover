import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "QueryString Remover",
        description: "Remove query strings from URLs",
        author: "Luma",
        match: ["https://*/*", "http://*/*"],
        namespace: "github.com/LumaKernel",
        homepageURL: "https://github.com/LumaKernel/tm-qs-remover",
      },
    }),
  ],
});
