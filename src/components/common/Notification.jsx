import { useEffect } from "react";

const Notification = ({ message, type = "info", onClose, duration = 3000 }) => {

    const getAlertClass = () => {
        switch (type) {
            case "success":
                return "alert alert-success";
            case "error":
                return "alert alert-danger";
            case "warning":
                return "alert alert-warning";
            case "info":
                return "alert alert-info";
            default:
                return "alert alert-primary";
        }
    };

    useEffect(() => {
        if (!onClose) return;

        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);

    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div
            className={`${getAlertClass()} d-flex justify-content-between align-items-center`}
            role="alert"
        >
            <span>{message}</span>

            {onClose && (
                <button
                    type="button"
                    className="btn-close"
                    onClick={onClose}
                ></button>
            )}
        </div>
    );
};

export default Notification;
