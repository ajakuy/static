import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
    routeRules: {
        '/': { redirect: { to: 'https://ajakuy.com', statusCode: 301 } },
        '/api/v1/**': { static: true, cors: true, headers: { 'access-control-allow-methods': 'GET' } },
    }
})
