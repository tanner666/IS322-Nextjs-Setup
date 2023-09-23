import React from 'react';

//if you don't include default text, you must pass in some
const Text = ({label = 'default text'}) => {
    return(
        <p>
            {label}
        </p>
    )
}
//if you use export const ..., you have to use {} and call it by name in other files
export default Text;