export default function promisify(fn) {
  return (arg = {}) => {
    return new Promise((resolve, reject) => {
      arg.success = res => {
        resolve(res)
      }
      arg.fail = err => {
        reject(err)
      }
      fn(arg)
    })
  }
}