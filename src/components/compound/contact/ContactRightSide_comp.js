import React, { useState, useEffect } from 'react'
import FormInput from 'components/simple/form-input/FormInput_comp';
import Button from 'components/simple/button/Button_comp';
import TextArea from 'components/simple/text-area/TextArea_comp';

function ContactRightSide() {

    const initVal = { email: "", name: "", msg: "" };
    const [state, setState] = useState(initVal);

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setState({ ...state, [name]: value });
    };

    return (
        <div className={"sign-in"}>
            <h2 className={"title"}>Send us a message</h2>
            <span className={"sub-title"}>We will write you back as soon as possible!</span>
            <form onSubmit={(e) => (e)}>
                <FormInput
                    type="text"
                    name="name"
                    value={state.name}
                    label={"Name"}
                    onChangeCallback={(e) => onChangeHandle(e)}
                />
                <FormInput
                    type="email"
                    name="email"
                    required
                    value={state.email}
                    label={"E-mail"}
                    onChangeCallback={(e) => onChangeHandle(e)}
                />
                <TextArea
                    onChangeCallback={(e) => onChangeHandle(e)}
                    value={state.msg}
                    name="msg"
                    label={"Message"}>
                </TextArea>
                <div className="d-flex flex-column">
                    <Button type="submit">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactRightSide
