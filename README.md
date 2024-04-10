# virtual-wallet-oasis

The app is a Virtual Wallet using Google/Apple Wallet, including the APIs it needs to use and the screens it would need for different parts/user flows:

App Summary:
The virtual wallet app allows users to securely store virtual travel cards within their Google Wallet or Apple Wallet. Users can add cards, load funds, and make transactions using their virtual wallet directly from their mobile device.

APIs Used:

Google Pay API or Apple Pay API: These APIs are used to provision virtual travel cards securely into the user's Google Wallet or Apple Wallet.
Bank API or Third-party Payment Gateway API: These APIs are used for fund loading transactions, allowing users to add funds to their virtual wallet from their bank account or other payment sources.
Please create the following seperate Screens/User Flows:

1. Home Screen:

Displays the user's virtual wallet balance and list of added cards.
Allows users to initiate fund loading or make transactions.
2. Add Card Screen:

Users can enter virtual travel card details, including card number, expiration date, and CVV.
Validates card details and adds the card to the Google Wallet or Apple Wallet using the respective API.
3. Load Funds Screen:

Users can choose a funding source (e.g., bank account) and enter the amount to load into their virtual wallet.
Initiates a fund loading transaction using the Bank API or Third-party Payment Gateway API.
4. Transaction Screen:

Users can select a virtual travel card from their wallet and enter the transaction amount.
Initiates a transaction using the selected card, deducting the transaction amount from the wallet balance.
5. Settings Screen:

Allows users to manage their virtual wallet settings, such as adding/removing cards, viewing transaction history, and updating account information.
Authentication Screens:

Users may be prompted to authenticate transactions or account changes using biometric authentication (e.g., fingerprint or face recognition) or PIN/password.
6. Error/Confirmation Screens:

Displays confirmation messages for successful transactions or errors/messages for failed transactions, insufficient funds, or invalid card details. use teal colour and white and black throughout the app. 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/virtual-wallet-oasis.git
cd virtual-wallet-oasis
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
