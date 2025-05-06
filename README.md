<p align="center">
  <picture>
    <source
      width="250"
      srcset="./docs/public/logo-dark.png"
      media="(prefers-color-scheme: dark)"
    />
    <source
      width="250"
      srcset="./docs/public/logo-light.png"
      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
    />
    <img width="250" src="./docs/public/logo-light.png" />
  </picture>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
</a>

<p align="center">
  <a href="https://discord.gg/XuNFDcDZGj"><img src="https://img.shields.io/discord/1229292283657195520?style=flat&logo=discord&logoColor=white&label=Discord&color=%23404eed" /></a>
  <a href="https://t.me/+6WKTUzWijf1kMzFl"><img src="https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram" /></a>
</p>

---

A collection of diverse documentation engineering tools.

## How to develop

The project uses [`unbuild`](https://github.com/unjs/unbuild) and [`vite`](https://github.com/vitejs/vite) to develop and build. With the powerful features offered from [`jiti`](https://github.com/unjs/jiti), we no longer need to use [Rollup](https://rollupjs.org/) for tedious configuration and then watch the local file changes and bundle the modified and developed the modules without [`vite`](https://github.com/vitejs/vite) for hot-reload. We can directly run the following command to output the bundled file and get started on development:

```shell
# run these scripts in root folder
pnpm i
pnpm run packages:stub
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr packages:stub
```

Next, you need to start the the documentation site (with VitePress) for previewing and development. You can use the following command:

```shell
pnpm run docs:dev
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr docs:dev
```

## How to build

```shell
pnpm run packages:build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr packages:build
```

To build the documentation and preview site, you can use the following command:

```shell
pnpm run docs:build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr docs:build
```
