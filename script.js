const loadMoreButtons = document.querySelectorAll('.load-more');

loadMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const boxContainer = button.previousElementSibling; 
        const hiddenBoxes = boxContainer.querySelectorAll('.box[style*="display: none"], .box:not([style])'); // las ocultas

        let count = 0;
        hiddenBoxes.forEach((box) => {
            if (count < 4) { 
                box.style.display = 'block';
                count++;
            }
        });

        if (boxContainer.querySelectorAll('.box[style*="display: none"], .box:not([style])').length === 0) {
            button.style.display = 'none';
        }
    });
});

document.querySelectorAll('.box-container').forEach((container) => {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        if (index < 4) box.style.display = 'block';
        else box.style.display = 'none';
    });
});

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_succes')
    window.location.href = 'login.html'
})
