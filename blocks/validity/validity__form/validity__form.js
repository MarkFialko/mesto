import {checkInputValidity} from "./../validity__input/validity__input.js"
export function checkValidityForm(form,settings) {
    const inputs = form.querySelectorAll("input");
    let countValidity = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (checkInputValidity(form, inputs[i],false,settings)) {
            countValidity++;
        }
    }
    return countValidity === inputs.length ? true : false;
}