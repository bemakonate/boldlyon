export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues,
    }
}

export const createInputConfig = ({ placeholder, rules, type = 'text' }) => {
    return {
        elementType: "input",
        elementConfig: {
            type: type,
            placeholder: placeholder
        },
        value: '',
        validation: rules,
        valid: false,
        errorMsg: '',
        touched: false,
    }
}

export function checkValidity(value, rules, form) {
    let isValid = true;
    const validErrorMsgs = [];
    if (!rules) {
        return true;
    }
    const isRequired = (value) => value.trim() !== '';
    const isMinLength = (value, minLength = rules.minLength) => value.length >= minLength;
    const hasUpperCase = (str) => (/[A-Z]/.test(str));
    const hasNumber = (myString) => /\d/.test(myString);
    const isEmail = (value) => {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(value)
    }

    if (rules.required) {
        const rule = isRequired(value)
        isValid = rule && isValid;
        if (!rule) {
            validErrorMsgs.push('This field is required')
        }
    }
    if (rules.minLength) {
        const rule = isMinLength(value);
        isValid = rule && isValid;
        if (!rule) {
            validErrorMsgs.push(`There is a minimum length of ${rules.minLength}`)
        }
    }

    if (rules.isEmail) {
        const rule = isEmail(value);
        isValid = rule && isValid;
        if (!rule) {
            validErrorMsgs.push(`Please enter a valid email`)
        }
    }

    if (rules.strongPassword) {
        const rule = isMinLength(value, 6) && hasUpperCase(value) && hasNumber(value);
        isValid = rule && isValid;
        if (!rule) {
            validErrorMsgs.push(`Password must be at least 6 characters, and have a uppercase letter, and at least one number`)
        }
    }

    if (rules.match) {
        const rule = value === form[rules.match].value;
        isValid = rule && isValid;
        if (!rule) {
            validErrorMsgs.push(`Confirm Password must match with password`)
        }
    }

    return { isValid, validErrorMsgs };
}