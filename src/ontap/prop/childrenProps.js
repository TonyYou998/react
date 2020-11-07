import React from 'react'

export default function childrenProps(props) {
    console.log(props);
    return (
        <div>
            <h3>childrenProp</h3>
            {props.children}

        </div>
    )
}
