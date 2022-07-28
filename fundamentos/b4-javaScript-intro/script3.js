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
//maxPrimo(number);
// Bonus 1
function astQuadrado(n){
    let c = '';
    for(let i = 0; i<n ; i+=1){
        c+='*';
    }
    for(let i = 0; i<n ; i+=1){
        console.log(c);
    }
}

//astQuadrado(5);

//Bonus 2
function triAst1(n){
    let c = '*';
    for(let i = 0; i< n; i+=1){
        console.log(c);
        c+='*'; 
    }

}

//triAst1(8);
//Bonus 3

function triAst2(n){
    let c = '';
    let l='';
    for(let j = 0; j< n;j+=1){
        for(let i = j+1; i<n; i+=1){
            c+=' ';
        }
          l+='*';
          console.log(c+l);
          c = '';
    }


}
//triAst2(4)
// Bonus 4

//Resolve N de uma PA para calcular as camadas da piramide
function numLoops(n){
    let nloop = 0;
    if((n - 1) % 2 === 0){
        nloop = ((n - 1)/2) + 1;
            return nloop;
       } else if((n - 2) % 2 === 0 && (n - 2) >= 2){
           nloop = ((n - 2)/2) + 1;
           return nloop;
       } else{
           return 'fail';
       }
}


function triAst3(n){
    let nloop = numLoops(n);
    
    // resolvendo uma PA para saber quantos loops terá
    //console.log("Numero de loops :: " + nloop);

    let c = '';
    let l='';
    let c2 = '*';
    for(let j = 0; j< nloop;j+=1){
        for(let i = j+1; i<nloop; i+=1){
            c+=' ';
        }
          l+='*';
          //console.log(c+l);
          if(j!==0){ 
          console.log(c+l+c2);
            c2+='*'; 
          }else{
            console.log(c+l);
          }
          c = '';
    }


    
}

//triAst3(11)
/*
*

x*
** * 3 - 1 

xx*
x** *
*** ** 5 - 2 

xxx*
xx** *
x*** **
**** *** 7 - 3  

xxxx*
xxx** *
xx*** **
x**** ***
***** **** 9 - 4 


*/
//Bonus 5


function triAst4(n){
    let nloop = numLoops(n);
    let c = '';
    let v = '';
    let x = '*';

    for(let i=0; i<nloop-1;i+=1){
        c = '';
        for(let j=i+1;j<nloop;j+=1){
            c+=' ';
        }
        if(i === 0){
            console.log(c+'*');
        }else{
            
            console.log(c+'*'+v+x);
            v+=' ';
            

        }
        v+=' ';
        
    }
    c = '';
    for(let i = 0; i<n;i+=1){
        c+='*';
    }
    console.log(c);

}
//triAst4(7)



//Bonus 6 
function isPrimo(n){
    if(primo(n) === 1){
        console.log("É primo ::: " + n);
    } else if(primo(n) === -1){
        console.log("NAO é primo ::: " + n)
    }
    else{
        console.log("Falha ... número não foi reconhecido");
        return 'erro';
    }
}
let num1 = 19;
//isPrimo(num1);


/*

 
xxxx*
xxx*x *
xx*xx x*
x*xxx xx*

***** ****


*/
