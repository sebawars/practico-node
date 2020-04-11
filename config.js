module.exports = {
    remoteDB: process.env.REMOTE_DB || true,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'oqofkk3Wd9',
        password: process.env.MYSQL_PASS || '9un9x2szLp',
        database: process.env.MYSQL_DB || 'oqofkk3Wd9',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || "redis-13768.c10.us-east-1-3.ec2.cloud.redislabs.com",
        port: process.env.REDIS_PORT || "13768",
        password: process.env.REDIS_PASS || "x9iZI4GP656WDV5TvSKqXajnGhQfvWNO"
    }
}