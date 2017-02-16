//Your code below
function permutations(actual,objetivo){
If (math.round(actual,2)==objetivo){
  return 1
  elseif (math.round(actual,2)>objetivo)
  return 0
  else {
    return permutations(math.round(actual,2)+0.01,objetivo) + permutations(math.round(actual,2)+0.05,objetivo)+permutations(math.round(actual,2)+0.10,objetivo)+permutations(math.round(actual,2)+0.25,objetivo)

  }
}
}

//Test code
console.log(permutations(0,0.1))
