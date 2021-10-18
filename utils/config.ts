const config = {
  TRANSITION_DURATION: 1000,
  moralis: {
    appId: 'f1HhHOygtnsA3SdtewpzuNQyX2Wx2jEEtJh42vtG',
    serverUrl: 'https://y03yqvp36gxb.moralishost.com:2053/server',
  },
  testnet: {
    s3: {
      bucket: "testnet.nft.mousehaunt.com",
    },
    MouseHauntToken: {
      address: "0x211D1B03962E55665b40265db82b7FDa3eCD6104",
      wallet: "0x087B58029f7251E7054153Bc8775e14A68490286",
    },
    MHTPrivateSale: {
      address: "0xEac57Bc28298cc2312Ffc92f6CEdB88F0387b451",
    },
    MouseHauntBooster: {
      address: "",
      baseUri: "https://testnet.nft.mousehaunt.com/booster/",
    },
  },
}

export default config