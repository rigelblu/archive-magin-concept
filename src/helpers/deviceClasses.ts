// Copyright rigélblu inc.
// All rights reserved.

const devices = [
  { userAgent: 'iPhone|iPad', class: 'device-ios' },
  { userAgent: 'Android', class: 'device-android' },
];

export default function getDeviceClasses(navigator: Navigator): string {
  let className = '';

  devices.forEach((device) => {
    if (new RegExp(device.userAgent, 'i').test(navigator.userAgent)) {
      className = device.class;
    }
  });
  return className;
}
