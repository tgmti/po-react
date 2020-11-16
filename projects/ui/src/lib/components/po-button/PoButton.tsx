import React, { useEffect } from 'react';
import { PoLoadingIcon } from '../po-loading/po-loading-icon/PoLoadingIcon';
import { defaultProps, PoButtonProps } from './PoButtonProps';

/**
 * O po-button permite que o usuário execute ações predefinidas pelo desenvolvedor.
 *
 * Através dos tipos, é possível identificar a importância de cada ação, sendo ela primária <code>(primary)</code> ou até mesmo uma ação irreversível <code>(danger)</code>, como a exclusão de um registro.
 *
 * **Boas práticas**
 *
 * - Evite <code>labels</code> extensos que quebram o layout do po-button, use labels diretos, curtos e intuitivos.
 * - Utilize apenas um <code>po-button</code> configurado como <code>primary</code> por página.
 * - Para ações irreversíveis use sempre o tipo <code>danger</code>.
 *
 */
export const PoButton: React.FC<PoButtonProps> = (props: PoButtonProps) => {

  const classes = defineClasses(props);

  let thisPoButton: HTMLButtonElement | null;

  const pFocus = () => {
    thisPoButton?.focus();
  }

  useEffect(()=>{
    props.pAutoFocus && pFocus();
  })

  return (
      <button
      className={ classes }
      type="button"
      disabled={ props.disabled || props.pDisabled || props.pLoading }
      onClick={ props.pClick || props.onClick }
      ref={(button) => { thisPoButton = button; }}
    >
      { props.pLoading && <PoLoadingIcon neutralColor/> }
      { props.pIcon && <span className={`po-icon ${ props.pIcon }`} aria-hidden="true"></span> }
      { props.pLabel && <span className="po-button-label">{ props.pLabel }</span> }
      { props.children }
    </button>
  )
}

PoButton.defaultProps = defaultProps;

function defineClasses(props: PoButtonProps) {
  return [
    'po-button',
    'po-text-ellipsis',
    props.pType === 'danger' && 'po-button-danger',
    props.pType === 'link' && 'po-button-link',
    props.pType === 'primary' && 'po-button-primary',
    props.pType === 'link' && 'po-clickable',
    props.pSmall && 'po-button-sm',
    props.className
  ].filter(Boolean).join(' ');
}