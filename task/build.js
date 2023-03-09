import fs from 'node:fs';
import { build } from 'esbuild';

console.log("Start build .....");
console.log();

fs.existsSync("log") || fs.mkdirSync("log");
fs.existsSync("tmp") || fs.mkdirSync("tmp");
fs.existsSync("dist") || fs.mkdirSync("dist");

var supported_lang = [

    'en',
    'de',
    'at',
    'us'
];

var supported_charset = {

    'latin': ["default", "advanced", "balance", "extra", "simple"],
    'cjk': ["default"],
    'cyrillic': ["default"],
    'arabic': ["default"],
};

await Promise.all([
    await build({
        entryPoints: [
            'src/index.js',
        ],
        bundle: true,
        outfile: 'dist/flexsearch.cjs',
        platform: 'browser',
        format: 'cjs',
    }),
    await build({
        entryPoints: [
            'src/index.js',
        ],
        bundle: true,
        outfile: 'dist/flexsearch.browser.js',
        platform: 'browser',
        format: 'iife',
        globalName: 'FlexSearch',
    }),
]);


console.log('✅ Build completed!')
