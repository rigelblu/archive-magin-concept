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
    tryMaginEnabled: true,
  },
  join: {
    pay: false,
    termsConditionsPrivacy: false,
  },
};

export default featureFlag;
