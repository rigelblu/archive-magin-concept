// Copyright rigélblu inc. All rights reserved.
let appPrefix = '';

export function clearAppPrefix() {
  appPrefix = '';
}

export function setAppPrefix(prefix: string) {
  appPrefix = prefix;
}

function clsx(...classes: string[]): string {
  if (!classes) console.error('clsx: Input to clsx cannot be null or undefined');

  return [...classes].filter(Boolean).join(' ').trim();
}

export function cmpCls(component: string): string {
  if (!component) console.error('cmpCls: component is null or undefined');
  if (!appPrefix) console.error('cmpCls: component prefix is null or undefined');

  return appPrefix && component ? `${appPrefix}-${component}` : 'app-cmp-error';
}

export default clsx;
