// Copyright rigélblu inc. All rights reserved.
export enum Env {
  Dev = 'development',
  Prod = 'production',
}

export enum Page {
  Home = 'home',
  Join = 'join',
}

export type FeatureFlagEnv = Partial<Record<Env, boolean>>;

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
