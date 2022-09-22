// Success
export function ok(data?: BodyInit) {
  return new Response(data, {
    status: 200
  })
}

export function created(data?: BodyInit) {
  return new Response(data, {
    status: 201
  })
}

// Redirects
export function redirect(redirectURL: string) {
  const headers = new Headers({
    location: redirectURL
  })

  return new Response(null, {
    status: 302,
    headers
  })
}

// Client Errors
export function badRequest(data?: BodyInit) {
  return new Response(data, {
    status: 400
  })
}

export function unauthorized(data?: BodyInit) {
  return new Response(data, {
    status: 401
  })
}

export function forbidden(data?: BodyInit) {
  return new Response(data, {
    status: 403
  })
}

// Server Errors
export function internalServerError(data?: BodyInit) {
  return new Response(data, {
    status: 500
  })
}