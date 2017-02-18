//Defining the function

function permutations(actual,objetivo){
        if (actual == objetivo){
            Return 1
          }
        else if (actual > objetivo){
            Return 0
            }
        else{
            Return permutations((actual+1), objetivo) + permutations((actual+5), objetivo) + permutations((actual+10), objetivo) + permutations((actual+25), objetivo)
          }
        }

// Code to run the function

        console.log("Running...")
  //      For (let i=1; i<=100;i++){
            console.log("Goal for this cycle: 50")
//            Console.log("Starting at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond)
            console.log("")
           console.log(permutations(0, 50))
            console.log("")
            console.log("Done")
  //          Console.log("Completed at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond)
            console.log("")
            console.log("-------")
            console.log("")
//        }
