module.exports = {
  "*.{js,jsx,ts,tsx,mjs}": ["eslint --fix", "eslint"],
  // "**/*.ts?(x)": () => "npm run check-types",
  "*.{json,yaml}": ["prettier --write"],
};
