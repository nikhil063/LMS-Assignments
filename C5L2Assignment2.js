let n=2;
while(n<=500)
{
let flag = 1;
for (let i = 2; i < n; i++) 
{
        if (n % i == 0) 
        {
            flag = 0;
            break;
        }
}
    if (flag == 1) 
    {
        console.log(n);
    }
n++
}