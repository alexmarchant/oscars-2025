import prisma from '$lib/prisma'
import type { User as PrismaUser } from '@prisma/client'
import bcrypt from 'bcrypt'
import { randomBytes } from 'crypto'

const SaltRounds = 10

export type User = Pick<PrismaUser, 'id' | 'displayName' | 'email' | 'paid' | 'admin'>

export type UserWithVotes = User & { votes: { category: string, nominee: string }[] }

export interface CreateUserData {
  displayName: string
  email: string
  password: string
}

export async function create (
  { displayName, email, password }:
  { displayName: string, email: string, password: string}
): Promise<{ user: User, sessionToken: string }> {
  const passwordHash = await bcrypt.hash(password, SaltRounds)
  const sessionToken = createSessionToken()

  const user = await prisma.user.create({
    select: {
      id: true,
      displayName: true,
      email: true,
      paid: true,
      admin: true,
    },
    data: {
      displayName,
      email,
      passwordHash,
      sessionToken
    }
  })

  return {
    user,
    sessionToken,
  }
}

export async function findBySessionToken(sessionToken: string): Promise<User | null> {
  return prisma.user.findUnique({
    select: {
      id: true,
      displayName: true,
      email: true,
      paid: true,
      admin: true,
    },
    where: {
      sessionToken,
    }
  })
}

export async function findAllWithVotes(): Promise<UserWithVotes[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      displayName: true,
      email: true,
      paid: true,
      admin: true,
      votes: {
        select: {
          category: true,
          nominee: true,
        }
      }
    },
  })
}

export function update(id: number, data: Partial<User>): Promise<User> {
  return prisma.user.update({
    select: {
      id: true,
      displayName: true,
      email: true,
      paid: true,
      admin: true,
    },
    where: {
      id,
    },
    data,
  })
}

export async function auth(
  { email, password }:
  { email: string, password: string }
): Promise<{ user: User, sessionToken: string }> {
  const originalUser = await prisma.user.findUnique({
    where: {
      email,
    }
  })
  if (!originalUser) throw new Error('User not found')

  const passwordMatches = await bcrypt.compare(password, originalUser.passwordHash)
  if (!passwordMatches) throw new Error('Password does not match')

  const sessionToken = createSessionToken()

  const updatedUser = await prisma.user.update({
    select: {
      id: true,
      displayName: true,
      email: true,
      paid: true,
      admin: true,
    },
    where: {
      email,
    },
    data: {
      sessionToken,
    }
  })

  return { 
    user: updatedUser,
    sessionToken,
  }
}

function createSessionToken() {
  return randomBytes(64).toString('hex')
}
