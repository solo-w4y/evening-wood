import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export default {
  path: '/api',
  handler: app
}

app.get('/player/:id', async (req, res) => {
    const { id } = req.params
    const post = await prisma.player.findUnique({
      where: {
        id: Number(id),
      },
      include: { inventory:true }
    })
    post.inventory.items = await prisma.item.findMany({
        where: {
          inventoryId: Number(post.inventory.id),
        }
      })
    res.json(post)
})