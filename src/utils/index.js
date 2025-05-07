export function Response(data, message = 'success', status = 200) {
  return {
    status,
    message,
    data,
  };
}

export function ErrorResponse(data = null, message = 'error', status = 500) {
  return {
    status,
    message,
    data,
  };
}