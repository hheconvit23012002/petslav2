import React from "react"
import "./toast.css"
function Toast(props) {
        const {title,message,type,duration } = props;
        const main = document.getElementById('toast');
        if (main) {
            const toast = document.createElement('div');
            const autoRemove = setTimeout(() => {
                main.removeChild(toast);
            }, duration + 1000);
            toast.onclick = function (e) {
                if (e.target.closest('.toast__btn')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemove)
                }
            }
            const delay = (duration / 1000).toFixed(2)
            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInleft ease 0.3s, slideOut linear 1s ${delay}s forwards`;
            const icons = {
                success: 'bi bi-check-circle-fill',
                error: 'bi bi-exclamation-circle-fill'
            }
            const icon = icons[type];
            toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="bi bi-check-circle-fill"></i>
                        </div>
                        <div class="toast__body">
                            <div classe="${icon}"> ${title} </div>
                            <div class="toast__body-text"> ${message} </div>
                        </div>
                        <div class="toast__btn">
                            <i class="bi bi-x"></i>
                        </div>
                `;
            main.appendChild(toast);
        }
    return (
        <div>
            <div id="toast"> </div>
        </div>
    )
}

export default Toast