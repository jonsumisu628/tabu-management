import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
    menuItem: { id: string; text: string }[];
}

const SideMenuItem: React.FC<Props> = props => {
    return (
        <div>
            {
                props.menuItem.map(title => (
                    <ListItem button>
                        <li key={title.id}><ListItemText primary={title.text} /></li>
                    </ListItem>
                ))
            }

        </div>
    )
}

export default SideMenuItem;
