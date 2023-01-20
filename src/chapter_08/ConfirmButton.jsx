import React, { useState } from 'react';

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <div>
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButton; 