module.exports = {
  images: { unoptimized: true }, // OPTIMIZE: disable when we switch to running server
  reactStrictMode: true,
  swcMinify: true, // use swc instead of terser for minification
  trailingSlash: true, // allow url ending with traling slash
  typescript: { tsconfigPath: './tsconfig.dev-next.json' },

  // Load svg files
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
