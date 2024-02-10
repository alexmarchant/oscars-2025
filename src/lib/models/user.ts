import prisma from '$lib/prisma'
import bcrypt from 'bcrypt'
import { randomBytes } from 'crypto'

const SaltRounds = 10

export interface CreateUserData {
  displayName: string
  email: string
  password: string
}

export class User {
  displayName: string
  email: string

  constructor(
    displayName: string,
    email: string,
  ) {
    this.displayName = displayName
    this.email = email
  }

  static async create(data: CreateUserData) {
    const passwordHash = await bcrypt.hash(data.password, SaltRounds)
    const sessionToken = randomBytes(64).toString('hex')

    await prisma.user.create({
      data: {
        displayName: data.displayName,
        email: data.email,
        passwordHash,
        sessionToken
      }
    })

    return sessionToken
  }

  static async findBySessionToken({ sessionToken }: { sessionToken: string }): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      select: {
        displayName: true,
        email: true,
      },
      where: {
        sessionToken,
      }
    })

    if (!user) return

    return new User(user.displayName, user.email)
  }

  static async auth({ email, password }: { email: string, password: string }): Promise<string | undefined> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    })

    if (!user) return

    const passwordMatches = await bcrypt.compare(password, user.passwordHash)
    if (!passwordMatches) return

    const sessionToken = randomBytes(64).toString('hex')

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        sessionToken,
      }
    })

    return sessionToken
  }

  toJSON () {
    return {
      displayName: this.displayName,
      email: this.email,
    }
  }
} 