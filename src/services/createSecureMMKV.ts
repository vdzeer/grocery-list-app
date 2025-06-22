import { MMKV } from 'react-native-mmkv'
import { getEncryptionKey } from './encryptionKey'

let mmkvInstance: MMKV | null = null

export async function getOrCreateMMKV(): Promise<MMKV> {
  if (mmkvInstance) {
    return mmkvInstance
  }

  const encryptionKey = await getEncryptionKey()

  mmkvInstance = new MMKV({
    id: 'secure-instance',
    encryptionKey,
  })

  return mmkvInstance
}
