const checkSpam = (str) => {
   return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
}


console.log (checkSpam('buy ViAgRA now')) == true
console.log (checkSpam('free xxxxx')) == true
console.log (checkSpam("innocent rabbit")) == false