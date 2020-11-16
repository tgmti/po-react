export interface PoButtonProps extends React.ComponentProps<'button'> {

    /**
     * Aplica foco no elemento ao ser iniciado.
     *
     * > Caso mais de um elemento seja configurado com essa propriedade,
     * o último elemento declarado com ela terá o foco.
     */
    pAutoFocus?: boolean

    /**
     * Label do botão.
     */
    pLabel?: string

    /**
     * Exibe um ícone de carregamento à esquerda do label do botão.
     *
     * > Quando esta propriedade estiver habilitada, desabilitará o botão.
     */
    pLoading?: boolean

    /**
     * Ícone exibido ao lado esquerdo do label do botão.
     *
     * É possível usar qualquer uma dos ícones da [Biblioteca de ícones](/guides/icons).
     */
    pIcon?: string //TODO: PoIcon?

    /**
     * Deixa o botão menor.
     */
    pSmall?: boolean

    /**
     * Define o estilo do `po-button`.
     *
     * Valore válidos:
     *
     *  - `default`: estilo padrão do `po-button`.
     *  - `primary`: deixa o `po-button` com destaque, deve ser usado para ações primárias.
     *  - `danger`: deve ser usado para ações que o usuário precisa ter cuidado ao executa-lá.
     *  - `link`: o `po-button` recebe o estilo de um link.
     */
    pType?: "default" | "danger" | "link" | "primary"

    /**
     * Desabilita o `po-button` e não permite que o usuário interaja com o mesmo.
     */
    pDisabled?: boolean

    /**
     * Ação que será executada quando o usuário clicar sobre o `po-button`.
     */
    pClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export const defaultProps: PoButtonProps = {
    // pAutoFocus: false,
    // pLoading: false,
    // pSmall: false,
    // pType: "default",
    // pDisabled: false,
}