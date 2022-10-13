    
    const myInput = document.querySelector("input");
    const myList = document.querySelector("ul");
    const myButton = document.querySelector("button");

    myButton.addEventListener("click", () => {
        if (myInput.value==""){
            return;
        }

        else{
        const newItem = document.createElement("li");

        const newButton = document.createElement("button");

        newItem.textContent = myInput.value;

        newButton.textContent = "❌";

        newItem.appendChild(newButton);

        myList.appendChild(newItem);

        newButton.addEventListener("click", () => {
            myList.removeChild(newItem);
        });
        myInput.focus();
        myInput.value="";
    }
    });