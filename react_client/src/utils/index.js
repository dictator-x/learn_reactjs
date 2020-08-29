export function getRedirectTo(type, header) {
  let path

  if ( type === 'personal' ) {
    path = '/personal'
  } else {
    path = '/business'
  }

  if ( ! header ) {
    path += 'info'
  }

  return path
}
