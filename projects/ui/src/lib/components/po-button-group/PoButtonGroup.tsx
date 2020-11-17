import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PoButton from '../po-button';
import { PoTooltip } from '../po-tooltip/PoTooltip';
import { PoButtonGroupItem as PoButtonGroupItemInterface } from './PoButtonGroupItem';
import { PoButtonGroupProps } from './PoButtonGroupProps';
import { PoButtonGroupToggle } from './PoButtonGroupToggle';


/**
 * O componente `po-button-group` é formado por um conjunto de botões distribuídos horizontalmente.
 * Cada botão do grupo é tratado de forma individual, recebendo assim um rótulo, uma ação bem como se deverá estar habilitado ou não.
 *
 * Este componente além de servir como um agrupador de botões para ação, também permite que sejam utilizados
 * para seleções multiplas e únicas.
 *
 * O grupo de botões deve ser utilizado para organizar as ações de maneira uniforme e transmitir a ideia de que os botões fazem
 * parte de um mesmo contexto.
 *
 * #### Boas práticas
 *
 * - Evite usar o `po-button-group` com apenas 1 ação, para isso utilize o `po-button`.
 * - Procure utilizar no máximo 3 ações para cada `po-button-group`.
 *
 * > As recomendações do `po-button` também valem para o `po-button-group`.
 */
export const PoButtonGroup = ({ pButtons, pSmall, pToggle } : PoButtonGroupProps) => {

  const buttonsRef: any = {}

  const handleExclusive = (selectedKey: string) => {
    Object.keys(buttonsRef).forEach(key => buttonsRef[key].setisSelected(key === selectedKey) );
  }

  return (
    <div className="po-button-group-container">
      { pButtons && pButtons.map( (buttonArgs, key) => {
        const childKey = key.toString();
        const buttonProps = { ...buttonArgs, pSmall, childKey, pToggle, handleExclusive };
        return (
          <PoButtonGroupItem {...buttonProps} key={key}
          ref={ (ref:any) => buttonsRef[`${key}`] = ref } >
          </PoButtonGroupItem>
        );
      }) }
    </div>
  )
}

const PoButtonGroupItem = forwardRef(({
  label,
  selected,
  disabled,
  icon,
  pSmall,
  className,
  childKey,
  pToggle,
  action,
  handleExclusive,
  tooltip
 }: PoButtonGroupItemInterface, ref) => {

  const ButtonRef = React.createRef();
  const getButtonRef = () => ButtonRef;

  const [isSelected, setisSelected] = useState(Boolean(selected))
  const classes = defineClasses({ selected: isSelected, disabled, className });

  useImperativeHandle(ref, () => ({ setisSelected }));

  const toggleSelect = () => {

    action && action();

    if (pToggle === PoButtonGroupToggle.Single) {
      return handleExclusive(childKey);
    }
    if (pToggle === PoButtonGroupToggle.Multiple) {
      return setisSelected(!isSelected);
    }
  }

  //TODO: Implementar no Button o Tooltip
  // p-tooltip-position="bottom"
  // !button.disabled ? button.tooltip : undefined

  //TODO: (p-click)="button.action(button); onButtonClick(button, i)"
  return (
    <div className={classes}>
      <PoButton
      pLabel={label}
      pDisabled={disabled}
      pIcon={icon}
      pSmall={pSmall}
      pClick={toggleSelect}
      >
        { tooltip && <PoTooltip parentRef={getButtonRef}>{tooltip}</PoTooltip> }
      </PoButton>
      {  }
    </div>
  );
});

const defineClasses = ({
  selected,
  disabled,
  className
}: PoButtonGroupItemInterface) => {
  return [
    'po-sm-12 po-button-group',
    selected && 'po-button-group-button-selected',
    disabled && 'po-button-group-disabled',
    className
  ].filter(Boolean).join(' ');
}


/*
<po-button
    *ngFor="let button of buttons; index as i"
    class="po-sm-12 po-button-group"
    [class.po-button-group-button-selected]="button.selected"
    [class.po-button-group-disabled]="button.disabled"
    p-tooltip-position="bottom"
    [p-disabled]="button.disabled"
    [p-icon]="button.icon"
    [p-label]="button.label"
    [p-small]="small"
    [p-tooltip]="!button.disabled ? button.tooltip : undefined"
    (p-click)="button.action(button); onButtonClick(button, i)"
>
</po-button>
*/