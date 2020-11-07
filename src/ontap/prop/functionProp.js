import React from 'react'

export default function FunctionProp(props) {
    // console.log(props);
    return (
        <div>

            <h3>functionProps</h3>
            <p>
                username:{props.username}-lop:{props.lop}
            </p>
        </div>
    );
}
