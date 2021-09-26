import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FromsControls/FormsControls";

type FromDataType = {
    newMessageBody: string
}


const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newMessageBody"
                   placeholder="Enter your message"
                   validate={[required, maxLength50]}
            />
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}

export default reduxForm<FromDataType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)
