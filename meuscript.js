$(function () {

    //Quando o documento estiver carregado
    function exibir_pessoas() {
        $.ajax({
            url: 'http://localhost:5000/listar_pessoas',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(pessoas) {
            //Percorre a lista retornada
            for (var i in pessoas) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + pessoas[i].nome + '</td>' +
                    '<td>' + pessoas[i].sobrenome + '</td>' +
                    '<td>' + pessoas[i].cidade + '</td>' +
                    '</tr>';

                $('#corpoTabelaPessoas').append(lin);
            }
        }
    }

    function exibir_itens() {
        $.ajax({
            url: 'http://localhost:5000/listar_itens',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(itens) {
            //Percorre a lista retornada
            for (var i in item) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + item[i].nome + '</td>' +
                    '<td>' + item[i].funcao + '</td>' +
                    '</tr>';

                $('#corpoTabelaItens').append(lin);
            }
        }
    }

    function exibir_tipos() {
        $.ajax({
            url: 'http://localhost:5000/listar_tipos',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(tipos) {
            //Percorre a lista retornada
            for (var i in tipo) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + tipo[i].nome + '</td>' +
                    '<td>' + tipo[i].vantagem + '</td>' +
                    '<td>' + tipo[i].desvantagem + '</td>' +
                    '</tr>';

                $('#corpoTabelaTipos').append(lin);
            }
        }
    }

    function exibir_naturezas() {
        $.ajax({
            url: 'http://localhost:5000/listar_naturezas',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(tipos) {
            //Percorre a lista retornada
            for (var i in natureza) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + natureza[i].nome + '</td>' +
                    '<td>' + natureza[i].descricao + '</td>' +
                    '</tr>';

                $('#corpoTabelaNaturezas').append(lin);
            }
        }
    }

    function exibir_habilidades() {
        $.ajax({
            url: 'http://localhost:5000/listar_habilidades',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(habilidades) {
            //Percorre a lista retornada
            for (var i in habilidade) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + habilidade[i].nome + '</td>' +
                    '<td>' + habilidade[i].descricao + '</td>' +
                    '</tr>';

                $('#corpoTabelaHabilidades').append(lin);
            }
        }
    }

    function exibir_pokemons() {
        $.ajax({
            url: 'http://localhost:5000/listar_pokemons',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(pokemons) {
            //Percorre a lista retornada
            for (var i in pokemon) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + pokemon[i].nome + '</td>' +
                    '<td>' + pokemon[i].tipo.nome + '</td>' +
                    '<td>' + pokemon[i].categoria + '</td>' +
                    '<td>' + pokemon[i].natureza.nome + '</td>' +
                    '<td>' + pokemon[i].habilidade.nome+ '</td>' +
                    '<td>' + pokemon[i].item.nome + '</td>' +
                    '</tr>';

                $('#corpoTabelaPokemons').append(lin);
            }
        }
    }

    function exibir_times() {
        $.ajax({
            url: 'http://localhost:5000/listar_times',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(times) {
            //Percorre a lista retornada
            for (var i in time) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + time[i].pokemon.poke1.nome + '</td>' +
                    '<td>' + time[i].pokemon.poke2.nome + '</td>' +
                    '<td>' + time[i].pokemon.poke3.nome + '</td>' +
                    '<td>' + time[i].pokemon.poke4.nome + '</td>' +
                    '<td>' + time[i].pokemon.poke5.nome + '</td>' +
                    '<td>' + time[i].pokemon.poke6.nome + '</td>' +
                    '</tr>';

                $('#corpoTabelaTimes').append(lin);
            }
        }
    }
    function exibir_treinadores() {
        $.ajax({
            url: 'http://localhost:5000/listar_treinadores',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(treinadores) {
            //Percorre a lista retornada
            for (var i in treinador) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + treinador[i].pessoa.nome + '</td>' +
                    '<td>' + treinador[i].time.id + '</td>' +
                    '</tr>';

                $('#corpoTabelaTreinadores').append(lin);
            }
        }
    }
    function exibir_ginasios() {
        $.ajax({
            url: 'http://localhost:5000/listar_ginasios',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(ginasios) {
            //Percorre a lista retornada
            for (var i in ginasio) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + ginasio[i].nome + '</td>' +
                    '<td>' + ginasio[i].cidade + '</td>' +
                    '<td>' + ginasio[i].tipo.nome + '</td>' +
                    '</tr>';

                $('#corpoTabelaGinasios').append(lin);
            }
        }
    }
    function exibir_lideres() {
        $.ajax({
            url: 'http://localhost:5000/listar_lideres',
            method: 'GET',
            dataType: 'json', //Recebe os dados no formato json
            success: listar, //Chama a função listar
            erro: function () {
                alert("Erro ao ler dados, verifique o Backend!")
            }
        });

        function listar(lideres) {
            //Percorre a lista retornada
            for (var i in lider) {
                //Cria linhas com os dados
                lin = '<tr>' +
                    '<td>' + lider[i].treinador.pesso + '</td>' +
                    '<td>' + lider[i].ginasio .nome+ '</td>' +
                    '<td>' + lider[i].insignia + '</td>' +
                    '</tr>';

                $('#corpoTabelaLideres').append(lin);
            }
        }
    }


   
    // código para mapear o click do link Listar
    $(document).on("click", "#linkListarPessoas", function () {
        exibir_pessoas();
    });

    // código para mapear click do link Inicio
    $(document).on("click", "#linkInicio", function () {
        mostrar_conteudo("conteudoInicial");
    });
    /////////////////////////////////////////////////////////////////////////////////////////

    // código para mapear click do botão incluir 
    $(document).on("click", "#btIncluirPessoa", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        sobrenome = $("#campoSobrenome").val();
        cidade = $("#campoCidade").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, sobrenome: sobrenome, cidade: cidade });
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_pessoa',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: pessoaIncluida, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function pessoaIncluida(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Pessoa incluída com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoSobrenome").val("");
                $("#campoCidade").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirPessoa').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroPessoas").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_pessoas();
        }
    });

    $(document).on("click", "#btIncluirItem", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        funcao = $("#campoFuncao").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, funcao: funcao});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_item',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: itemIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function itemIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Item incluído com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoFuncao").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirItem').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroItem").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_itens();
        }
    });


    $(document).on("click", "#btIncluirTipo", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        vantagem = $("#campoVantagem").val();
        desvantagem = $("#campoDesvantagem").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, vantagem: vantagem, desvantagem: desvantagem});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_tipo',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: tipoIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function tipoIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Tipo incluído com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoVantagem").val("");
                $("#campoDesvantagem").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirTipo').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroTipos").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_tipos();
        }
    });

    $(document).on("click", "#btIncluirNatureza", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        descricao = $("#campoDescricao").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, descricao: descricao});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_natureza',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: naturezaIncluida, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function naturezaIncluida(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Natureza incluída com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoDescricao").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirNatureza').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroNaturezas").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_naturezas();
        }
    });

    $(document).on("click", "#btIncluirHabilidade", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        descricao = $("#campoDescricao").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, descricao: descricao});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_habilidade',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: habilidadeIncluida, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function habilidadeIncluida(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Habilidade incluída com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoDescricao").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirHabilidade').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroHabilidades").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_habilidades();
        }
    });

    $(document).on("click", "#btIncluirPokemon", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        tipo = $("#campoTipo").val();
        categoria = $("#campoCategoria").val();
        natureza = $("#campoNatureza").val();
        habilidade = $("#campoHabilidade").val();
        item = $("#campoItem").val();
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, tipo: tipo, categoria: categoria, natureza: natureza, habilidade: habilidade, item: item});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_pokemon',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: pokemonIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function pokemonIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Pokemon incluído com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoTipo").val("");
                $("#campoCategoria").val("");
                $("#campoNatureza").val("");
                $("#campoHabilidade").val("");
                $("#campoItem").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirPokemon').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroPokemons").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_pokemons();
        }
    });

    $(document).on("click", "#btIncluirTime", function () {
        //pegar dados da tela
        poke1 = $("#campoPoke1").val();
        poke2 = $("#campoPoke2").val();
        poke3 = $("#campoPoke3").val();
        poke4 = $("#campoPoke4").val();
        poke5 = $("#campoPoke5").val();
        poke6 = $("#campoPoke6").val();

        // preparar dados no formato json
        var dados = JSON.stringify({ poke1: poke1, poke2: poke2, poke3: poke3, poke4: poke4, poke5: poke5, poke6: poke6});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_time',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: timeIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function timeIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Time incluído com sucesso!");
                // limpar os campos
                $("#campoPoke1").val("");
                $("#campoPoke2").val("");
                $("#campoPoke3").val("");
                $("#campoPoke4").val("");
                $("#campoPoke5").val("");
                $("#campoPoke6").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirTime').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroTimes").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_times();
        }
    });

    $(document).on("click", "#btIncluirTreinador", function () {
        //pegar dados da tela
        pessoa = $("#campoPessoa").val();
        time = $("#campoTime").val();

        // preparar dados no formato json
        var dados = JSON.stringify({ pessoa: pessoa, time: time});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_treinador',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: treinadorIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function treinadorIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Treinador incluído com sucesso!");
                // limpar os campos
                $("#campoPessoa").val("");
                $("#campoTime").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirTreinador').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroTreinadores").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_treinadores();
        }
    });

    $(document).on("click", "#btIncluirGinasio", function () {
        //pegar dados da tela
        nome = $("#campoNome").val();
        cidade = $("#campoCidade").val();
        tipo = $("#campoTipo").val();

        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, cidade: cidade, tipo: tipo});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_ginasio',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: ginasioIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function ginasioIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Ginásio incluído com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoCidade").val("");
                $("#campoTipo").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirGinasio').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroGinasios").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_ginasios();
        }
    });

    $(document).on("click", "#btIncluirLider", function () {
        //pegar dados da tela
        treinador = $("#campoTreinador").val();
        ginasio = $("#campoGinasio").val();
        insignia = $("#campoInsignia").val();

        // preparar dados no formato json
        var dados = JSON.stringify({ treinador: treinador,ginasio: ginasio, insignia: insignia});
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_lider',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: liderIncluido, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function liderIncluido(retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Líder incluído com sucesso!");
                // limpar os campos
                $("#campoTreinador").val("");
                $("#campoGinasio").val("");
                $("#campoInsignia").val("");
            } else {
                // informar mensagem de erro
                alert(retorno.resultado + ":" + retorno.detalhes);
            }
        }
        function erroAoIncluir(retorno) {
            // informar mensagem de erro
            alert("erro ao incluir dados, verifique o backend: ");
        }
    });

    // código a ser executado quando a janela de inclusão for fechada
    $('#modalIncluirLider').on('hide.bs.modal', function (e) {
        // se a página de listagem não estiver invisível
        if (!$("#cadastroLiders").hasClass('d-none')) {
            // atualizar a página de listagem
            exibir_lideres();
        }
    });


    /////////////////////////////////////////////////////////////////////////////////////////
    // a função abaixo é executada quando a página abre
    mostrar_conteudo("conteudoInicial");


});

