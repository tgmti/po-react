import React, { CSSProperties, forwardRef, useEffect } from 'react';
import { PoTooltipProps } from './PoTooltipProps';

/**
 * A diretiva po-tooltip deve ser utilizada para oferecer informações adicionais quando os usuários
 * passam o mouse sobre o elemento alvo ao qual ela está atribuída.
 *
 * O conteúdo é formado por um pequeno texto que deve contribuir para uma tomada de decisão ou
 * orientação do usuário. A ativação dele pode estar em qualquer componente ou tag HTML.
 *
 * Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
 * conteúdo deve-se utilizar o [**po-popover**](https://po-ui.io/documentation/po-popover?view=doc).
 */
export const PoTooltip = forwardRef(({ children }: PoTooltipProps, ref) => {

    // po-invisible

    const style: CSSProperties = {
        top: '42px',
        left: '32.25px'
    }


    useEffect(() => {
        console.log(ref);
      });

    console.log('PoTooltip', ref )

    return (
        <div className="po-tooltip po-invisible" style={style}>
            <div className="po-tooltip-arrow po-arrow-top"></div>
            <div className="po-tooltip-content">
                { children }
            </div>
        </div>
    );
});