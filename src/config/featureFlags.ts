// Copyright rigélblu inc.
// All rights reserved.

export type FeatureFlagEnv = {
  development: boolean;
  production: boolean;
};

export type FeatureFlagType = {
  [key: string]: boolean | FeatureFlagEnv;
};

export type FeatureFlagNestedObj = {
  [key: string]: FeatureFlagType;
};

const featureFlag: FeatureFlagNestedObj = {
  home: {
    enableTryMagin: true,
  },
  join: {
    enablePay: { development: true, production: true },
    termsPrivacy: true,
  },
};

export default featureFlag;
