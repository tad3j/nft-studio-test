export const Environments = {
  dev: 'development',
  stg: 'staging',
  prod: 'production',
};

export const WebStorageKeys = {
  AUTH: 'nft_studio_auth',
  IPNS: 'nft_studio_ipns',
  USER: 'nft_studio_user',
  APP_VERSION: 'nft_studio_version',
};

export enum ClaimType {
  AIRDROP = 1,
  WHITELIST = 2,
  FREE_MINT = 3,
  POAP = 4,
}

/** NFT Chains */
export enum Chains {
  MOONBEAM = 1284,
  MOONBASE = 1287,
  ASTAR_SHIBUYA = 81, // testnet
  ASTAR = 592,
}

/**
 * Default pagination values.
 */
export enum PaginationValues {
  PAGE_MAX_LIMIT = 100,
  PAGE_DEFAULT_LIMIT = 25,
}

export enum AirdropStatus {
  PENDING = 1,
  EMAIL_SENT = 2,
  EMAIL_ERROR = 3,
  WALLET_LINKED = 4,
  TRANSACTION_CREATED = 5,
  AIRDROP_COMPLETED = 6,
  AIRDROP_ERROR = 7,
  AIRDROP_CLAIM_EXPIRED = 8,
  IN_WAITING_LINE = 9,
}

/**
 * 0 = Not yet started, 1 = In progress, 2 = Finished
 */
export enum PoapStatus {
  WAITING = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
}
