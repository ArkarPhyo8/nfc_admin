import type { Plugin } from "webpack";

declare module "@prisma/nextjs-monorepo-workaround-plugin" {
  export const PrismaPlugin: Plugin;
}