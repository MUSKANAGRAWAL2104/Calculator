let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
// console.log(buttons);
screenvalue = ''
for (item of buttons) {
    // console.log(item.innerHTML);


    item.addEventListener('click', (item) => {
        buttonText = item.target.innerText;
        if (buttonText == 'C') {
            screenvalue = '';
            screen.value = screenvalue
        }
        else if(buttonText=='Del') {
            if (screenvalue=='') {
                screenvalue='';
            } else {
                l=screenvalue.length
                screenvalue=screenvalue.slice(0,l-1);
                screen.value=screenvalue;
            }

        }
        else if (buttonText == '=') {
            l = screenvalue.length
            num1 = ''
            for (i = 0; i < l; i++) {
                if (screenvalue[i] == '+' || screenvalue[i] == '-' || screenvalue[i] == '*' || screenvalue[i] == '/' || screenvalue[i] == '%') {
                    operator=screenvalue[i];
                    num2=Number(screenvalue.slice(i,l));
                    break;
                } else {
                    num1+=screenvalue[i];
                }
            }
            num1=Number(num1);
            // console.log(num1)
            // console.log(operator)
            // console.log(num2)
            switch(operator) {
                case '+':
                    screen.value=num1+num2;
                    break;
                case '-':
                    screen.value=num1-num2;
                    break;
                case '*':
                    screen.value=num1*num2;
                    break;
                case '/':
                    screen.value=num1/num2;
                    break;
                case '%':
                    screen.value=num1%num2;
                    break;
                default:
                    screen.value='Invalid choice';
            }

        } else {
            screenvalue += buttonText
            screen.value = screenvalue
        }

    });
}

