import { getOrCreateMMKV } from './createSecureMMKV'

/**
 * * For Future Storage
 */

export const mmkvStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const mmkv = await getOrCreateMMKV()
    const value = mmkv.getString(key)
    return value ?? null
  },
  setItem: async (key: string, value: string): Promise<void> => {
    const mmkv = await getOrCreateMMKV()
    mmkv.set(key, value)
  },
  removeItem: async (key: string): Promise<void> => {
    const mmkv = await getOrCreateMMKV()
    mmkv.delete(key)
  },
}
