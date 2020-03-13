export function flatten(xs: any[]): any[] {
  const res: any[] = []

  for (let x of xs) {
    if (Array.isArray(x)) {
      for (let e of flatten(x)) {
        res.push(e)
      }
    } else {
      res.push(x)
    }
  }

  return res
}
