import React, { useState } from "react";
import "./expandable_label.css";
import { mdiMenuRight, mdiMenuUp } from "@mdi/js";
import Icon from "@mdi/react";

const ExpandableLabel = ({ label, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="expandable-label">
            <div className="widget-header" onClick={toggleExpand}>
                <Icon
                    path={isExpanded ? mdiMenuUp : mdiMenuRight}
                    size={1}
                    className="arrow-icon"
                />
                <p>{label}</p>
            </div>
            <div className={`widget-content ${isExpanded ? "expanded" : ""}`}>
                {content}
            </div>
            <hr className="custom-separator" style={{ margin: "10px 1px", borderTopColor: "var(--gray-light)" }} />
        </div>
    );
};

export default ExpandableLabel;
