import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>07/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1000,00</td>
                        <td>Moradia</td>
                        <td>01/11/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit"> R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>07/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}