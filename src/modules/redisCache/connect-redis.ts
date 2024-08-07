/* eslint-disable prettier/prettier */
import { createClient } from "redis";

export const connectRedis = async () => {
    const client = createClient({
        password: 'yAN45UpPXtoZm35PpKPmjRmm3sFo1UWd',
        socket: {
            host: 'redis-15484.c1.asia-northeast1-1.gce.redns.redis-cloud.com',
            port: 15484
        }
    });

    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();

    return client;
};