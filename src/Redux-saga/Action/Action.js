

export const Request = (payload) => ({
  type: "REQUEST",
  payload
})

export const Success = (payload) => ({
  type: "SUCCESS",
  payload
})

export const Failure = (payload) => ({
  type: "FAILURE",
  payload
})