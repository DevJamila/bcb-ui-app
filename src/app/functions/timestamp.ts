export const maskTimestamp = (timestamp:Date) => {

  if (timestamp) {
    return new Intl.DateTimeFormat('pt-BR', {
      timeStyle: "medium",
      dateStyle: "short"
    }).format(timestamp);
  } else {
    return ""
  }
  
}