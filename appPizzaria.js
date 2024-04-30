document.addEventListener("DOMContentLoaded", function () {

    function montarPizza() {

        let custo_extra = 0;
        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // Sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : 'Sabor não selecionado';
        console.log(sabor)

        // Obtendo tamanho selecionado 
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'Tamanho não selecionado';

        // Borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Borda não selecionada';

        // Ingredientes Extras
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if (queijoExtraCheckbox) {
            custo_extra += 2.00;
            extra += "<br>   - Queijo";
        }
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked');
        if (baconExtraCheckbox) {
            custo_extra += 3.00;
            extra += "<br>   - Bacon";
        }
        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked');
        if (pepperoniExtraCheckbox) {
            custo_extra += 4.00;
            extra += "<br>   - Pepperoni";
        }
        descricao += extra;

        // Opcionais
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked');
        if (oreganoOpcionalCheckbox) {
            opcionais += "<br>   - Oregano";
        }
        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked');
        if (azeitonaOpcionalCheckbox) {
            opcionais += "<br>   - Azeitona";
        }
        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked');
        if (azeiteOpcionalCheckbox) {
            opcionais += "<br>   - Azeite";
        }
        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked');
        if (pimentaOpcionalCheckbox) {
            opcionais += "<br>   - Pimenta";
        }

        // Concatenando descrição
        descricao += opcionais;

        // Montando a descrição completa
        descricao = "<br>    - " + sabor + "<br>    - " + tamanho + "<br>    - " + borda + extra + opcionais;

        if ((sabor === 'margherita' || sabor === 'calabresa' || sabor === 'frango') && tamanho === 'brotinho') {
            custo = 18.00;
        } else if ((sabor === 'margherita' || sabor === 'calabresa' || sabor === 'frango') && tamanho === 'padrao') {
            custo = 25.00;
        } else if ((sabor === 'margherita' || sabor === 'calabresa' || sabor === 'frango') && tamanho === 'grande') {
            custo = 31.00;
        } else if (sabor === 'portuguesa' && tamanho === 'brotinho') {
            custo = 24.00;
        } else if (sabor === 'portuguesa' && tamanho === 'padrao') {
            custo = 32.00;
        } else if (sabor === 'portuguesa' && tamanho === 'grande') {
            custo = 40.00;
        } else if (sabor === 'queijos' && tamanho === 'brotinho') {
            custo = 26.00;
        } else if (sabor === 'queijos' && tamanho === 'padrao') {
            custo = 35.00;
        } else if (sabor === 'queijos' && tamanho === 'grande') {
            custo = 43.75;
        }

        custo_total = custo_extra + custo
        // Atualizando o custo total
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "Total do Pedido: R$ " + custo_total.toFixed(2);

        // Atualizando a descrição do pedido
        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = descricao;
    }

    // Chama a função montarPizza ao clicar no botão
    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});
