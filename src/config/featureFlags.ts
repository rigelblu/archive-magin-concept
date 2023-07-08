// Copyright rigélblu inc.
// All rights reserved.
export type FeatureFlagType = {
  [key: string]: boolean;
};

export type FeatureFlagNestedObj = {
  [key: string]: FeatureFlagType;
};

const featureFlag: FeatureFlagNestedObj = {
  home: {
    enableTryMagin: true,
  },
  join: {
    enablePay: false,
    termsConditionsPrivacy: false,
  },
};

export default featureFlag;
