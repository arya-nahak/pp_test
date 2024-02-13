

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



export const aQRequest = (payload) => ({
  type: "ADFREQUEST",
  payload
})

export const aQSuccess = (payload) => ({
  type: "ADFSUCCESS",
  payload
})

export const aQFailure = (payload) => ({
  type: "ADFFAILURE",
  payload
})