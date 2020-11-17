import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle, CSSProperties } from 'react';
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
export const PoPopover: React.FC<PoPopoverProps> = ({title, arrowDirection, isHidden, children}: PoPopoverProps) => {

    const contentRef: any = { ref: null }
    // const [contentRef, setContentRef] = useState(null);
    const [refReady, setRefReady] = useState(true);

    const handleMouseOver = () => contentRef.ref?.setIsHidden(false);
    const handleMouseLeave = () => contentRef.ref?.setIsHidden(true);

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <PoPopoverContent ref={(ref:any) => contentRef.ref = ref}/>
            {children}
        </div>
    )
}

PoPopover.defaultProps = defaultProps;

const PoPopoverContent = forwardRef((props, ref) => {

    const [isHidden, setIsHidden] = useState(true)
    const hideArrow = false;
    const arrowDirection= 'left-top'
    const title = 'popover title'
    const content = 'content'
    const style:CSSProperties = {
        left: '115px'
    }

    useImperativeHandle(ref, () => ({ setIsHidden }));

    return (
        <div hidden={isHidden} className="po-popover" style={style}>
            {!hideArrow && <div className={`po-popover-arrow po-arrow-${ arrowDirection }`}></div> }
            <div className="po-popover-content">
                { title && <span className="po-popover-title">{ title }</span> }
                { content }
            </div>
        </div>
    )
});

