const input = document.querySelector("input");
    input.onclick = () => {
        document.body.style.backgroundColor = input.value;
    };