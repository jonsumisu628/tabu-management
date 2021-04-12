import React from "react";

import SideMenuItem from "../components/SideMenuItem";

interface Props {
    menuTitles: { id: string; text: string }[];
}

const SideMenuList: React.FC<Props> = props => {
    return (
        <SideMenuItem menuItem={props.menuTitles} />
    )
}

export default SideMenuList;
