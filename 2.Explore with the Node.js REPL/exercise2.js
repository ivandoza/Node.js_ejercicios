const crypto = require('crypto');
console.log(Object.keys(crypto));

[
    'checkPrime',
    'checkPrimeSync',
    'createCipheriv',
    'createDecipheriv',
    'createDiffieHellman',
    'createDiffieHellmanGroup',
    'createECDH',
    'createHash',
    'createHmac',
    'createPrivateKey',
    'createPublicKey',
    'createSecretKey',
    'createSign',
    'createVerify',
    'diffieHellman',
    'generatePrime',
    'generatePrimeSync',
    'getCiphers',
    'getCipherInfo',
    'getCurves',
    'getDiffieHellman',
    'getHashes',
    'hkdf',
    'hkdfSync',
    'pbkdf2',
    'pbkdf2Sync',
    'generateKeyPair',
    'generateKeyPairSync',
    'generateKey',
    'generateKeySync',
    'privateDecrypt',
    'privateEncrypt',
    'publicDecrypt',
    'publicEncrypt',
    'randomBytes',
    'randomFill',
    'randomFillSync',
    'randomInt',
    'randomUUID',
    'scrypt',
    'scryptSync',
    'sign',
    'setEngine',
    'timingSafeEqual',
    'getFips',
    'setFips',
    'verify',
    'Certificate',
    'Cipher',
    'Cipheriv',
    'Decipher',
    'Decipheriv',
    'DiffieHellman',
    'DiffieHellmanGroup',
    'ECDH',
    'Hash',
    'Hmac',
    'KeyObject',
    'Sign',
    'Verify',
    'X509Certificate',
    'secureHeapUsed',
    'constants',
    'webcrypto',
    'subtle',
    'getRandomValues'
  ]

  const randomID = crypto.randomBytes(8).toString('hex');
  console.log('Random ID:', randomID);

//   Random ID: 5779fb3816d03f6d