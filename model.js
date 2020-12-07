const apiResponse = {
    success: false,
    message: '',
    payload: '',
    error: '',
}

const bankDetails = {
    name: '',
    amount: 0
}

const customerModel = {
    id: 0,
    name: '',
    accounts: [  ]
}

const config = {
    apiResponse,
    bankDetails,
    customerModel
}

module.exports = config