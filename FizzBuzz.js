var counter=1; counter<=100;

while (counter)
{
  if (counter%15==0)
{
  console.log("FIZZBUZZ");
}
else if (counter%3==0)
{
  console.log("FIZZ");
}
else if (counter%5==0)
{
  console.log("BUZZ"); 
}
else
{
  console.log(counter)
}
}