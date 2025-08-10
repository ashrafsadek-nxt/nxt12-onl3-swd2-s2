const showButton = document.getElementById('btt');
const boxes = [
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3'),
    document.getElementById('box4')
];
showButton.addEventListener('click', () => {
    boxes.forEach(box => {
        if (box.style.display === "none" || box.style.display === "") {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});
