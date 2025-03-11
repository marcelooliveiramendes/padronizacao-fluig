function createDataset(fields, constraints, sortFields) {
    log.info("########## Start Dataset Send Mail #############");
    var dataset = DatasetBuilder.newDataset();
    
    var usuarioFluig = 'dev' // Altere o usuário 

    var params;

    if(constraints){
        for(var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName.toUpperCase() == "PARAMS") {                
                params = JSON.parse(constraints[i].initialValue);
            }
        }
    }

    if(params == undefined){
        dataset.addColumn("ERRO");
        dataset.addRow(['Informe os parâmetros necessários!']);

        return dataset;
    }

    var fieldKeys = getFields(params.fields);  // Pega as chaves dentro de 'fields' e separa para o padrão do script
    
    if(fieldKeys.length == 0){
        dataset.addColumn("ERRO");
        dataset.addRow(['Informe os campos do template!']);

        return dataset;
    }

    var parametros = new java.util.HashMap();
    parametros.put('subject', params.subject);
    

    for (var i = 0; i < fieldKeys.length; i++) {
        parametros.put(fieldKeys[i].key, fieldKeys[i].value);
    }

    var destinatarios = new java.util.ArrayList();
    for(var i = 0; i < params.emails.length; i++){
        destinatarios.add(params.emails[i]);
    }


    try{
        notifier.notify(usuarioFluig, params.template, parametros, destinatarios, "text/html")

        dataset.addColumn("STATUS")
        dataset.addColumn("INFO")

        var info = JSON.stringify({
            STATUS: "OK",
            INFO: "Email enviado com sucesso!",
            EMAIL: params.emails
        })
        
        dataset.addRow(['OK', info]);
        return dataset;

    }catch(err){
        dataset.addColumn("ERRO");
        dataset.addRow([err.message]);

        return dataset;
    }
}


function getFields(fields){
    var fieldKeys = Object.keys(fields);  
    var fieldsArray = [];
    for (var i = 0; i < fieldKeys.length; i++) {
        var key = fieldKeys[i];  
        var value = fields[key];

        fieldsArray.push({
            key: key,
            value: value
        })
    }
    return fieldsArray;
}