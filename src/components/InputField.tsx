import React from 'react';

const InputField: React.FC = () => {
    return (
        <form className="input">
            <input 
                type="input"
                placeholder="Enter a task"
                className="input__box"
            />

            <button
                type="submit"
                className="input_submit"
            >
                Go
            </button>
        </form>
    )
}

export default InputField