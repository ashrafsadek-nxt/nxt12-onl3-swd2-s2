let darkMode = false;

document.querySelector('.btn').addEventListener('click', function () {
    if (!darkMode) {
        // تفعيل الدارك مود
        document.querySelector('body').style.backgroundColor = 'rgba(15, 15, 49, 1)';
        document.querySelector('.btn').style.backgroundColor = 'rgba(20, 20, 92, 1)';
        document.querySelector('.list').style.backgroundColor = 'rgba(24, 24, 99, 1)';
        darkMode = true;
    } else {
        // تفعيل اللايت مود
        document.querySelector('body').style.backgroundColor = 'rgba(224, 226, 227, 1)';
        document.querySelector('.btn').style.backgroundColor = 'rgb(154, 154, 221)';
        document.querySelector('.list').style.backgroundColor = 'rgba(240, 240, 240, 1)';
        darkMode = false;
    }
});

