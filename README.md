# Introduction 

This repo is to track addresses of different entities deployed to support 4337 ecosystem. These primarily are:
1. Bundlers
2. Paymasters
3. Factories

## Branding
Based on the details present here, branding for the component or smart wallet will be shown in the [JiffyScan](https://app.jiffyscan.xyz/) Userop Explorer.

### Branding Examples
- Showing Wallet for an account using factory: https://beta.jiffyscan.xyz/account/0xD0eA8249F56bB0B9E13B1f2eEDEf756C79CbE450?network=goerli
- Showing Wallet, Paymaster & Bundler Branding for a UserOp:
    -  https://beta.jiffyscan.xyz/userOpHash/0x91df4c29b995214b6ca0a308a327f9a32239dd4179e306ddf007bb8ad6850b97?network=matic
    -  https://beta.jiffyscan.xyz/account/0xD0eA8249F56bB0B9E13B1f2eEDEf756C79CbE450?network=goerli
- Showing a branding at a bundler page - https://beta.jiffyscan.xyz/bundler/0x67b4a9832dfbec071319e492f70e582ee316afc0?network=matic
- Etc... 

## Contributions

Support from the community in maintaining this list is not only appreciated, but very-much needed to have an exhaustive list.
Add the details of on-chain components by updating the following files:
- Add to the list of bundlers, paymasters and factories in `addressMapping.json`.
- Add their svg logo into the logos folder.

### Before

Before you start contributing, make sure you have the latest version of the code from our repository. You can clone our repository using the following command:

bash

`git clone https://github.com/jiffy-labs/aa-addresses.git`

and switch to the branch main

`git switch main && git pull`

# Pull requests

If you want to contribute to the project by adding addressed and logos, please submit a pull request. Here's how:

- Fork the repository.
- Create a new branch from the `main` branch.
- Make your changes and commit them.
- *Makes sure the sanity check runs with a success message `Looks Good !` by running the following command `npm test`*
- Push your branch to your forked repository.
- Open a pull request from your branch to the main branch of the original repository.

When submitting a pull request, please follow the format of this [sameple PR](https://github.com/jiffy-labs/aa-addresses/pull/2)




  
