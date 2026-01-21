/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://chariahs.world/rsvp',
        permanent: true, // 308 redirect
      },
      {
        source: '/:path*',
        destination: 'https://chariahs.world/rsvp',
        permanent: true, // 308 redirect
      },
    ];
  },
};

module.exports = nextConfig;
