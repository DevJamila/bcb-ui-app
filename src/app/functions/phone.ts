export const maskPhone = (phone:String) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
}