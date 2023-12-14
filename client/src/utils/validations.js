function isEmptyString(string) {
    return string.trim().length === 0;
}

function checkArrayForEmptyString(array) {
    return array.filter((string) => isEmptyString(string)).length > 0;
}

function isPassDiff(password, repassword) {
    return password !== repassword;
}

export { checkArrayForEmptyString, isPassDiff };
