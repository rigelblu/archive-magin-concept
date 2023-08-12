// Copyright rigélblu inc. All rights reserved.

export const Env = {
  Dev: 'development',
  Prod: 'production',
} as const;
export type EnvType = (typeof Env)[keyof typeof Env];

export const Page = {
  Home: 'home',
  Join: 'join',
} as const;
export type PageType = (typeof Page)[keyof typeof Page];

export type FeatureFlagEnv = Partial<Record<EnvType, boolean>>;

export type FeatureFlagType = {
  [key: string]: boolean | FeatureFlagEnv;
};

export type FeatureFlagNestedObj = {
  [key: string]: FeatureFlagType;
};

const featureFlag: FeatureFlagNestedObj = {
  [Page.Home]: {
    enableTryMagin: true,
  },
  [Page.Join]: {
    enablePay: { [Env.Dev]: true, [Env.Prod]: true },
    termsPrivacy: true,
  },
};

export default featureFlag;
