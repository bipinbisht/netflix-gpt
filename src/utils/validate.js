export const checkLoginForm = (email, password) => {
  const isEmailValid = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/.test(
    email
  )
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    )

  if (!isEmailValid) {
    return 'email syntax  is not valid'
  }
  if (!isPasswordValid) {
    return 'password syntax is not valid'
  }
  return null
}
