import prisma from '$lib/prisma'
import type { Winner } from '@prisma/client'

export async function findAll(): Promise<Winner[]> {
  return prisma.winner.findMany()
}

export async function upsertOne({ category, nominee }: { category: string, nominee: string }): Promise<Winner> {
  return prisma.winner.upsert({
    where: {
      category,
    },
    update: {
      nominee,
    },
    create: {
      category,
      nominee,
    }
  })
}

export async function deleteOne(category: string): Promise<Winner> {
  return prisma.winner.delete({
    where: {
      category,
    }
  })
}

export function mapWinners(winners: Winner[]): Record<string, string> {
  return winners.reduce((acc, winner) => {
    acc[winner.category] = winner.nominee
    return acc
  }, {} as Record<string, string>)
}