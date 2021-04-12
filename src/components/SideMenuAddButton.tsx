import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const AddButton: React.FC<Props> = props => {
    return (
        <div>
            <ListItem button onClick={props.onClick}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add" />
            </ListItem>
        </div>
    );
}

export default AddButton;
