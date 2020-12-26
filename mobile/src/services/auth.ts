interface Response {
  token: string
  user: {
    name: string
    email: string
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fgdkgdkfjgbdkfgjbdfkgjbkdfg',
        user: {
          name: 'Victor',
          email: 'vitorsoares96@hotmail.com'
        }
      })
    }, 2000);
  })
}