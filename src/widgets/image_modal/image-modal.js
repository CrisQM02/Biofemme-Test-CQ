import React from 'react';
import './image_modal.css';

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imgSrc} alt="Expanded" />
                <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ImageModal;
