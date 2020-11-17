import React, { useState, forwardRef, useImperativeHandle, CSSProperties } from 'react';
import { defaultProps, PoPopoverProps } from './PoPopoverProps';

/**
 * O componente `po-popover` é um container pequeno recomendado para incluir vários tipos de conteúdo como:
 * gráficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.
 *
 * Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
 * [**po-tooltip**](https://po-ui.io/documentation/po-tooltip?view=doc).
 *
 * Para conteúdos maiores recomenda-se o uso do [**po-modal**](https://po-ui.io/documentation/po-modal?view=doc).
 *
 * Ele contém um título e também é possível escolher as posições do popover em relação ao componente pai,
 * as posições permitidas são: `right`, `right-top`, `right-bottom`, `top`, `top-left`, `top-right`,
 * `left`, `left-top`, `left-bottom`, `bottom`, `bottom-left` e `bottom-right`.
 *
 * Também é possível escolher entre os dois eventos que podem abrir o *popover*.
 * Os eventos permitidos são: `click` e `hover`.
 *
 */
export const PoPopover: React.FC<PoPopoverProps> = (props: PoPopoverProps) => {

    const { children, trigger } = props;

    const contentRef: any = { ref: null }

    const handleMouseOver = trigger === 'hover' ? ( () => contentRef.ref?.showPopover(true) ) : undefined;
    const handleMouseLeave = trigger === 'hover' ? ( () => contentRef.ref?.showPopover(false) ) : undefined;
    const handleClick = trigger === 'click' ? ( () => contentRef.ref?.togglePopover() ) : undefined;

    const events: any = {}

    if (trigger === 'click'){
        events.onClick = handleClick;
    }

    if (trigger === 'hover') {
        events.onMouseOver = handleMouseOver;
        events.onMouseLeave = handleMouseLeave;
    }

    return (
        <div {...events} >
            <PoPopoverContent {...props} ref={(ref:any) => contentRef.ref = ref}/>
            {children}
        </div>
    )
}

PoPopover.defaultProps = defaultProps;

const PoPopoverContent = forwardRef(({
    title,
    content,
    arrowDirection,
    isHidden,
    hideArrow,
    className
}: PoPopoverProps, ref) => {

    const [show, showPopover] = useState(!Boolean(isHidden))
    const togglePopover = () => showPopover(!show);

    //TODO: buscar informação do componente pai
    const style:CSSProperties = {
        left: '115px'
    }

    useImperativeHandle(ref, () => ({ showPopover, togglePopover }));

    return (
        <div hidden={!show} className={className} style={style}>
            {!hideArrow && <div className={`${className}-arrow po-arrow-${ arrowDirection }`}></div> }
            <div className={`${className}-content`}>
                { title && <span className={`${className}-title`}>{ title }</span> }
                { content && content }
            </div>
        </div>
    )
});

