import PropTypes from 'prop-types';

export function Button(props:any){
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};
