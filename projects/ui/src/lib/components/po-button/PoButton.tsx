import React from 'react';
import { PoLoadingIcon } from '../po-loading/po-loading-icon/PoLoadingIcon';

export interface Props {
    /**
     * Disable button
     */
    disabled?: boolean
    loading?: boolean
    children?: any
    type?: any
    small?: any
    onClick?: any
    label?: string
    icon?: string //TODO: PoIcon?
}

export const PoButton: React.FC<Props> = (props: Props) => {

    const classes = [
        'po-button',
        'po-text-ellipsis',
        props.type === 'danger' && 'po-button-danger',
        props.type === 'link' && 'po-button-link',
        props.type === 'primary' && 'po-button-primary',
        props.type === 'link' && 'po-clickable',
        props.small && 'po-button-sm'


      ].filter(Boolean).join(' ')

    return (
        <button
        className={ classes }
        type="button"
        disabled={ props.disabled }
        onClick={ props.onClick }
      >
        { props.loading && <PoLoadingIcon neutralColor/> }
        { props.icon && <span className={`po-icon${ props.icon }`} aria-hidden="true"></span> }
        { props.label && <span className="po-button-label">{ props.label }</span> }
        { props.children }
      </button>
    )
}