// import {DetailedHTMLProps, SelectHTMLAttributes} from "react";
//
// type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
//
// type SuperSelectPropsType = DefaultSelectPropsType & {
//     options?: any[]
//     onChangeOption?: (option: any) => void
// }

import styles from './FormsControls.module.css'
import {WrappedFieldProps} from "redux-form";
import React from "react";

const FormControl: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>"{meta.error}"</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

// export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span>"{meta.error}"</span>}
//         </div>
//     )
// }

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
// export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>"{meta.error}"</span>}
//         </div>
//     )
// }