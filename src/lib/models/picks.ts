import prisma from '$lib/prisma'

export class Pick {
  id?: number
  userId: number
  category: string
  nominee: string

  constructor({ id, userId, category, nominee }: { id?: number, userId: number, category: string, nominee: string }) {
    this.id = id
    this.userId = userId
    this.category = category
    this.nominee = nominee
  }

  static async upsert(picks: Pick[]) {
    if (!picks.length) {
      throw new Error('At least one pick is required')
    }

    const userId = picks[0].userId

    const promises = picks.map(pick => {
      return prisma.pick.upsert({
        where: {
          user_category_unique: {
            userId,
            category: pick.category,
          },
        },
        update: {
          nominee: pick.nominee,
        },
        create: pick.toJSON(),
      })
    })

    return Promise.all(promises)
  }

  toJSON() {
    return {
      userId: this.userId,
      category: this.category,
      nominee: this.nominee,
    }
  }
}