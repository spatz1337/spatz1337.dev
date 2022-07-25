module.exports = {
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/itsnebulalol',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/itsnebulalol',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://dsc.gg/nebulapalace',
        permanent: true,
      },
      {
        source: '/permasigner',
        destination: 'https://github.com/itsnebulalol/permasigner',
        permanent: true,
      },
    ]
  },
}
