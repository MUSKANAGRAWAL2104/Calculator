let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenvalue = '';
for (let item of buttons) {



    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenvalue = '';
            screen.value = screenvalue;
        }
        else if (buttonText == 'Del') {
            if (screenvalue == '') {
                screenvalue = '';
            } else {
                l = screenvalue.length
                screenvalue = screenvalue.slice(0, l - 1);
                screen.value = screenvalue;
            }

        }
        else if (buttonText == '=') {
            
            let s = screenvalue;
            let number = [];
            let operator = [];
            let num = s[0];
            let flag = 0;
            let len = s.length;

            for (let i = 1; i < len - 1; i++) {
                if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/' || s[i] === '%') {
                    if (s[i + 1] === '+' || s[i + 1] === '-' || s[i + 1] === '*' || s[i + 1] === '/' || s[i + 1] === '%') {
                        screen.value = "Invalid Input";
                        screenvalue = "";
                        flag = 1;
                        break;
                    } else {
                        number.push(Number(num));
                        operator.push(s[i]);
                        num = "";

                    }

                } else {
                    num += s[i];
                }
            }
            if (s[len - 1] === '+' || s[len - 1] === '-' || s[len - 1] === '*' || s[len - 1] === '/' || s[len - 1] === '%') {
                flag=1;
                screen.value="Invalid Input";
                screenvalue="";
            } else {
                num+=s[len-1];

            }
            if (flag === 0) {
                number.push(Number(num));


                
                let i=0;
            while(i<operator.length) {
                if (operator[i]==='/') {
                    number[i]=number[i]/number[i+1];
                    number.splice(i+1,1);
                    operator.splice(i,1);
                   

                } else {
                    i+=1;
                   
                }
            }










            i=0;
            while(i<operator.length) {
                if (operator[i]==='*') {
                    number[i]=number[i]*number[i+1];
                    number.splice(i+1,1);
                    operator.splice(i,1);
                   


                } else {
                    i+=1;
                    

                }
            }
            i=0;
            while(i<operator.length) {
                if (operator[i]==='+') {
                    number[i]=number[i]+number[i+1];
                    number.splice(i+1,1);
                    operator.splice(i,1);
                    


                } else {
                    i+=1;
                    
                }
            }
            i=0;
            while(i<operator.length) {
                if (operator[i]==='-') {
                    number[i]=number[i]-number[i+1];
                    number.splice(i+1,1);
                    operator.splice(i,1);
                    

                } else {
                    i+=1;
                    
                }
            }
                screen.value = number[0];
            }



        } else {
            screenvalue += buttonText
            screen.value = screenvalue
        }

    });
}

