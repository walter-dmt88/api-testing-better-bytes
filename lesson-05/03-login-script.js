// Extract the access token from the response and store it in a collection variable.
const responseData = pm.response.json();
pm.collectionVariables.set('AccessToken', responseData.data.accessToken)

pm.test("Verìy response code", () => {
    pm.response.to.have.status(200)
})

pm.test("Verify response message", () => {
    pm.expect(pm.response.text()).to.include("Login successful")
})

// Collection - pre request script
let accessToken = pm.collectionVariables.get("AccessToken")
if (!accessToken) {
    pm.execution.setNextRequest('User login')
} else {
    pm.execution.setNextRequest('Get all collection')
}

