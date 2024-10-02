export const maskTimestamp = (timestamp:String) => {
  return timestamp.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\..+)/g, '$3/$2/$1 $4:$5:$6');
}