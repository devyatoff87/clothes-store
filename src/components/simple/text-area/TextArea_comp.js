import React from 'react'

function TextArea({ onChangeCallback = () => { }, label = "", ...props }) {
    return (
        <div className={"input-group"}>
            <textarea
                className={"form-input"}
                onChange={(e) => onChangeCallback(e)}
                {...props}
            ></textarea>
            {label ? (
                <label
                    className={`${props.value.length ? "shrink" : ""} form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default TextArea
