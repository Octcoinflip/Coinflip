/*
  COIN FLIP site configuration
  1) After launching on Pump.fun, paste the token mint address.
  2) Paste the trading pair address for the live DexScreener chart.
  3) Paste your public X profile URL.
  Do NOT put private keys, seed phrases, or wallet secrets in this file.
*/
window.COIN_FLIP_CONFIG = {
  tokenMint: "PASTE_TOKEN_MINT_HERE",
  pairAddress: "PASTE_PAIR_ADDRESS_HERE",
  xUrl: "PASTE_YOUR_X_PROFILE_URL_HERE",
  // For production, use a reputable Solana RPC provider instead of the public endpoint.
  rpcEndpoint: "https://api.mainnet-beta.solana.com"
};
