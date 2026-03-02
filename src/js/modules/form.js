export default function form(){
  const forms = document.querySelectorAll('.form')
  const classes = {
    inputError: 'form__input--error',
    inputFocus: 'form__input--focus',
    inputErrorMessage: 'form__input-error',
    inputHasValue: 'form__input--has-value'
  }

  const clearError = (wrapper) => {
    if (!wrapper) return false

    if (wrapper.classList.contains(classes.inputError)) {
      wrapper.classList.remove(classes.inputError)
    }

    const errorMessage = wrapper.querySelector(`.${classes.inputErrorMessage}`)
    if (errorMessage) errorMessage.remove()
  }

  if (forms) {
    forms.forEach(form => {
      const fields = form.querySelectorAll('.form__field')

      if (fields) {
        fields.forEach(field => {
          const inputWrapper = field.querySelector('.form__input')
          const control = field.querySelector('.form__control')

          if (inputWrapper && control) {
            control.addEventListener('input', () => {
              clearError(inputWrapper)
            })
          }
        })
      }
    })
  }
}