/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanilaExtract = createVanillaExtractPlugin();

const nextConfig = {};

module.exports = withVanilaExtract(nextConfig);
