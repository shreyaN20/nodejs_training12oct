function isprime(num)
for (let i = lowerno; i<= upperno ;i++){
  let flag=0;
  for (let i=2;i<num;i++){
    if(num % i == 0 ){
      return false;
  }
  return true;
}
