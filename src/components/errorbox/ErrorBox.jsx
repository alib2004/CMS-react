/* eslint-disable react/prop-types */
import './ErrorBox.css'
const ErrorBox = ({msg}) => {
    return (
        <div  className='cms-empty-error'>
            <h1>{msg}</h1>
        </div>
    );
};

export default ErrorBox;