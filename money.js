//Defining the function

Function permutations(actual,objetivo){
        If (actual == objetivo){
            Return 1
        ElseIf (actual > objetivo){
            Return 0
            }
        Else
            Return permutations(actual + 1, objetivo) + permutations(actual + 5, objetivo) + permutations(actual + 10, objetivo) + permutations(actual + 25, objetivo)
        }
    }

// Code to run the function

        Console.log("Running...")
        For (let i=1; i<=100;i++){
            Console.log("Goal for this cycle: " & i)
            Console.log("Starting at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond)
            Console.log("")
            Console.log(permutations(0, i))
            Console.log("")
            Console.log("Done")
            Console.log("Completed at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond)
            Console.log("")
            Console.log("---------------------------------------")
            Console.log("")
        }
        Console.Readline()
