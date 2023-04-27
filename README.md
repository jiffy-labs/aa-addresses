# Introduction 

This repo will be used to keep a track of different
1. Bundlers
2. Paymasters
3. Factories

That are present in the ERC-4337 ecosystem. 

This repo will curently be used to populate the different brand in jiffyscan 

Example usage:
- Company references an account - https://beta.jiffyscan.xyz/account/0xD0eA8249F56bB0B9E13B1f2eEDEf756C79CbE450?network=goerli
- Company references in user op hash 
    -  https://beta.jiffyscan.xyz/account/0xD0eA8249F56bB0B9E13B1f2eEDEf756C79CbE450?network=goerli
    -  https://beta.jiffyscan.xyz/userOpHash/0x91df4c29b995214b6ca0a308a327f9a32239dd4179e306ddf007bb8ad6850b97?network=matic
- Company refrencees in bundler page - https://beta.jiffyscan.xyz/bundler/0x67b4a9832dfbec071319e492f70e582ee316afc0?network=matic
- Etc... 

The example links are just references. But the point of this mapping is so that different parties can use the information for their applications and analytics. 

# How to contribute ?

It would be great if companies and projects could 
- Add to the list of bundlers, paymasters and factories in `addressMapping.json`.
- Add their svg logo into the logos folder.

### Before

Before you start contributing, make sure you have the latest version of the code from our repository. You can clone our repository using the following command:

bash

`git clone https://github.com/jiffy-labs/jiffyscan-frontend.git`

and switch to the branch main

`git switch main && git pull`

Once you have the code, you can install the dependencies by running:

`npm install` 

# Pull requests

If you want to contribute to the project by adding addressed and logos, please submit a pull request. Here's how:

- Fork the repository.
- Create a new branch from the `main` branch.
- Make your changes and commit them.
- *Makes sure the sanity check runs with a success message `Looks Good !` by running the following command `npm test`*
- Push your branch to your forked repository.
- Open a pull request from your branch to the main branch of the original repository.

When submitting a pull request, please include a clear description of your changes. 




  
