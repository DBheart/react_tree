리액트 트리를 위한 테스트
yarn add rc-tree
npm install rc-tree

트리 타입
  1. 기본적인 데이터만 들어가는 것
  2. 높이 고정
  3. 타이틀 렌더링 : https://tree-react-component.vercel.app/demo/funtion-title
      - 리스트 형태로 받아서 트리형태로 변경한다. 
      - 타이틀을 html로 변경이 가능하다. 
  4. 순서 변경 : 드래그
    - onDrop이벤트 일때 값을 변경하면 될것 같다.
  5. 체크 박스
  6. 필터링 트리
    - 여기서는 팝업으로 관련된 것만 띄우던데... 
  7. trnasfer tree
  8. dropdown 트리 
  9. curd기능이 있는 트리
  10. 동적 트리

기타 특징
  1. 필드 네임을 바꿀수 있다 : https://tree-react-component.vercel.app/demo/field-names
    - 기본 네임 : children, title, key 
  2. context메뉴를 쓸수 있다. 
    - 트리에서 마우스 오른쪽키나 기타 등등의 키로 메뉴를 띄워서 진행할 수 있다.


rc-tree에서 import한 내역은 다음과 같다.
```markdown
info Direct dependencies
└─ rc-tree@5.4.4
info All dependencies
├─ rc-motion@2.4.5
├─ rc-resize-observer@1.2.0
├─ rc-tree@5.4.4
├─ rc-util@5.18.1
├─ rc-virtual-list@3.4.2
├─ resize-observer-polyfill@1.5.1
└─ shallowequal@1.1.0

```

react-router-dom 추가로 인한 디펜던시 추가
와... 라우터가 아주... 심오한 기능이었나 보다.
```markdown
info Direct dependencies
├─ @testing-library/jest-dom@5.16.2
├─ @testing-library/react@12.1.3
├─ @testing-library/user-event@13.5.0
├─ prop-types@15.8.1
├─ rc-tree@5.4.4
├─ react-dom@17.0.2
├─ react-router-dom@6.2.2
├─ react-scripts@5.0.0
├─ react@17.0.2
└─ web-vitals@2.1.4

info All dependencies
├─ @ampproject/remapping@2.1.2
├─ @babel/compat-data@7.17.0
├─ @babel/core@7.17.5
├─ @babel/eslint-parser@7.17.0
├─ @babel/generator@7.17.3
├─ @babel/helper-builder-binary-assignment-operator-visitor@7.16.7
├─ @babel/helper-compilation-targets@7.16.7
├─ @babel/helper-explode-assignable-expression@7.16.7
├─ @babel/helper-get-function-arity@7.16.7
├─ @babel/helper-module-imports@7.16.7
├─ @babel/helper-wrap-function@7.16.8
├─ @babel/helpers@7.17.2
├─ @babel/highlight@7.16.10
├─ @babel/parser@7.17.3
├─ @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.16.7
├─ @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.16.7
├─ @babel/plugin-proposal-async-generator-functions@7.16.8
├─ @babel/plugin-proposal-class-properties@7.16.7
├─ @babel/plugin-proposal-class-static-block@7.17.6
├─ @babel/plugin-proposal-decorators@7.17.2
├─ @babel/plugin-proposal-dynamic-import@7.16.7
├─ @babel/plugin-proposal-export-namespace-from@7.16.7
├─ @babel/plugin-proposal-json-strings@7.16.7
├─ @babel/plugin-proposal-logical-assignment-operators@7.16.7
├─ @babel/plugin-proposal-nullish-coalescing-operator@7.16.7
├─ @babel/plugin-proposal-numeric-separator@7.16.7
├─ @babel/plugin-proposal-object-rest-spread@7.17.3
├─ @babel/plugin-proposal-optional-catch-binding@7.16.7
├─ @babel/plugin-proposal-private-methods@7.16.11
├─ @babel/plugin-proposal-private-property-in-object@7.16.7
├─ @babel/plugin-proposal-unicode-property-regex@7.16.7
├─ @babel/plugin-syntax-bigint@7.8.3
├─ @babel/plugin-syntax-class-properties@7.12.13
├─ @babel/plugin-syntax-decorators@7.17.0
├─ @babel/plugin-syntax-flow@7.16.7
├─ @babel/plugin-syntax-import-meta@7.10.4
├─ @babel/plugin-syntax-jsx@7.16.7
├─ @babel/plugin-syntax-logical-assignment-operators@7.10.4
├─ @babel/plugin-syntax-numeric-separator@7.10.4
├─ @babel/plugin-syntax-top-level-await@7.14.5
├─ @babel/plugin-syntax-typescript@7.16.7
├─ @babel/plugin-transform-arrow-functions@7.16.7
├─ @babel/plugin-transform-async-to-generator@7.16.8
├─ @babel/plugin-transform-block-scoped-functions@7.16.7
├─ @babel/plugin-transform-block-scoping@7.16.7
├─ @babel/plugin-transform-classes@7.16.7
├─ @babel/plugin-transform-computed-properties@7.16.7
├─ @babel/plugin-transform-destructuring@7.17.3
├─ @babel/plugin-transform-dotall-regex@7.16.7
├─ @babel/plugin-transform-duplicate-keys@7.16.7
├─ @babel/plugin-transform-exponentiation-operator@7.16.7
├─ @babel/plugin-transform-flow-strip-types@7.16.7
├─ @babel/plugin-transform-for-of@7.16.7
├─ @babel/plugin-transform-function-name@7.16.7
├─ @babel/plugin-transform-literals@7.16.7
├─ @babel/plugin-transform-member-expression-literals@7.16.7
├─ @babel/plugin-transform-modules-amd@7.16.7
├─ @babel/plugin-transform-modules-commonjs@7.16.8
├─ @babel/plugin-transform-modules-systemjs@7.16.7
├─ @babel/plugin-transform-modules-umd@7.16.7
├─ @babel/plugin-transform-named-capturing-groups-regex@7.16.8
├─ @babel/plugin-transform-new-target@7.16.7
├─ @babel/plugin-transform-object-super@7.16.7
├─ @babel/plugin-transform-property-literals@7.16.7
├─ @babel/plugin-transform-react-constant-elements@7.17.6
├─ @babel/plugin-transform-react-display-name@7.16.7
├─ @babel/plugin-transform-react-jsx-development@7.16.7
├─ @babel/plugin-transform-react-pure-annotations@7.16.7
├─ @babel/plugin-transform-regenerator@7.16.7
├─ @babel/plugin-transform-reserved-words@7.16.7
├─ @babel/plugin-transform-runtime@7.17.0
├─ @babel/plugin-transform-shorthand-properties@7.16.7
├─ @babel/plugin-transform-spread@7.16.7
├─ @babel/plugin-transform-sticky-regex@7.16.7
├─ @babel/plugin-transform-template-literals@7.16.7
├─ @babel/plugin-transform-typeof-symbol@7.16.7
├─ @babel/plugin-transform-typescript@7.16.8
├─ @babel/plugin-transform-unicode-escapes@7.16.7
├─ @babel/plugin-transform-unicode-regex@7.16.7
├─ @babel/preset-env@7.16.11
├─ @babel/preset-modules@0.1.5
├─ @babel/preset-react@7.16.7
├─ @babel/preset-typescript@7.16.7
├─ @babel/runtime-corejs3@7.17.2
├─ @babel/runtime@7.17.2
├─ @babel/traverse@7.17.3
├─ @bcoe/v8-coverage@0.2.3
├─ @csstools/normalize.css@12.0.0
├─ @csstools/postcss-color-function@1.0.2
├─ @csstools/postcss-font-format-keywords@1.0.0
├─ @csstools/postcss-hwb-function@1.0.0
├─ @csstools/postcss-ic-unit@1.0.0
├─ @csstools/postcss-is-pseudo-class@2.0.0
├─ @csstools/postcss-normalize-display-values@1.0.0
├─ @csstools/postcss-oklab-function@1.0.1
├─ @eslint/eslintrc@1.2.0
├─ @humanwhocodes/config-array@0.9.5
├─ @humanwhocodes/object-schema@1.2.1
├─ @istanbuljs/load-nyc-config@1.1.0
├─ @jest/globals@27.5.1
├─ @jest/reporters@27.5.1
├─ @jest/test-sequencer@27.5.1
├─ @jridgewell/resolve-uri@3.0.5
├─ @jridgewell/sourcemap-codec@1.4.11
├─ @jridgewell/trace-mapping@0.3.4
├─ @nodelib/fs.scandir@2.1.5
├─ @nodelib/fs.stat@2.0.5
├─ @nodelib/fs.walk@1.2.8
├─ @pmmmwh/react-refresh-webpack-plugin@0.5.4
├─ @rollup/plugin-babel@5.3.1
├─ @rollup/plugin-node-resolve@11.2.1
├─ @rollup/plugin-replace@2.4.2
├─ @rushstack/eslint-patch@1.1.0
├─ @sinonjs/commons@1.8.3
├─ @sinonjs/fake-timers@8.1.0
├─ @surma/rollup-plugin-off-main-thread@2.2.3
├─ @svgr/babel-plugin-add-jsx-attribute@5.4.0
├─ @svgr/babel-plugin-remove-jsx-attribute@5.4.0
├─ @svgr/babel-plugin-remove-jsx-empty-expression@5.0.1
├─ @svgr/babel-plugin-replace-jsx-attribute-value@5.0.1
├─ @svgr/babel-plugin-svg-dynamic-title@5.4.0
├─ @svgr/babel-plugin-svg-em-dimensions@5.4.0
├─ @svgr/babel-plugin-transform-react-native-svg@5.4.0
├─ @svgr/babel-plugin-transform-svg-component@5.5.0
├─ @svgr/babel-preset@5.5.0
├─ @svgr/core@5.5.0
├─ @svgr/hast-util-to-babel-ast@5.5.0
├─ @svgr/plugin-svgo@5.5.0
├─ @svgr/webpack@5.5.0
├─ @testing-library/dom@8.11.3
├─ @testing-library/jest-dom@5.16.2
├─ @testing-library/react@12.1.3
├─ @testing-library/user-event@13.5.0
├─ @tootallnate/once@1.1.2
├─ @trysound/sax@0.2.0
├─ @types/aria-query@4.2.2
├─ @types/babel__core@7.1.18
├─ @types/babel__generator@7.6.4
├─ @types/babel__template@7.4.1
├─ @types/babel__traverse@7.14.2
├─ @types/body-parser@1.19.2
├─ @types/bonjour@3.5.10
├─ @types/connect-history-api-fallback@1.3.5
├─ @types/connect@3.4.35
├─ @types/eslint-scope@3.7.3
├─ @types/eslint@7.29.0
├─ @types/express-serve-static-core@4.17.28
├─ @types/express@4.17.13
├─ @types/graceful-fs@4.1.5
├─ @types/html-minifier-terser@6.1.0
├─ @types/http-proxy@1.17.8
├─ @types/istanbul-lib-coverage@2.0.4
├─ @types/istanbul-lib-report@3.0.0
├─ @types/istanbul-reports@3.0.1
├─ @types/jest@27.4.1
├─ @types/json5@0.0.29
├─ @types/mime@1.3.2
├─ @types/prettier@2.4.4
├─ @types/prop-types@15.7.4
├─ @types/q@1.5.5
├─ @types/range-parser@1.2.4
├─ @types/react-dom@17.0.12
├─ @types/react@17.0.39
├─ @types/resolve@1.17.1
├─ @types/retry@0.12.1
├─ @types/scheduler@0.16.2
├─ @types/serve-index@1.9.1
├─ @types/serve-static@1.13.10
├─ @types/sockjs@0.3.33
├─ @types/stack-utils@2.0.1
├─ @types/testing-library__jest-dom@5.14.3
├─ @types/trusted-types@2.0.2
├─ @types/ws@8.5.2
├─ @types/yargs-parser@20.2.1
├─ @types/yargs@16.0.4
├─ @typescript-eslint/eslint-plugin@5.13.0
├─ @typescript-eslint/experimental-utils@5.13.0
├─ @typescript-eslint/parser@5.13.0
├─ @typescript-eslint/type-utils@5.13.0
├─ @webassemblyjs/floating-point-hex-parser@1.11.1
├─ @webassemblyjs/helper-numbers@1.11.1
├─ @webassemblyjs/helper-wasm-section@1.11.1
├─ @webassemblyjs/wasm-edit@1.11.1
├─ @webassemblyjs/wasm-opt@1.11.1
├─ @webassemblyjs/wast-printer@1.11.1
├─ @xtuc/ieee754@1.2.0
├─ abab@2.0.5
├─ accepts@1.3.8
├─ acorn-globals@6.0.0
├─ acorn-import-assertions@1.8.0
├─ acorn-jsx@5.3.2
├─ acorn-node@1.8.2
├─ acorn-walk@7.2.0
├─ acorn@8.7.0
├─ address@1.1.2
├─ adjust-sourcemap-loader@4.0.0
├─ aggregate-error@3.1.0
├─ ajv-keywords@3.5.2
├─ ajv@6.12.6
├─ ansi-styles@4.3.0
├─ anymatch@3.1.2
├─ arg@5.0.1
├─ argparse@1.0.10
├─ array-flatten@1.1.1
├─ array-includes@3.1.4
├─ array-union@2.1.0
├─ array.prototype.flat@1.2.5
├─ array.prototype.flatmap@1.2.5
├─ asap@2.0.6
├─ ast-types-flow@0.0.7
├─ async@2.6.3
├─ asynckit@0.4.0
├─ at-least-node@1.0.0
├─ atob@2.1.2
├─ autoprefixer@10.4.2
├─ axe-core@4.4.1
├─ axobject-query@2.2.0
├─ babel-jest@27.5.1
├─ babel-loader@8.2.3
├─ babel-plugin-jest-hoist@27.5.1
├─ babel-plugin-macros@3.1.0
├─ babel-plugin-named-asset-import@0.3.8
├─ babel-plugin-transform-react-remove-prop-types@0.4.24
├─ babel-preset-jest@27.5.1
├─ batch@0.6.1
├─ bfj@7.0.2
├─ binary-extensions@2.2.0
├─ bluebird@3.7.2
├─ body-parser@1.19.2
├─ bonjour@3.5.0
├─ boolbase@1.0.0
├─ braces@3.0.2
├─ browser-process-hrtime@1.0.0
├─ bser@2.1.1
├─ buffer-from@1.1.2
├─ buffer-indexof@1.1.1
├─ builtin-modules@3.2.0
├─ camel-case@4.1.2
├─ camelcase-css@2.0.1
├─ caniuse-lite@1.0.30001312
├─ case-sensitive-paths-webpack-plugin@2.4.0
├─ char-regex@1.0.2
├─ charcodes@0.2.0
├─ check-types@11.1.2
├─ chokidar@3.5.3
├─ chrome-trace-event@1.0.3
├─ cjs-module-lexer@1.2.2
├─ clean-css@5.2.4
├─ clean-stack@2.2.0
├─ cliui@7.0.4
├─ coa@2.0.2
├─ color-convert@2.0.1
├─ color-name@1.1.4
├─ combined-stream@1.0.8
├─ commander@2.20.3
├─ common-path-prefix@3.0.0
├─ common-tags@1.8.2
├─ commondir@1.0.1
├─ compressible@2.0.18
├─ compression@1.7.4
├─ concat-map@0.0.1
├─ confusing-browser-globals@1.0.11
├─ connect-history-api-fallback@1.6.0
├─ content-disposition@0.5.4
├─ convert-source-map@1.8.0
├─ cookie-signature@1.0.6
├─ cookie@0.4.2
├─ core-js-compat@3.21.1
├─ core-js-pure@3.21.1
├─ core-js@3.21.1
├─ core-util-is@1.0.3
├─ crypto-random-string@2.0.0
├─ css-blank-pseudo@3.0.3
├─ css-declaration-sorter@6.1.4
├─ css-has-pseudo@3.0.4
├─ css-loader@6.6.0
├─ css-minimizer-webpack-plugin@3.4.1
├─ css-prefers-color-scheme@6.0.3
├─ css-select-base-adapter@0.1.1
├─ css-tree@1.1.3
├─ css-what@5.1.0
├─ css.escape@1.5.1
├─ css@3.0.0
├─ cssdb@6.4.0
├─ cssesc@3.0.0
├─ cssnano-preset-default@5.2.0
├─ cssnano@5.1.0
├─ cssom@0.4.4
├─ cssstyle@2.3.0
├─ csstype@3.0.10
├─ damerau-levenshtein@1.0.8
├─ data-urls@2.0.0
├─ decimal.js@10.3.1
├─ decode-uri-component@0.2.0
├─ dedent@0.7.0
├─ deep-equal@1.1.1
├─ deep-is@0.1.4
├─ default-gateway@6.0.3
├─ define-lazy-prop@2.0.0
├─ defined@1.0.0
├─ del@6.0.0
├─ delayed-stream@1.0.0
├─ destroy@1.0.4
├─ detect-newline@3.1.0
├─ detect-node@2.1.0
├─ detect-port-alt@1.1.6
├─ detective@5.2.0
├─ didyoumean@1.2.2
├─ diff-sequences@27.5.1
├─ dir-glob@3.0.1
├─ dlv@1.1.3
├─ dns-equal@1.0.0
├─ dns-packet@1.3.4
├─ dns-txt@2.0.2
├─ dom-accessibility-api@0.5.13
├─ dom-converter@0.2.0
├─ dom-serializer@1.3.2
├─ domexception@2.0.1
├─ domutils@2.8.0
├─ dot-case@3.0.4
├─ dotenv-expand@5.1.0
├─ dotenv@10.0.0
├─ duplexer@0.1.2
├─ ee-first@1.1.1
├─ ejs@3.1.6
├─ electron-to-chromium@1.4.75
├─ emoji-regex@9.2.2
├─ enhanced-resolve@5.9.1
├─ error-ex@1.3.2
├─ error-stack-parser@2.0.7
├─ es-module-lexer@0.9.3
├─ es-to-primitive@1.2.1
├─ escodegen@2.0.0
├─ eslint-config-react-app@7.0.0
├─ eslint-import-resolver-node@0.3.6
├─ eslint-module-utils@2.7.3
├─ eslint-plugin-flowtype@8.0.3
├─ eslint-plugin-import@2.25.4
├─ eslint-plugin-jest@25.7.0
├─ eslint-plugin-jsx-a11y@6.5.1
├─ eslint-plugin-react-hooks@4.3.0
├─ eslint-plugin-react@7.29.2
├─ eslint-plugin-testing-library@5.0.5
├─ eslint-visitor-keys@3.3.0
├─ eslint-webpack-plugin@3.1.1
├─ eslint@8.10.0
├─ esprima@4.0.1
├─ esquery@1.4.0
├─ estree-walker@1.0.1
├─ eventemitter3@4.0.7
├─ events@3.3.0
├─ express@4.17.3
├─ fast-glob@3.2.11
├─ fast-levenshtein@2.0.6
├─ fastq@1.13.0
├─ faye-websocket@0.11.4
├─ fb-watchman@2.0.1
├─ file-entry-cache@6.0.1
├─ file-loader@6.2.0
├─ filelist@1.0.2
├─ filesize@8.0.7
├─ fill-range@7.0.1
├─ finalhandler@1.1.2
├─ find-cache-dir@3.3.2
├─ find-up@4.1.0
├─ flat-cache@3.0.4
├─ flatted@3.2.5
├─ follow-redirects@1.14.9
├─ fork-ts-checker-webpack-plugin@6.5.0
├─ form-data@3.0.1
├─ forwarded@0.2.0
├─ fraction.js@4.1.3
├─ fs-extra@9.1.0
├─ fs-monkey@1.0.3
├─ fs.realpath@1.0.0
├─ gensync@1.0.0-beta.2
├─ get-caller-file@2.0.5
├─ get-own-enumerable-property-symbols@3.0.2
├─ get-package-type@0.1.0
├─ get-stream@6.0.1
├─ get-symbol-description@1.0.0
├─ glob-parent@5.1.2
├─ global-modules@2.0.0
├─ global-prefix@3.0.0
├─ gzip-size@6.0.0
├─ handle-thing@2.0.1
├─ harmony-reflect@1.6.2
├─ he@1.2.0
├─ hoopy@0.1.4
├─ hpack.js@2.1.6
├─ html-encoding-sniffer@2.0.1
├─ html-entities@2.3.2
├─ html-escaper@2.0.2
├─ html-minifier-terser@6.1.0
├─ html-webpack-plugin@5.5.0
├─ htmlparser2@6.1.0
├─ http-deceiver@1.2.7
├─ http-parser-js@0.5.5
├─ http-proxy-agent@4.0.1
├─ http-proxy-middleware@2.0.3
├─ http-proxy@1.18.1
├─ https-proxy-agent@5.0.0
├─ human-signals@2.1.0
├─ identity-obj-proxy@3.0.0
├─ immer@9.0.12
├─ import-fresh@3.3.0
├─ inflight@1.0.6
├─ inherits@2.0.4
├─ ini@1.3.8
├─ ip@1.1.5
├─ ipaddr.js@2.0.1
├─ is-arguments@1.1.1
├─ is-arrayish@0.2.1
├─ is-bigint@1.0.4
├─ is-binary-path@2.1.0
├─ is-boolean-object@1.1.2
├─ is-callable@1.2.4
├─ is-core-module@2.8.1
├─ is-docker@2.2.1
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@3.0.0
├─ is-module@1.0.0
├─ is-negative-zero@2.0.2
├─ is-number-object@1.0.6
├─ is-number@7.0.0
├─ is-obj@1.0.1
├─ is-path-cwd@2.2.0
├─ is-path-inside@3.0.3
├─ is-plain-obj@3.0.0
├─ is-potential-custom-element-name@1.0.1
├─ is-regex@1.1.4
├─ is-root@2.1.0
├─ is-shared-array-buffer@1.0.1
├─ is-string@1.0.7
├─ is-symbol@1.0.4
├─ is-weakref@1.0.2
├─ is-wsl@2.2.0
├─ isarray@1.0.0
├─ istanbul-lib-instrument@5.1.0
├─ istanbul-lib-source-maps@4.0.1
├─ istanbul-reports@3.1.4
├─ jake@10.8.2
├─ jest-changed-files@27.5.1
├─ jest-circus@27.5.1
├─ jest-cli@27.5.1
├─ jest-docblock@27.5.1
├─ jest-jasmine2@27.5.1
├─ jest-leak-detector@27.5.1
├─ jest-pnp-resolver@1.2.2
├─ jest-resolve-dependencies@27.5.1
├─ jest-serializer@27.5.1
├─ jest-watch-typeahead@1.0.0
├─ jest-watcher@27.5.1
├─ jest@27.5.1
├─ js-tokens@4.0.0
├─ jsdom@16.7.0
├─ jsesc@2.5.2
├─ json-parse-better-errors@1.0.2
├─ json-parse-even-better-errors@2.3.1
├─ json-schema-traverse@0.4.1
├─ json-schema@0.4.0
├─ json-stable-stringify-without-jsonify@1.0.1
├─ json5@2.2.0
├─ jsonpointer@5.0.0
├─ jsx-ast-utils@3.2.1
├─ kind-of@6.0.3
├─ kleur@3.0.3
├─ klona@2.0.5
├─ language-subtag-registry@0.3.21
├─ language-tags@1.0.5
├─ lilconfig@2.0.4
├─ lines-and-columns@1.2.4
├─ loader-runner@4.2.0
├─ locate-path@5.0.0
├─ lodash.debounce@4.0.8
├─ lodash.memoize@4.1.2
├─ lodash.merge@4.6.2
├─ lodash.sortby@4.7.0
├─ lodash.uniq@4.5.0
├─ lodash@4.17.21
├─ lower-case@2.0.2
├─ lru-cache@6.0.0
├─ lz-string@1.4.4
├─ magic-string@0.25.7
├─ make-dir@3.1.0
├─ makeerror@1.0.12
├─ mdn-data@2.0.14
├─ media-typer@0.3.0
├─ memfs@3.4.1
├─ merge-descriptors@1.0.1
├─ merge2@1.4.1
├─ methods@1.1.2
├─ mime-db@1.51.0
├─ mime-types@2.1.34
├─ mime@1.6.0
├─ mimic-fn@2.1.0
├─ min-indent@1.0.1
├─ mini-css-extract-plugin@2.5.3
├─ minimalistic-assert@1.0.1
├─ mkdirp@0.5.5
├─ ms@2.1.3
├─ multicast-dns-service-types@1.1.0
├─ multicast-dns@6.2.3
├─ nanoid@3.3.1
├─ negotiator@0.6.3
├─ node-forge@1.2.1
├─ node-int64@0.4.0
├─ node-releases@2.0.2
├─ normalize-range@0.1.2
├─ normalize-url@6.1.0
├─ npm-run-path@4.0.1
├─ nth-check@2.0.1
├─ nwsapi@2.2.0
├─ object-hash@2.2.0
├─ object-inspect@1.12.0
├─ object-is@1.1.5
├─ object.entries@1.1.5
├─ object.fromentries@2.0.5
├─ object.getownpropertydescriptors@2.1.3
├─ object.hasown@1.1.0
├─ object.values@1.1.5
├─ obuf@1.1.2
├─ on-headers@1.0.2
├─ onetime@5.1.2
├─ open@8.4.0
├─ optionator@0.9.1
├─ p-limit@2.3.0
├─ p-locate@4.1.0
├─ p-map@4.0.0
├─ p-retry@4.6.1
├─ p-try@2.2.0
├─ param-case@3.0.4
├─ parent-module@1.0.1
├─ parse-json@5.2.0
├─ parse5@6.0.1
├─ pascal-case@3.1.2
├─ path-is-absolute@1.0.1
├─ path-key@3.1.1
├─ path-parse@1.0.7
├─ path-to-regexp@0.1.7
├─ performance-now@2.1.0
├─ picomatch@2.3.1
├─ pirates@4.0.5
├─ pkg-dir@4.2.0
├─ pkg-up@3.1.0
├─ portfinder@1.0.28
├─ postcss-attribute-case-insensitive@5.0.0
├─ postcss-browser-comments@4.0.0
├─ postcss-calc@8.2.4
├─ postcss-clamp@4.0.0
├─ postcss-color-functional-notation@4.2.2
├─ postcss-color-hex-alpha@8.0.3
├─ postcss-color-rebeccapurple@7.0.2
├─ postcss-colormin@5.3.0
├─ postcss-convert-values@5.1.0
├─ postcss-custom-media@8.0.0
├─ postcss-custom-properties@12.1.4
├─ postcss-custom-selectors@6.0.0
├─ postcss-dir-pseudo-class@6.0.4
├─ postcss-discard-comments@5.1.0
├─ postcss-discard-duplicates@5.1.0
├─ postcss-discard-empty@5.1.0
├─ postcss-discard-overridden@5.1.0
├─ postcss-double-position-gradients@3.1.0
├─ postcss-env-function@4.0.5
├─ postcss-flexbugs-fixes@5.0.2
├─ postcss-focus-visible@6.0.4
├─ postcss-focus-within@5.0.4
├─ postcss-font-variant@5.0.0
├─ postcss-gap-properties@3.0.3
├─ postcss-image-set-function@4.0.6
├─ postcss-initial@4.0.1
├─ postcss-js@4.0.0
├─ postcss-lab-function@4.1.1
├─ postcss-load-config@3.1.3
├─ postcss-loader@6.2.1
├─ postcss-logical@5.0.4
├─ postcss-media-minmax@5.0.0
├─ postcss-merge-longhand@5.1.0
├─ postcss-merge-rules@5.1.0
├─ postcss-minify-font-values@5.1.0
├─ postcss-minify-gradients@5.1.0
├─ postcss-minify-params@5.1.0
├─ postcss-minify-selectors@5.2.0
├─ postcss-modules-extract-imports@3.0.0
├─ postcss-modules-local-by-default@4.0.0
├─ postcss-modules-scope@3.0.0
├─ postcss-modules-values@4.0.0
├─ postcss-nested@5.0.6
├─ postcss-nesting@10.1.2
├─ postcss-normalize-charset@5.1.0
├─ postcss-normalize-display-values@5.1.0
├─ postcss-normalize-positions@5.1.0
├─ postcss-normalize-repeat-style@5.1.0
├─ postcss-normalize-string@5.1.0
├─ postcss-normalize-timing-functions@5.1.0
├─ postcss-normalize-unicode@5.1.0
├─ postcss-normalize-url@5.1.0
├─ postcss-normalize-whitespace@5.1.0
├─ postcss-normalize@10.0.1
├─ postcss-opacity-percentage@1.1.2
├─ postcss-ordered-values@5.1.0
├─ postcss-overflow-shorthand@3.0.3
├─ postcss-page-break@3.0.4
├─ postcss-place@7.0.4
├─ postcss-preset-env@7.4.1
├─ postcss-pseudo-class-any-link@7.1.1
├─ postcss-reduce-initial@5.1.0
├─ postcss-reduce-transforms@5.1.0
├─ postcss-replace-overflow-wrap@4.0.0
├─ postcss-selector-not@5.0.0
├─ postcss-svgo@5.1.0
├─ postcss-unique-selectors@5.1.0
├─ postcss@8.4.7
├─ pretty-bytes@5.6.0
├─ pretty-error@4.0.0
├─ process-nextick-args@2.0.1
├─ promise@8.1.0
├─ prompts@2.4.2
├─ prop-types@15.8.1
├─ proxy-addr@2.0.7
├─ psl@1.8.0
├─ q@1.5.1
├─ queue-microtask@1.2.3
├─ quick-lru@5.1.1
├─ raf@3.4.1
├─ raw-body@2.4.3
├─ rc-motion@2.4.5
├─ rc-resize-observer@1.2.0
├─ rc-tree@5.4.4
├─ rc-util@5.18.1
├─ rc-virtual-list@3.4.2
├─ react-app-polyfill@3.0.0
├─ react-dev-utils@12.0.0
├─ react-dom@17.0.2
├─ react-error-overlay@6.0.10
├─ react-refresh@0.11.0
├─ react-router-dom@6.2.2
├─ react-router@6.2.2
├─ react-scripts@5.0.0
├─ react@17.0.2
├─ readable-stream@3.6.0
├─ readdirp@3.6.0
├─ recursive-readdir@2.2.2
├─ redent@3.0.0
├─ regenerate-unicode-properties@10.0.1
├─ regenerator-transform@0.14.5
├─ regex-parser@2.2.11
├─ regexp.prototype.flags@1.4.1
├─ regexpu-core@5.0.1
├─ regjsgen@0.6.0
├─ regjsparser@0.8.4
├─ relateurl@0.2.7
├─ renderkid@3.0.0
├─ require-directory@2.1.1
├─ require-from-string@2.0.2
├─ requires-port@1.0.0
├─ resize-observer-polyfill@1.5.1
├─ resolve-cwd@3.0.0
├─ resolve-url-loader@4.0.0
├─ resolve.exports@1.1.0
├─ retry@0.13.1
├─ reusify@1.0.4
├─ rollup-plugin-terser@7.0.2
├─ rollup@2.68.0
├─ run-parallel@1.2.0
├─ safe-buffer@5.2.1
├─ safer-buffer@2.1.2
├─ sanitize.css@13.0.0
├─ sass-loader@12.6.0
├─ sax@1.2.4
├─ saxes@5.0.1
├─ scheduler@0.20.2
├─ schema-utils@3.1.1
├─ select-hose@2.0.0
├─ selfsigned@2.0.0
├─ semver@6.3.0
├─ serve-index@1.9.1
├─ serve-static@1.14.2
├─ shallowequal@1.1.0
├─ shebang-command@2.0.0
├─ shebang-regex@3.0.0
├─ shell-quote@1.7.3
├─ signal-exit@3.0.7
├─ sisteransi@1.0.5
├─ sockjs@0.3.24
├─ source-list-map@2.0.1
├─ source-map-js@1.0.2
├─ source-map-loader@3.0.1
├─ source-map-resolve@0.6.0
├─ source-map-support@0.5.21
├─ source-map@0.6.1
├─ sourcemap-codec@1.4.8
├─ spdy-transport@3.0.0
├─ spdy@4.0.2
├─ sprintf-js@1.0.3
├─ stackframe@1.2.1
├─ statuses@1.5.0
├─ string_decoder@1.3.0
├─ string-natural-compare@3.0.1
├─ string-width@4.2.3
├─ string.prototype.trimend@1.0.4
├─ string.prototype.trimstart@1.0.4
├─ stringify-object@3.3.0
├─ strip-bom@3.0.0
├─ strip-comments@2.0.1
├─ strip-final-newline@2.0.0
├─ strip-indent@3.0.0
├─ style-loader@3.3.1
├─ stylehacks@5.1.0
├─ supports-hyperlinks@2.2.0
├─ supports-preserve-symlinks-flag@1.0.0
├─ svg-parser@2.0.4
├─ svgo@1.3.2
├─ symbol-tree@3.2.4
├─ tailwindcss@3.0.23
├─ tapable@2.2.1
├─ temp-dir@2.0.0
├─ tempy@0.6.0
├─ terminal-link@2.1.1
├─ terser-webpack-plugin@5.3.1
├─ terser@5.12.0
├─ test-exclude@6.0.0
├─ thunky@1.1.0
├─ timsort@0.3.0
├─ tmpl@1.0.5
├─ to-fast-properties@2.0.0
├─ to-regex-range@5.0.1
├─ toidentifier@1.0.1
├─ tough-cookie@4.0.0
├─ tr46@2.1.0
├─ tryer@1.0.1
├─ tsconfig-paths@3.12.0
├─ type-detect@4.0.8
├─ type-fest@0.20.2
├─ typedarray-to-buffer@3.1.5
├─ unbox-primitive@1.0.1
├─ unicode-canonical-property-names-ecmascript@2.0.0
├─ unicode-match-property-ecmascript@2.0.0
├─ unicode-match-property-value-ecmascript@2.0.0
├─ unicode-property-aliases-ecmascript@2.0.0
├─ unique-string@2.0.0
├─ unpipe@1.0.0
├─ unquote@1.1.1
├─ util-deprecate@1.0.2
├─ util.promisify@1.0.1
├─ utila@0.4.0
├─ utils-merge@1.0.1
├─ uuid@8.3.2
├─ v8-compile-cache@2.3.0
├─ v8-to-istanbul@8.1.1
├─ w3c-hr-time@1.0.2
├─ w3c-xmlserializer@2.0.0
├─ walker@1.0.8
├─ watchpack@2.3.1
├─ wbuf@1.7.3
├─ web-vitals@2.1.4
├─ webpack-dev-middleware@5.3.1
├─ webpack-dev-server@4.7.4
├─ webpack-manifest-plugin@4.1.1
├─ webpack-sources@1.4.3
├─ webpack@5.69.1
├─ websocket-driver@0.7.4
├─ websocket-extensions@0.1.4
├─ whatwg-fetch@3.6.2
├─ whatwg-url@8.7.0
├─ which-boxed-primitive@1.0.2
├─ which@2.0.2
├─ word-wrap@1.2.3
├─ workbox-broadcast-update@6.5.0
├─ workbox-build@6.5.0
├─ workbox-google-analytics@6.5.0
├─ workbox-navigation-preload@6.5.0
├─ workbox-range-requests@6.5.0
├─ workbox-recipes@6.5.0
├─ workbox-streams@6.5.0
├─ workbox-sw@6.5.0
├─ workbox-webpack-plugin@6.5.0
├─ workbox-window@6.5.0
├─ wrap-ansi@7.0.0
├─ write-file-atomic@3.0.3
├─ ws@8.5.0
├─ xmlchars@2.2.0
├─ xtend@4.0.2
├─ y18n@5.0.8
├─ yallist@4.0.0
├─ yargs-parser@20.2.9
├─ yargs@16.2.0
└─ yocto-queue@0.1.0
✨  Done in 30.52s.
```

라우트까지 하고 나온 빌드 목록... 얼마나 늘었나를 살펴보자.
```markdown
assets by path static/js/*.js 2 MiB
  asset static/js/bundle.js 1.99 MiB [emitted] (name: main) 1 related asset
  asset static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js 6.94 KiB [emitted] 1 related asset
asset index.html 1.68 KiB [emitted]
asset asset-manifest.json 458 bytes [emitted]
runtime modules 31.4 KiB 15 modules
modules by path ./node_modules/ 1.7 MiB 217 modules
modules by path ./src/ 12.5 KiB
  modules by path ./src/*.js 3.2 KiB
    ./src/index.js 1.8 KiB [built] [code generated]
    ./src/reportWebVitals.js 1.4 KiB [built] [code generated]
  modules by path ./src/components/*.js 4.47 KiB
    ./src/components/DHeightTree.js 1.85 KiB [built] [code generated]
    ./src/components/DRenderTree.js 2.62 KiB [built] [code generated]
  ./src/apps/index.js 4.78 KiB [built] [code generated]
asset modules 15.3 KiB
  data:image/png;base64,iVBORw0KGgoAAAAN.. 14.7 KiB [built] [code generated]
  data:image/gif;base64,R0lGODlhEAAQAKIG.. 547 bytes [built] [code generated]
  data:image/gif;base64,R0lGODlhCQACAIAA.. 96.3 bytes [built] [code generated]
webpack 5.69.1 compiled successfully in 7648 ms
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 6.94 KiB [cached] 1 asset
assets by chunk 1.99 MiB (name: main)
  asset static/js/bundle.js 1.99 MiB [emitted] (name: main) 1 related asset
  asset main.7dca9de77756eb7fee7c.hot-update.js 366 bytes [emitted] [immutable] [hmr] (name: main) 1 related asset
assets by path *.json 611 bytes
  asset asset-manifest.json 583 bytes [emitted]
  asset main.7dca9de77756eb7fee7c.hot-update.json 28 bytes [emitted] [immutable] [hmr]
asset index.html 1.68 KiB [emitted]
Entrypoint main 1.99 MiB (1.91 MiB) = static/js/bundle.js 1.99 MiB main.7dca9de77756eb7fee7c.hot-update.js 366 bytes 2 auxiliary assets
cached modules 1.72 MiB [cached] 225 modules
runtime modules 31.4 KiB 15 modules
webpack 5.69.1 compiled successfully in 641 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 405 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 94 ms
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 96 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 111 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 66 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 64 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 52 ms
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 167 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 82 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 199 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 84 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 36 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 70 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 38 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 37 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 50 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 73 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 90 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 85 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 99 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 529 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 103 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 51 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 52 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 36 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 31 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 117 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 55 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 42 ms
Compiling...
Compiled successfully!

You can now view deity_tree_test in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.50.184:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 2 MiB [cached] 2 assets
assets by path . 2.13 KiB
  asset index.html 1.68 KiB [emitted]
  asset asset-manifest.json 458 bytes [emitted]
cached modules 1.72 MiB (javascript) 31.4 KiB (runtime) [cached] 240 modules
webpack 5.69.1 compiled successfully in 45 ms
Compiling...
Compiled successfully!

assets by path static/js/*.js 2.07 MiB
  asset static/js/bundle.js 2.06 MiB [emitted] (name: main) 1 related asset
  asset static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js 6.94 KiB [emitted] 1 related asset
asset index.html 1.68 KiB [emitted]
asset asset-manifest.json 458 bytes [emitted]
runtime modules 31.4 KiB 15 modules
modules by path ./node_modules/ 1.76 MiB 218 modules
modules by path ./src/ 12.7 KiB
  modules by path ./src/*.js 3.4 KiB
    ./src/index.js 2 KiB [built] [code generated]
    ./src/reportWebVitals.js 1.4 KiB [built] [code generated]
  modules by path ./src/components/*.js 4.47 KiB
    ./src/components/DHeightTree.js 1.85 KiB [built] [code generated]
    ./src/components/DRenderTree.js 2.62 KiB [built] [code generated]
  ./src/apps/index.js 4.78 KiB [built] [code generated]
asset modules 15.3 KiB
  data:image/png;base64,iVBORw0KGgoAAAAN.. 14.7 KiB [built] [code generated]
  data:image/gif;base64,R0lGODlhEAAQAKIG.. 547 bytes [built] [code generated]
  data:image/gif;base64,R0lGODlhCQACAIAA.. 96.3 bytes [built] [code generated]
webpack 5.69.1 compiled successfully in 5857 ms



```