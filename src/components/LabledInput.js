import React from 'react';

function LabledInput({ label }) {
    return (
        <div> 
            {label}: <input type="text" />
        </div>
    );
}

export default LabledInput;
