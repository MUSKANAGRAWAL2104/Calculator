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
            let c=0;
            if (s[0]==='+') {
                num="";
            }
            else if (s[0]==='-') {
                num+=s[0];
                if (s[1] === '+' || s[1] === '-' || s[1] === 'X' || s[1] === '/' || s[1] === '%' || s[1]==='.') {
                    screen.value="Invalid Input";
                    screenvalue="";
                    flag=1;
                }

            }
            else if (s[0] === 'X' || s[0] === '/' || s[0] === '%' || s[0] === '.' ) {
                screen.value="Invalid Input";
                screenvalue="";
                flag=1;
            }

            for (let i = 1; i < len; i++) {
                if (s[i] === '+' || s[i] === '-' || s[i] === 'X' || s[i] === '/' || s[i] === '%') {
                    if (s[i + 1] === '+' || s[i + 1] === '-' || s[i + 1] === 'X' || s[i + 1] === '/' || s[i + 1] === '%' || s[i+1]==='.') {
                        screen.value = "Invalid Input";
                        screenvalue = "";
                        flag = 1;
                        break;
                    } else {
                        number.push(Number(num));
                        operator.push(s[i]);
                        num = "";
                        c=0;

                    }

                } else {
                    if (s[i]==='.') {
                        c+=1;
                        if (c>1) {
                            flag=1;
                            screen.value="Invalid Input";
                            screeenvalue= "";
                        }
                    }
                    num += s[i];
                }
            }
            if (s[len - 1] === '+' || s[len - 1] === '-' || s[len - 1] === 'X' || s[len - 1] === '/' || s[len - 1] === '%' || s[len-1]==='.') {
                flag=1;
                screen.value="Invalid Input";
                screenvalue="";
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
                if (operator[i]==='X') {
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
            screenvalue=" ";
            screen.value = number[0];
            
            }
            



        } else {
            screenvalue += buttonText
            screen.value = screenvalue
        }

    });
}

