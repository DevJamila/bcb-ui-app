export const maskCNPJ = (cnpj:String) => {

  let maskedCnpj = "";

  if (cnpj) {
    maskedCnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
  }

  return maskedCnpj;
}