var forge = require('node-forge');

export default class BlockChainHelper {
  public generateSignature(privateKeyPem: string, message: string) : string {
    let privateKey = forge.pki.privateKeyFromPem(privateKeyPem)

    let md = forge.md.sha512.create();
    md.update(message, 'utf8');
    let signatureBytes = privateKey.sign(md);

    return forge.util.bytesToHex(signatureBytes)
  }

  public getHashForBlock(userId: string, message: string, index: number, previousHash: string, signature: string) : string {
    let key = "" + JSON.stringify([{ userId, message }]) + index + previousHash + signature

    var md = forge.md.sha256.create()
    md.update(key)
    return md.digest().toHex()
  }
}