declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.scss';

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any;
  export default data;
}
