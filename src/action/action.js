export function singleDataAction(type, payload) {
  return {
    type,
    payload
  };
}

export function multipleDataAction(type, id, payload) {
  return {
    type,
    id,
    payload
  };
}
