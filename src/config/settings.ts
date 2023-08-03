// Copyright rigélblu inc. All rights reserved.

export enum Mode {
  Debug = 'DEBUG',
  Info = 'INFO',
}

const settings = {
  mode: Mode.Info,

  page: {
    typingSpeed: 30, // in milliseconds
  },

  guidedMessageDuration: 2000, // in milliseconds
};

export default settings;
