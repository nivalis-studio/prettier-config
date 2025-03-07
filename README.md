# @nivalis/prettier-config

## Installation

```bash
npm i -D @nivalis/prettier-config prettier
```

## Setup

1. Add the `prettier` key to your `package.json`

```diff
diff --git a/package.json b/package.json
index 2ecef3d..260838f 100644
--- a/package.json
+++ b/package.json
@@ -5,6 +5,7 @@
   "keywords": [
     "prettier"
   ],
+  "prettier": "@nivalis/prettier-config",
   "license": "MIT",
   "main": "index.js"
```

2. Add the following to `scripts` in `package.json`

```
"prettier": "prettier '**/*.{js,ts,json,css,scss,html,hbs,md}' --write"
```

3. Install the relevant Editor Addon/Plugin and enable "Prettier on Save".

[Check out the `prettier` documentation for more info on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).

### With Tailwindcss

Create the following file `.prettierrc.js`

```javascript
module.exports = {
  ...require('@nivalis/prettier-config'),
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
```

[Check out the `prettier` documentation for more info on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).
