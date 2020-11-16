import { PoButtonGroupItem } from "./PoButtonGroupItem";
import { PoButtonGroupToggle } from "./PoButtonGroupToggle";

export interface PoButtonGroupProps extends React.ComponentProps<'div'> {

  /** Lista de botões. */
  pButtons?: Array<PoButtonGroupItem>

  /**
   * Torna o grupo de botões com tamanho minificado.
   */
  pSmall?: boolean

  /**
   * Define o modo de seleção de botões.
   *
   * > Veja os valores válidos no *enum* `PoMultiselectFilterMode`.
   */
  pToggle?: PoButtonGroupToggle

  /**
   * Ação que será executada quando o usuário clicar sobre o `po-button`.
   */
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export const defaultProps: PoButtonGroupProps = {
  pButtons: [],
}
