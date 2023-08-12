// Copyright rigélblu inc. All rights reserved.

export const Mode = {
  Debug: 'Debug',
  Info: 'Info',
} as const;
export type ModeType = (typeof Mode)[keyof typeof Mode];

export type SettingsType = {
  mode: ModeType;
  page: { typingSpeed: number };
  guidedMessageDuration: number;
};

const settings: SettingsType = {
  mode: Mode.Info,

  page: {
    typingSpeed: 30, // in milliseconds
  },

  guidedMessageDuration: 2000, // in milliseconds
};

export default settings;
