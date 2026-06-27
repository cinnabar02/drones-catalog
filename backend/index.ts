import 'dotenv/config';
import { Hono } from 'hono';
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma'


const app = new Hono();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

app.use(cors());

app.get('/drones', async (c) => {
    const drones = await prisma.drone.findMany()
    return c.json(drones)
});

serve(app, (info) => {
    console.log(`Server running on http://localhost:${info.port}`)
})

export default app;