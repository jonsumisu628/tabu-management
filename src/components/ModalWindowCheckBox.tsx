import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    labelname: String;
}


const CheckboxLabels: React.FC<Props> = props => {

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                }
                label={props.labelname}
            />
        </FormGroup>
    );
}

export default CheckboxLabels;
