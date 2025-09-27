/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'pic.rmb.bdstatic.com'
        }, { protocol: 'https', hostname: 'cdni.hotnakedwomen.com' },
        {
            hostname: 'pic4.zhimg.com'
        },
        {
            hostname: 'avatars.mds.yandex.net'
        },],
    }
}

module.exports = nextConfig
