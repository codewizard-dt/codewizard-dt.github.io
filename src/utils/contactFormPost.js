const contactFormUrl = 'https://script.google.com/macros/s/AKfycby4Bn-dBRHlS2DOy9t73uNf8dHVlNpq-96OOjGPnNXlNdW1-fiGJwjq-wv_wlFogrup/exec'
// const contactFormUrd = 'https://script.google.com/macros/s/AKfycby4Bn-dBRHlS2DOy9t73uNf8dHVlNpq-96OOjGPnNXlNdW1-fiGJwjq-wv_wlFogrup/exec'
const contactFormPost = async (data) => {
  const body = new FormData()
  for (let [key, value] of Object.entries(data)) {
    body.append(key, value)
  }
  return fetch(contactFormUrl, {
    method: 'POST',
    body
  })
}

export default contactFormPost