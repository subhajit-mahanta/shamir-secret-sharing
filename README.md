# Shamir Secret Sharing Tool (Static HTML)

This is a simple, offline-capable tool for splitting a secret into multiple parts using the Shamir Secret Sharing scheme, and reconstructing the secret from a subset of those parts.

## Features
- 100% static HTML + JS, no build tools or dependencies required
- Uses [secrets.js-grempe](https://github.com/amper5and/secrets.js) for cryptographic operations
- Each share is displayed in its own copyable box
- Works entirely in your browser, even offline

## Usage
1. **Split a secret:**
   - Enter your secret in the "Secret" box.
   - Choose the number of parts and the threshold required to reconstruct.
   - Click "Split Secret". Copy and distribute each part to a different person.
2. **Reconstruct the secret:**
   - Collect the required number of parts (at least the threshold).
   - Paste each part (one per line) into the "Combine" section.
   - Click "Combine Parts" to reveal the original secret.

## Security Tip
Never give all parts to one person. The secret can only be reconstructed if the threshold number of parts are combined.

## Demo
Open `shamir-static.html` in any modern web browser.

## License
MIT
