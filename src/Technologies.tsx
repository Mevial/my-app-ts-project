import React from "react";
type TechnologiesPropsType = {
    paragraphValue: string
}
const Technologies = (props: TechnologiesPropsType) => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )

}
export default Technologies;