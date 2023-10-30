var submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function (event) {
    var inputFields = document.querySelectorAll(".input");
    var checkboxLabels = document.querySelectorAll(".checkbox-wrapper label");

    inputFields.forEach(function (input) {
        if (!input.hasAttribute("data-original-placeholder")) {
            input.setAttribute("data-original-placeholder", input.getAttribute("placeholder"));
        }

        if (input.value.trim() === "") {
            input.classList.add("input--error");
            input.setAttribute("placeholder", "Необходимо заполнить");
        } else {
            input.classList.remove("input--error");
            input.setAttribute("placeholder", input.getAttribute("data-original-placeholder"));
        }
    });

    var hasUncheckedCheckbox = false;
    checkboxLabels.forEach(function (label) {
        var checkbox = label.querySelector("input[type=checkbox]");
        if (!checkbox.checked) {
            label.classList.add("checkbox-error");
            hasUncheckedCheckbox = true;
        } else {
            label.classList.remove("checkbox-error");
        }
    });

    if (document.querySelector(".input--error") || hasUncheckedCheckbox) {
        event.preventDefault();
    }
});


const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
  let inputText = e.target.value.replace(/\D/g, ''); // Удалить все символы, кроме цифр

  if (inputText.startsWith('8')) {
    inputText = '+7' + inputText.substring(1);
  }

  if (inputText.length > 11) {
    inputText = inputText.substring(0, 11); // Ограничить длину ввода
  }

  if (inputText.length > 1) {
    inputText = inputText.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');
  }

  e.target.value = inputText;
});