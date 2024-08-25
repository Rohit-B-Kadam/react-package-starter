import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

// import packageJson from "./package.json" assert { type: "json" };

export default defineConfig({
    input: "src/index.ts",
    output: [{
        dir: "dist",
        format: "es",
        name: "react-package-starter",
        sourcemap: true,
        exports: 'named',
    },
    {
          file: "dist/index.cjs",
          format: 'cjs',
          exports: 'named',
          sourcemap: true,
    },
    ],
    // output: [
    //     {
    //       file: pkg.main,
    //       format: 'cjs',
    //       exports: 'named',
    //       sourcemap: true,
    //     },
    //     {
    //       file: pkg.module,
    //       format: 'es',
    //       exports: 'named',
    //       sourcemap: true,
    //     },
    //   ],
    external: ["react", "react-dom", "./sample_app/**"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })] 
}) 