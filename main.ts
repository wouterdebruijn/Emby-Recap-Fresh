/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "https://deno.land/std@0.170.0/dotenv/load.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

await start(manifest, { plugins: [tailwind()] });
