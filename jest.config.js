module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'moduleNameMapper': {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    'testEnvironment': 'jsdom',
}