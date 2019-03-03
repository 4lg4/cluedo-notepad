module.exports = {
  outputDir: "docs",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://4lg4.github.io/cluedo-notepad/"
      : "/"
};
