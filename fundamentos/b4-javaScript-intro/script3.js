//1
function fatorial(n){
    if(n === 0){
        return 1;
    }
    let f=1;
    for(let i =n; i > 1; i-=1){
        f*=i;
    }
    return f;
}

//console.log(fatorial(10));
//2
function invert(s){
    let inv ='';
    for(let i =s.length-1;i>=0; i-=1){
        inv = inv+s[i];
    }
    return inv;
}

let word = 'banana';//tryber';
//console.log(invert(word));
//3
let array = ['java', 'javascript', 'python', 'html', 'css'];
function mCaracter(arr,flag = true){
    let cont = -1;
    let ind = -1;
    for(let i = 0; i < arr.length; i+=1){
        if(flag){
            if(i === 0){
                cont = arr[i].length;
                ind = i;
            }else{
                if(arr[i].length > cont){
                    cont = arr[i].length;
                    ind = i;
                }
            }

        } else{
            if(i === 0){
                cont = arr[i].length;
                ind = i;

            }else{
                if(arr[i].length < cont){
                    cont = arr[i].length;
                    ind = i;
                }
                
            }

        }
    }
    return arr[ind];
}
//console.log(mCaracter(array)); // maior string
//console.log(mCaracter(array,false)); // menor string

//4

function primo(n){
    for(i = 2; i<n;i+=1){
        if(n % i === 0){
            return -1;
        }
    }
    return 1;
}
function maxPrimo(n){
    let maxp = 0;
    for(let i = 2; i<n; i+=1){
        if(primo(i) === 1){
            maxp = 1;
            console.log(i);
        }
    }
}

let number = 14;
maxPrimo(number);