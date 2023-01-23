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
        destination: 'https://github.com/spatz1337',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/spatz1337',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/934593001865510982',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/artist/281tNutqcHbRPVf1qEjeAR?si=b10da26933424969',
        permanent: true,
      },
    ]
  },
}
