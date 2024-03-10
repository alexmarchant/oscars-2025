import prisma from '$lib/prisma'
import type { Setting } from '@prisma/client'

export function findAll(): Promise<Setting[]> {
  return prisma.setting.findMany()
} 

export async function upsert({ key, value }: { key: string, value: string }): Promise<Setting> {
  return prisma.setting.upsert({
    where: {
      key,
    },
    update: {
      value,
    },
    create: {
      key,
      value,
    }
  })
}