<h1>
    Dataset de Envio de E-mail no Fluig
</h1>

Este projeto consiste em um dataset customizado no Fluig que permite o envio automatizado de e-mails com base em regras definidas.

🚀 Funcionalidades

- Geração dinâmica de dados para o envio de e-mails.
- Personalização do conteúdo dos e-mails.
- Integração com o Fluig para disparo automático.
- Suporte a variáveis dinâmicas dentro do corpo do e-mail.


🛠 Como utilizar

Para utilizar o dataset, basta criar em seu ambiente o dataset acima e chamado passando a seguinte estrutura como constraint:

```
    var params = {
        template: "Código do template",
        subject: "Assunto do e-mail",
        message: 'Mensagem do e-mail',
        emails: [
            Array com todos os e-mails dos destinatários
        ],
        fields: {
             CAMPO: 'VALOR',
             CAMPO: 'VALOR',
             CAMPO: 'VALOR',
             CAMPO: 'VALOR',
        }
    };
```

