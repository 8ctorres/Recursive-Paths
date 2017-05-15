//This JavaScript program calculates the number of routes to give change for a dollar using pennies, nickles, dimes and quarters//
//Defining the function

function permutations(actual,objetivo){
        if (actual==objetivo){
            return 1;
          }
        else if (actual>objetivo){
            return 0;
            }
        else{
            return permutations((actual+1), objetivo) + permutations((actual+5), objetivo) + permutations((actual+10), objetivo) + permutations((actual+25), objetivo);
          }
        }

// Code to run the function

        console.log("Running...");
        for(let i=1; i<=100;i++){
            console.log("Goal for this cycle: " + i);
  //          console.log("Starting at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond);
            console.log("");
            console.log(permutations(0, i));
            console.log("");
            console.log("Done");
  //          console.log("Completed at: " & DateAndTime.Now & "." & DateAndTime.Now.Millisecond);
            console.log("");
            console.log("-------");
            console.log("");
        }
