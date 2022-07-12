const htmlmin = require('html-minifier');
const config = {
  "masterpieces": require("./src/_data/cda-master-pieces.de.json"),
};

const clearRequireCache = () => {
  
  Object.keys(require.cache).forEach(function (key) {
    if (require.cache[key].filename.match(/11ty\.js/)) {
      delete require.cache[key];
    }
  });  
}

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Watch our compiled assets for changes
  eleventyConfig.addWatchTarget('./src/compiled-assets/main.css');
  eleventyConfig.addWatchTarget('./src/assets/scripts/main.js');

  // Copy src/compiled-assets to /assets
  eleventyConfig.addPassthroughCopy({ 'src/compiled-assets': 'assets' });

  // Copy all images
  eleventyConfig.addPassthroughCopy('src/images');

  // Copy all fonts
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });

  // Copy asset images
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });

  // Copy Scripts
  eleventyConfig.addPassthroughCopy({ 'src/assets/scripts': 'assets/js' });
  eleventyConfig.addWatchTarget("./src/assets/scripts");

  /* Functions
  ########################################################################## */

  eleventyConfig.addFilter("maskEntities", (str) => {
    return str.replace(/"/g, '&#34;');
  });

  eleventyConfig.addFilter("xsmallSrc", (str) => {
    return str.replace(/\-s\.jpg/, '-xs.jpg');
  });

  eleventyConfig.addFilter("smallSrc", (str) => {
    return str;
  });

  eleventyConfig.addFilter("mediumSrc", (str) => {
    return str.replace(/\-s\.jpg/, '-m.jpg');
  });

  eleventyConfig.addFilter("structuredText", (str) => {
    return str.replace(/\n/g, '<br>');
  });

  eleventyConfig.addFilter("wrappedText", (str) => {
    const chunks = str.split(/\n/);
    const wrapped = chunks.map(chunk => chunk.length > 0 ? `<p>${chunk}</p>` : '' );
    return wrapped.join("");
  });

  /* Collections
  ########################################################################## */

  eleventyConfig.addCollection("masterpieces", () => {
    clearRequireCache();
    const masterpieces = config.masterpieces.data.results;
    const sortedMasterPieces = masterpieces.sort((a, b) => {
      if (a.sortValue < b.sortValue) return -1;
      if (a.sortValue > b.sortValue) return 1;
      return 0;
    });
    return sortedMasterPieces;
  });

  /* Maintenance
  ########################################################################## */
  eleventyConfig.on('eleventy.beforeWatch', async (changedFiles) => {
    clearRequireCache();
  });

  /* Environment
  ########################################################################## */
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
        });

        return minified;
      }

      return content;
    });
  }

  return {
    dir: {
      includes: '_components',
      input: 'src',
      layouts: '_templates',
      output: 'docs',
    },
    pathPrefix: "",
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'md',
      'html',
      'njk',
      '11ty.js'
    ],
  };
};
