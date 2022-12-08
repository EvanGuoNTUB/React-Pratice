import PropTypes from 'prop-types';
import { Button } from "./button";
import './card.scss';
import { UploadFile } from "./upload-file";
  
export function Card(props:any){
    return (
        <div className="card">
            <h2>{props.label}</h2>
            <UploadFile /> <br />
            <Button label="上傳" onClick={() => { alert('ok');}} />
        </div>
    )
}
Card.propTypes = {
    label: PropTypes.string,
};
