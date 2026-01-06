import type { Linter } from 'eslint'

export declare const baseConfig: Linter.Config[]
export declare const typescriptConfig: Linter.Config[]
export declare const reactConfig: Linter.Config[]
export declare const nextConfig: Linter.Config[]
export declare const prettierConfig: Linter.Config[]
export declare const hooksConfig: Linter.Config[]
export declare const importsConfig: Linter.Config[]

export interface BetterTailwindcssOptions {
  /** Path to the CSS entry file (Tailwind v4) */
  entryPoint: string
}

export declare function betterTailwindcssConfig(
  options: BetterTailwindcssOptions
): Linter.Config[]
