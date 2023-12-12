

const calcform = document.querySelector("#calcForm");
const num1Input = document.querySelector("#Number1");
const num2Input = document.querySelector("#Number2");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const mulBtn = document.querySelector("#mulBtn");
const divBtn = document.querySelector("#divBtn");
const answerList = document.querySelector("#answerList");

function buttonHandler(operation) {
    return () => {


        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        let sum;
        switch (operation) {

            case "+":

                sum = num1 + num2;
                break;

            case "-":

                sum = num1 - num2;
                break;
            case "*":

                sum = num1 * num2;
                break;

            case "/":

                sum = num1 / num2;
                break;
            default:

        }

        const answerString = `${num1} ${operation} ${num2} = ${sum}`;
        const listElement = document.createElement("li");
        listElement.innerHTML = answerString

        answerList.appendChild(listElement);

        num1Input.value = "";
        num2Input.value = "";

    }
}

addBtn.addEventListener("click", buttonHandler("+"))
subBtn.addEventListener("click", buttonHandler("-"))
mulBtn.addEventListener("click", buttonHandler("*"))
divBtn.addEventListener("click", buttonHandler("/"))


