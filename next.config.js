/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["www.pulsecarshalton.co.uk"],
    },
};

module.exports = nextConfig;
