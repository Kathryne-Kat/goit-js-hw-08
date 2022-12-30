import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const userInfo = {};

const feedbackFormFields = () => {
    const userInfoSave = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (userInfoSave === null) return;
    for (const el in userInfoSave) {
        feedbackForm.elements[el].value = userInfoSave[el]
    }
};
feedbackFormFields();

const onfeedbackFormInput = e => {
    const { target } = e;
    const fildValue = target.value;
    const fildName = target.name;

    userInfo[fildName] = fildValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));

}   

const feedbackFormSubmit = e => {
    e.preventDefault();
    feedbackForm.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state')

};

feedbackForm.addEventListener('input', throttle(onfeedbackFormInput, 500) );
feedbackForm.addEventListener('submit', feedbackFormSubmit);
