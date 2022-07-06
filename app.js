// Initialization
const circleGroup = Array.from(document.getElementById('rating-btns').children);
const btnGroup = document.querySelectorAll("input");

circleGroup.forEach((btn, index) => {
    btnGroup[index].addEventListener('input', (e) => {

        // Buttons
        if (e.target.checked) {
            btn.classList.add('circle-active');
            if (btn.previousElementSibling !== null) {
                btn.previousElementSibling.classList.remove('circle-active');
                if (btn.previousElementSibling.previousElementSibling !== null) {
                    btn.previousElementSibling.previousElementSibling.classList.remove('circle-active');
                    if (btn.previousElementSibling.previousElementSibling.previousElementSibling !== null) {
                        btn.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('circle-active');
                        if (btn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling !== null) {
                            btn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('circle-active');
                        }
                    }
                }
            } if (btn.nextElementSibling !== null) {
                btn.nextElementSibling.classList.remove('circle-active');
                if (btn.nextElementSibling.nextElementSibling !== null) {
                    btn.nextElementSibling.nextElementSibling.classList.remove('circle-active');
                    if (btn.nextElementSibling.nextElementSibling.nextElementSibling !== null) {
                        btn.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('circle-active');
                        if (btn.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling !== null) {
                            btn.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('circle-active');
                        }
                    }
                }
            }

            // Switch to Thanks container
            if (e.target.checked) {
                document.getElementById('submit').addEventListener('click', () => {
                    document.getElementById('card-container').style.display = 'none';
                    document.getElementById('thanks-container').style.display = 'flex';
                    document.getElementById('selected-rating').textContent = `You selected ${parseInt(btn.textContent)} out of 5`;
                });
            }
        }
    });
});