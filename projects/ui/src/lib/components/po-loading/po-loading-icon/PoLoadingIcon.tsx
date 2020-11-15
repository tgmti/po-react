import React from 'react';

export interface Props {
    neutralColor: boolean
};

export const PoLoadingIcon = ({ neutralColor }: Props) => {

    const classes = [
        'po-loading-icon',
        neutralColor && 'class.po-loading-icon-neutral-color'
      ].filter(Boolean).join(' ')

    return (
        <div className={classes}>
            <span className="po-loading-icon-bar po-loading-icon-bar-1"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-2"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-3"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-4"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-5"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-6"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-7"></span>
            <span className="po-loading-icon-bar po-loading-icon-bar-8"></span>
        </div>
    )
}
