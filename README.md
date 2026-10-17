# COIN FLIP website starter

This is a responsive starter site for your COIN FLIP Solana meme coin.

## Included
- Your supplied logo
- Live-chart embed slot (DexScreener)
- In-page Jupiter Terminal swap integration
- Mobile-responsive layout
- Configuration placeholders for the token mint, pair address, and X profile

## Before launch
1. Launch the token on Pump.fun.
2. Copy the correct token mint address from the official launch page.
3. Once a trading pair is available, copy its pair address and verify it on a trusted explorer.
4. Open `config.js` and replace:
   - `PASTE_TOKEN_MINT_HERE`
   - `PASTE_PAIR_ADDRESS_HERE`
   - `PASTE_YOUR_X_PROFILE_URL_HERE`
5. Test with a small amount and verify the token mint carefully before sharing the website.

## Publish free with Vercel
1. Create a GitHub repository and upload all files in this folder.
2. Import that repository into Vercel.
3. Deploy with the default static settings.
4. Later, connect a custom domain if you want one.

## Important notes
- The chart cannot show real trading data before a trading pair exists.
- Jupiter Terminal only executes swaps when a valid supported route is available for the token. Pump.fun bonding-curve trading may not be available through Jupiter before migration, so verify the route after launch; do not assume the widget supports every launch phase.
- This starter uses the public Solana RPC endpoint for easy testing only. Public endpoints may be rate-limited; use a reputable provider for production.
- Never add a seed phrase or private key to the website or repository.
- This is a starter project, not a guarantee of production readiness. Test on the deployed site before promoting it.
