
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var initial = 0;
var x = 0;
var key;
var length = arr1.length;

for(var i=0; i<length; i++)
{
    for(var j=i; j<length; j++)
    {
        if(arr1[i]===arr1[j]){
            x++;
        }
        if(x>initial)
        {
            initial=x;
            key = arr1[i];
        }
    }
    x = 0;
}

out = key + " ( " + initial + " times )";
console.log(out);