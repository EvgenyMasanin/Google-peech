const getUserNameFromEmail = (email: string): string => {
  return email.split('.')[0].split('@')[0]
}
export default getUserNameFromEmail
