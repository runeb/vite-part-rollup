export default function partImport() {
  // TODO: Read any `sanity.json` in node_modules/*
  // and join those part implementation paths to this
  const sanity = require("./sanity.json");
  return {
    name: "part-import",
    async resolveId(id) {
      if (id.match(/^part:/)) {
        const part = sanity.parts.find((p) => p.implements === id);
        if (part) {
          const resolution = await this.resolve(part.path, undefined, {
            skipSelf: true,
          });
          return resolution;
        }
      }
      return null;
    },
  };
}
