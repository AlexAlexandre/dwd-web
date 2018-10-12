/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.espacos')
        .controller('EditarEspacosCtrl', EditarEspacosCtrl);

    /** @ngInject */
    function EditarEspacosCtrl($scope, $http, $stateParams, CONFIG) {

        $http.get(CONFIG.dwdApi + '/listar-tabela-preco').then(function (response) {
            $scope.tabelaPreco = response.data;
        });

        $http.get(CONFIG.dwdApi + '/espacos/' + $stateParams.id).then(function (response) {
            $scope.espaco = {
                id_espacos: response.data.id_espacos,
                tx_razao_social: response.data.tx_razao_social,
                nr_cnpj_cliente: response.data.nr_cnpj_cliente,
                nr_inscricao_estadual: response.data.nr_inscricao_estadual,
                nr_inscricao_municipal: response.data.nr_inscricao_municipal,
                tx_nome_fantasia: response.data.tx_nome_fantasia,
                tx_nome_contato: response.data.tx_nome_contato,
                tx_email_comercial: response.data.tx_email_comercial,
                nr_telefone: response.data.nr_telefone,

                status_espaco: response.data.status_espaco,
                tx_nome_condominio: response.data.tx_nome_condominio,
                qtd_vagas_condominio: response.data.qtd_vagas_condominio,
                tx_regras_condominio: response.data.tx_regras_condominio,
                tx_contato_condominio: response.data.tx_contato_condominio,
                hr_inicio_funcionamento: response.data.hr_inicio_funcionamento,
                hr_fim_funcionamento: response.data.hr_fim_funcionamento,
                tx_nome_administradora: response.data.tx_nome_administradora,
                tx_contato_administradora: response.data.tx_contato_administradora,
                nr_unidade: response.data.nr_unidade,
                tx_endereco: response.data.tx_endereco,

                tx_nome_completo: response.data.tx_nome_completo,
                nr_tel_resp: response.data.nr_tel_resp,
                nr_cpf: response.data.nr_cpf,
                tx_cargo: response.data.tx_cargo,
                tx_email_comercial_resp: response.data.tx_email_comercial_resp,
                tx_desc_ativ_resp: response.data.tx_desc_ativ_resp,
                sala: {
                    id_salas: null,
                    tx_nome_salas: null,
                    nr_metragem_salas: null,
                    nr_altura_pe_direito_salas: null
                },

            };

            $scope.tabelaPrecoEspaco = response.data.espacos_tabela;

        });

        $scope.editarEspaco = function (espaco, tabelaPreco) {
            $http.put(CONFIG.dwdApi + '/espacos/' + espaco.id_espacos, {
                espaco: espaco,
                tabelaPreco: tabelaPreco ? tabelaPreco : null
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Espaço editado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        };

        $scope.deletarEspacoTB = function (tb) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete(CONFIG.dwdApi + '/espacos/tabela-preco/' + tb + '/' + $scope.espaco.id_espacos)
                            .then(function (response) {
                                console.log(response);
                                if (response.data = 1) {
                                    swal("Parabéns!", "Tabela de preço deletada com sucesso!", "success")
                                        .then(function () {
                                            location.reload();
                                        });

                                }
                            });
                    } else {
                        // console.log('não faz nada');
                    }
                });
        };

        /**
         * Buscar as Salas já cadastradas em um espaço.
         */
        $http.get(CONFIG.dwdApi + '/espacos/salas/' + $stateParams.id).then(function (response) {
            $scope.espacoSalaTable = response.data;
        });

        $scope.deletarSala = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete(CONFIG.dwdApi + '/salas/' + id + '/' + $scope.espaco.id_espacos)
                            .then(function (response) {
                                if (response.data = 1) {
                                    swal("Parabéns!", "Sala deletada com sucesso!", "success")
                                        .then(function () {
                                            location.reload();
                                        });

                                }
                            });
                    } else {
                        // console.log('não faz nada');
                    }
                });
        };

        /**
         * Lista uma sala especifica. É usado para mostrar o conteudo de uma sala ao editar.
         */
        $http.get(CONFIG.dwdApi + '/salas/' + $stateParams.id).then(function (response) {
            $scope.sala = {
                id_salas: response.data.id_salas,
                tx_nome_salas: response.data.tx_nome_salas,
                nr_metragem_salas: response.data.nr_metragem_salas,
                nr_altura_pe_direito_salas: response.data.nr_altura_pe_direito_salas
            };

        });

        $scope.editarSala = function (sala) {
            $scope.espaco.sala.id_salas = sala.id_salas;
            $scope.espaco.sala.tx_nome_salas = sala.tx_nome_salas;
            $scope.espaco.sala.nr_metragem_salas = sala.nr_metragem_salas;
            $scope.espaco.sala.nr_altura_pe_direito_salas = sala.nr_altura_pe_direito_salas;
        };
    }

})();
