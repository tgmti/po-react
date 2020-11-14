import React from 'react';

export interface Props {
    /**
     * Disable button
     */
    disabled?: boolean
    children?: any
    type?: any
    small?: any
    onClick?: any
    label?: string
}

export const PoButton: React.FC<Props> = ({ label, onClick, disabled, type, small }: Props) => {

    const classes = [
        'po-button',
        'po-text-ellipsis',
        type === 'danger' && 'po-button-danger',
        type === 'link' && 'po-button-link',
        type === 'primary' && 'po-button-primary',
        type === 'link' && 'po-clickable',
        small && 'po-button-sm'


      ].filter(Boolean).join(' ')

    return (
        <button
        className={ classes }
        type="button"
        disabled={ disabled }
        onClick={onClick}
      >
        { label && <span className="po-button-label">{ label }</span> }
        {/* <div *ngIf="loading" class="po-button-loading-icon">
          <po-loading-icon p-neutral-color></po-loading-icon>
        </div>
        <span *ngIf="icon" class="po-icon {{ icon }}" aria-hidden="true"></span>
        <span *ngIf="label" class="po-button-label">{{ label }}</span> */}
      </button>
    )
}