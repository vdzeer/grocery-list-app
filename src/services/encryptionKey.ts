import * as Keychain from 'react-native-keychain'
import 'react-native-get-random-values'
import { Buffer } from 'buffer'

const KEYCHAIN_SERVICE = 'com.grocerylist.encryptionKey'

export async function getEncryptionKey(): Promise<string> {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: KEYCHAIN_SERVICE,
    })
    if (credentials && credentials.password) {
      return credentials.password
    }

    const newKeyBytes = crypto.getRandomValues(new Uint8Array(32))
    const newKey = Buffer.from(newKeyBytes).toString('base64')

    await Keychain.setGenericPassword('user', newKey, {
      service: KEYCHAIN_SERVICE,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    })

    return newKey
  } catch (err) {
    throw new Error(err as string)
  }
}
