module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // tell eleventy to ignore the non-index stuff in public
  eleventyConfig.ignores.add("public/doggy");
  eleventyConfig.ignores.add("public/links");
  eleventyConfig.ignores.add("public/not_found");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};