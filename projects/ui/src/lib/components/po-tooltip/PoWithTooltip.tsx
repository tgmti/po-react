import React from "react";

import PoTooltip from ".";

export const PoWithTooltip = (BaseComponent: any) => (props: any) => {
    const { tooltip, ...newProps } = props;

    return (
    <PoTooltip title={tooltip}>
      <BaseComponent {...newProps}></BaseComponent>
    </PoTooltip>
    );
};