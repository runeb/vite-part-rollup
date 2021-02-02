import reactRefresh from "@vitejs/plugin-react-refresh";
import partImport from "./rollup-plugin-part-import";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh(), partImport()],
});
