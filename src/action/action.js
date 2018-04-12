import I from "immutable";

export function singleDataAction(type, payload) {
  return {
    type,
    payload: I.fromJS(payload)
  };
}

export function multipleDataAction(type, id, payload) {
  return {
    type,
    id,
    payload
  };
}
