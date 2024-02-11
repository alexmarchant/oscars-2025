import prisma from '$lib/prisma'
import type { Vote as PrismaVote } from '@prisma/client'

export type Vote = PrismaVote

export interface VoteMap {
  [category: string]: string
}

export interface UpsertVoteData {
  category: string
  nominee: string
}

export async function upsert({ userId, votes }: { userId: number, votes: UpsertVoteData[] }): Promise<Vote[]> {
  if (!votes.length) {
    throw new Error('At least one vote is required')
  }

  const promises = votes.map(vote => {
    return prisma.vote.upsert({
      where: {
        user_category_unique: {
          userId,
          category: vote.category,
        },
      },
      update: {
        nominee: vote.nominee,
      },
      create: {
        userId,
        category: vote.category,
        nominee: vote.nominee,
      },
    })
  })

  return Promise.all(promises)
}

export async function findByUserId(userId: number): Promise<Vote[]> {
  return prisma.vote.findMany({
    where: {
      userId,
    }
  })
}

export function mapVotes(votes: Vote[]): VoteMap {
  return votes.reduce((acc, vote) => {
    acc[vote.category] = vote.nominee
    return acc
  }, {} as VoteMap)
}