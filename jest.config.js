module.exports = {
  "roots": [
    "tests"
  ],
  "transform": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|sass|scss|html)$": "<rootDir>/tests/file-transformer.js",
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "verbose": true,
  "testEnvironment": "jsdom"
}