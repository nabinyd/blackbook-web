import './showToast.css';


const showToast = (message, duration) => {
    const toast = document.createElement('div');
    toast.className = `toast`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, duration);
};

export default showToast;   