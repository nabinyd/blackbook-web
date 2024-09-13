import '../css/showToast.css';


const showToast = (message, duration, type) => {
    const toast = document.createElement('div');
    toast.className = `toast`;
    toast.textContent = message;
    document.body.appendChild(toast);
    // if type is error then then make the toast red else blue
    if (type === 'error') {
        toast.classList.add('error');
    } else {
        toast.classList.add('success');
    }
    setTimeout(() => {
        toast.remove();
    }, duration);
};

export default showToast;   