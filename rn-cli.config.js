const blackList = require('metro-config/src/defaults/blacklist')

module.exports = {
  resolver: {
    sourceExts:
      process.env.RN_FLAVOUR === 'E2E'
        ? ['e2e.ts', 'e2e.tsx', 'ts', 'tsx', 'js']
        : ['ts', 'tsx', 'js'],
    blacklistRE:
      process.env.RN_FLAVOUR === 'E2E' ? blackList([]) : blackList([/e2e\/.*/]),
  },
}
