import { Module } from '@nuxt/types'
import { ESBuildPlugin } from 'esbuild-loader'
import { TransformOptions } from 'esbuild'
import merge from 'deepmerge'

declare module '@nuxt/types' {
  interface NuxtOptions {
    esbuild?: TransformOptions
  }
}

const defaults: TransformOptions = {
  target: 'es2015',
  loader: 'ts',
}

const mod: Module<TransformOptions> = function (
  moduleOptions: TransformOptions
) {
  // Create default options
  const options: TransformOptions = merge.all([
    defaults,
    this.options.esbuild || {},
    moduleOptions || {},
  ])

  // Extend webpackconfig
  this.extendBuild((config) => {
    // if config is strange do nothing
    if (!config.module) {
      return
    }

    config.resolve!.extensions!.push('.ts', '.tsx')

    // Remove babel
    config.module.rules =
      config.module?.rules.filter(
        (rule) => !(rule?.test as RegExp | undefined)?.test?.('.js')
      ) ?? []

    // add ESBuild Plugin
    config.plugins?.push(new ESBuildPlugin())

    // Define new rule to handle js and ts and jsx and tsx and mjs
    config.module.rules.push({
      test: /\.((m?jsx?)|(ts))$/,
      use: [
        {
          loader: './modules/es.js',
        },
        {
          loader: 'esbuild-loader',
          options: options,
        },
      ],
    })
  })
}

export default mod
