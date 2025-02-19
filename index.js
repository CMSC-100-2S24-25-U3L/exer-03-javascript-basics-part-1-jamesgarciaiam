function valid_passwords(pass1, pass2){ //check validity of passwords
    if(pass1 == pass2){ //check if passwords match
        if(pass1.length >= 8){ //check if pass contains at least 8 chars
            var num_count = 0; 
            var up_count = 0;
            var low_count = 0; //counters to count how many of each is in the string

            for(let char of pass1){
                if(char >= '0' && char <= '9') num_count++; //increment when a number is given
                if(char >= 'a' && char <= 'z') low_count++; //increment when lowercase is given
                if(char >= 'A' && char <= 'Z') up_count++; //increment when uppercase is given
            }
            if(num_count > 0 && low_count > 0 && up_count > 0){
                return true; //if all counters are more than 0, return true
            } else {
                return false; //otherwise, return false
            }
        } else {
            return false; //otherwise, return false
        }
    } else {
        return false; //otherwise, return false
    }
}

function reversed_passwords(pass){ //reverse the password
    let rev_pass = ""; //create an empty string

    for(let i = pass.length - 1; i >= 0; i--){ //loop from end
        rev_pass += pass[i]; //add characters to empty string
    }
    return rev_pass; //return reversed value
}

function store_password(name, pass1, pass2){ //store name and pass
    let pass_valid = valid_passwords(pass1, pass2); //check if passwords are valid
    if(pass_valid === true){ //if true, newpass will be reversed version of pass1
        return {
            name: name,
            newpass: reversed_passwords(pass1)
        }
    } else if(pass_valid === false){ //otherwise, newpass will be pass1
        return {
            name: name,
            newpass: pass1
        }
    }
}

//test cases
console.log(valid_passwords("helloworld", "hello")) //false
console.log(valid_passwords("hello", "hello")) //false
console.log(valid_passwords("hello1234", "hello1234")) //false
console.log(valid_passwords("Hello1234", "Hello1234")) //true
console.log(valid_passwords("HELLO1234", "HELLO1234")) //false
console.log(reversed_passwords("JamesExer3")) //3rexEsemaJ
console.log(reversed_passwords("HelloWorld")) //dlroWolleH
console.log(reversed_passwords("ShaunTheSheep")) //peehSehTnuahS
console.log(store_password("John", "Pass1234", "Pass1234"))
console.log(store_password("John", "Pass123", "Pass12345"))