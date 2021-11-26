
module.exports = {

    MOVIVENTACAO: " SELECT id, tipo, empresa_id, conta_banco_id, cliente_id, descricao, data_competencia, data_vencimento, data_pagamento, f_numero_format(credito,2) as credito, f_numero_format(debito,2) as debito, conciliado, pago, cancelado, createdAt, updatedAt, f_numero_format(saldo, 2) as saldo FROM( SELECT id, tipo, empresa_id, conta_banco_id, cliente_id, descricao, data_competencia, data_vencimento, data_pagamento, credito, debito, conciliado, pago, cancelado, createdAt, updatedAt, @debito_credito := tipo AS tipo_mov, @saldo := IF(@debito_credito = 1, @saldo + credito, @saldo - debito) AS saldo FROM beepo_movimentacao, (SELECT @debito_credito := 0, @saldo := 0) as vars ORDER BY data_vencimento) AS movimentação union all SELECT 0, 0, 0, 0, 0, 'Saldo Final', '5021-08-01', '5021-08-01', '5021-08-01', 0, 0, 0, 0, 0, 0, 0, f_numero_format(@saldo, 2); "
    ,UPDATE_BALANCE: " update moviments t1 inner join( SELECT id, @saldo := IF(paid = 1, IF(type = 1, @saldo + credit, @saldo - debt), @saldo) AS saldo_view FROM moviments, (SELECT @debito_credito := 0, @saldo := 0) as vars where company_id = [company_id] order by due_date) as t2 on t1.id = t2.id set t1.balance = t2.saldo_view where company_id = [company_id]    "

}