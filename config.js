module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    remoteCache: process.env.REMOTE_CACHE || true,
    api: {
        port: process.env.API_PORT || 3004,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        host: process.env.MYSQL_PORT || 3005,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '9un9x2szLp',
        database: process.env.MYSQL_DB || 'oqofkk3Wd9',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3005,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || "redis-14871.c11.us-east-1-3.ec2.cloud.redislabs.com",
        port: process.env.REDIS_PORT || "14871",
        password: process.env.REDIS_PASS || "9q6bAyOtCJYVXfH7S1ExCVdTqzJ50cgN"
    }
}