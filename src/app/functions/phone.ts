export const maskPhone = (phone:String) => {

  if (phone) {
    return phone.replace(/(\d{2})(\d{5}(\d*))/g, '($1) $2-$3');
  } else {
    return phone;
  }
}