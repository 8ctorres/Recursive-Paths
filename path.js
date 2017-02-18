//Your code below
// p is percentage of traps in the array
// n is the leght of the array

function buildPath(p,n){
//  console.log("Entering buildPath...")
let path = []
for (let i =0; i<n;i++){
  let r = Math.random();
//  console.log(r)
  if (r<=p){
     path[i]=false
//     console.log("posicion asignada false")
  }
    else{
      path[i]=true
//      console.log("posicion asignada true")
    }
   }

path[n]=true
//console.log("Leaving buildPath...")
console.log(path)
return path
}

function stroll(path,index){
//  console.log("Entering stroll...")
  if (index==(path.length-1)){
//    console.log("index=path.length-1...return 1");
    return 1
  }
    else if (path[index]==false){
//   console.log("path[index]=false...return 0");
    return 0
  }
    else{
//     console.log("else...return stroll(path, index+1)");
//     console.log("KEY..." + path[index])
    return stroll(path, index+1)
  }
}

function rsj (path, index){
//  console.log("Entering rsj...")
 if (index==(path.length-1)){
//  console.log("index==path.lenght-1...return 1")
    return 1
  }
    else if (path[index]==false){
//      console.log("path[index]==false...return 0")
      return 0
    }
    else if (index>(path.length-1)){
//    console.log("index>path.length-1...return 0")
      return 0
    }
    else{
//      console.log("else...return rsj recursive +1,+5,+10")
//      console.log("KEY..." + path[index])
      return rsj(path, index+1) + rsj(path, index+5) + rsj(path, index+10)
    }
  }


//Test code
//let testpath1 = buildPath(0.10,15);
//let testpath2 = buildPath(0.50,15);
//console.log(testpath1)
//console.log(testpath2);
console.log("---------------------");
console.log("Stroll [T,F,T]")
console.log(stroll([true,false,true],0));
console.log("---------------------");
console.log("Stroll [T,T,T]")
console.log(stroll([true,true,true],0));
console.log("---------------------")
console.log("RSJ With Lenght 15 & 10% falses")
console.log(rsj(buildPath(0.10,15),0));
console.log("---------------------");
console.log("RSJ With Lenght 15 & 50% falses")
console.log(rsj(buildPath(0.50,15),0));
console.log("---------------------")
