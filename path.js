//Your code below
// p is percentage of traps in the array
// n is the leght of the array
let path = []
function buildPath(p,n){
path = []
for (let i =0; i<n;i++){
  let r = math.floor(math.random()*10)
  if (r<=p){
     path[i]=false
    else {
     path[i]=true
    }
  }
}
path[n]=true
return path
}
function stroll(path,index){
  if (index==path.length-1){
    return 1
    elseif (path[index]=false)
    return 0
  }
}

//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true]],0));
console.log(stroll([true,true,true]],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));