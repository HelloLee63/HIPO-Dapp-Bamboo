// export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname

export const toAbsoluteUrl = (pathname) => {
    const publicUrl = process.env.PUBLIC_URL
    let result = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl
    const paths = pathname.split('/').filter((p) => p !== '')
    paths.forEach((path) => {
      result += '/' + path
    })
    return result
  }