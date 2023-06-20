/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    experimental:{appDir: true},
    images: { 
        unoptimized: true, 
        // loader: 'custom',
        // loaderFile: './assets',
     } ,
     compiler: {
        styledComponents: true,
      },
experimental: {        modern: true,        dynamicImports: true,        css: true    }
}

module.exports = nextConfig
