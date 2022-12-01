export function validateCreds(signUpCreds) {
    const { email, password, contactNum } = signUpCreds
    const valid = { email: false, password: false, contactNum: false }

    const eReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const phReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!eReg.test(email)) {
        return valid
    }
    valid.email = true

    if (!pReg.test(password)) {
        return valid
    }
    valid.password = true

    if (!phReg.test(contactNum)) {
        return valid
    }

    valid.contactNum = true

    return valid
}

export function phoneNumberBuilder(newVal, currentValLen) {
    let val = newVal.replace(/([a-z])$/, '')
    if ([3, 7].includes(val.length) && ![4, 8].includes(currentValLen)) { // add a dash if length is 3, allow user to delete and not auto-add if length is 4
      val += "-"
    }
    
    if(val.length <= 12 ) { // don't allow phone numbers longer than 12 characters(including dashes)
        return {canUpdate : true, val}
    }

    return {canUpdate : false, val}

}