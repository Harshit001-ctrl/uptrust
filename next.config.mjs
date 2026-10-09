const ONE_YEAR = 60 * 60 * 24 * 365;

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

  images: {
    minimumCacheTTL: ONE_YEAR,
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|png|jpg|jpeg|gif|webp|avif|ico|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
      {
        source: "/:all*(woff|woff2|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
