/* eslint-disable no-unused-vars */
export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Foo');
    }, 300);
  });
  return myPromise;
}
