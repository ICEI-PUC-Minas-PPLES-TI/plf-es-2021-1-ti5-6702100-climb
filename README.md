# Climb

Este trabalho está inserido em um contexto de ferramentas de implantação de aplicações baseadas em tecnologia de containerização que são executadas em ambientes corporativos, mais especificamente, as corporações que ainda optam por questões de segurança ao modelo de execução das aplicações em servidores _on premises_. A solução é baseada no modelo de plataforma como serviço, no qual é destinado a auxiliar o processo de implantação de aplicações em equipes não especializadas e não técnicas, de modo que a solução possa ser trazer benefícios semelhantes aos serviços oferecidos Paas em nuvem, como por exemplo, Heroku da Salesforce.

Além disso, a solução possui características de sistemas distribuídos como a comunicação em tempo real para o monitoramento, uso de sistema de mensageria para o processamento de tarefas em fila e execução da solução cliente _web_ e móvel.

## Integrantes

- Andrew Costa Silva
- Arthur Rocha Amaral
- Gabriel Moreira Chaves
- Ian Bittencourt Andrade Jacinto
- João Guilherme Martins Borborema

## Orientadores

- Hugo Bastos De Paula
- Pedro Alves De Oliveira

## Instruções de utilização

### Pré requisitos

- Docker `v20.10.x ou superior`
- Docker compose `v1.29.x ou superior`

### Inicializando o Climb

Para iniciar o Climb você deve ir ao diretório `codigo` onde encontrasse dois arquivos, o `docker-compose` que será utilizado para fazer o _bulid_ das imagens de cada serviço e o `.env.example` que contém os exemplos das variáveis de ambiente que devem ser inicializadas antes de rodar o _docker-compose_.

- Crie uma cópia do do `.env.example` e renomeie para `.env`. O arquivo terá o seguinte conteúdo:

```txt
/*golang*/

HOST=

DOCKER_ADDRESS=
DOCKER_PORT=

REGISTRY_ADDRESS=
REGISTRY_PORT=

RABBITMQ_HOST=

/*node*/

NODE_PUBLIC_API_HOST=
NODE_PROMETHEUS_HOST=

/*frontend*/

NEXT_PUBLIC_HOST=
NEXT_PUBLIC_DASHBOARD_HOST=

/*Git credentials*/

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
PUBLIC_GITHUB_SCOPE="repo"

GITLAB_CLIENT_ID=
GITLAB_CLIENT_SECRET=
PUBLIC_GITLAB_SCOPE="api"
```

- Preencha com os dados do ambiente. Segue um exemplo preenchido pelo time de desenvolvimento:

```txt
/*golang*/

HOST=

DOCKER_ADDRESS=
DOCKER_PORT=

REGISTRY_ADDRESS=
REGISTRY_PORT=

RABBITMQ_HOST=

/*node*/

NODE_PUBLIC_API_HOST=https://calm-pig-49.loca.lt /*usando localtunnel para expor a porta 3333*/
NODE_PROMETHEUS_HOST=http://climb.codes:9090

/*frontend*/

NEXT_PUBLIC_HOST=localhost:3000 /*usando o endereço do frontend*/
NEXT_PUBLIC_DASHBOARD_HOST=http://climb.codes:3000

/*Git credentials*/

/*Nessa seção substitua os '*' pelas credencias do git*/

GITHUB_CLIENT_ID="********"
GITHUB_CLIENT_SECRET="********************************"
PUBLIC_GITHUB_SCOPE="repo"

GITLAB_CLIENT_ID="********"
GITLAB_CLIENT_SECRET="*********************************"
PUBLIC_GITLAB_SCOPE="api"
```

- Coloque o arquivo de configuração do kubernetes na pasta `kubernetes` com o nome `config`.
- Para preparar a máquina que irá executar o kubernetes execute o install.sh da pasta `setup`, com a variável de ambiente DNS_TOKEN do Cloudflare. Após isso para expor os serviços basta executar o comando k8s-start na máquina.
- Execute o comando:

```bash
docker-compose up --build
```

Ao final da execução, terá criado os containers expostos nas seguintes portas:

- frontend: 3000
- api-node: 3333
- postgres: 5432
- rabbitmq: 15672

### Acessando a aplicação

Para acessar a aplicação basta navegar até `localhost:3000` e acessar utilizando as credenciais:

```txt
e-mail: admin@example.com
senha: password
```

Para acessar a documentação da api-node é possivél navegar até `localhost:3333/swagger`

## Histórico de versões

- 0.0.1
  - Definição do Tema e Tecnologias
- 0.0.2
  - Criação de PoC's
- 0.0.3
  - Definição de identidade
- 0.0.4
  - Montar apresentação de slides
- 0.1.0
  - Montar apresentação de slides
- 0.1.1
  - Termo de Abertura de Projeto
- 0.1.2
  - Estrutura analítica do projeto (EAP)
- 0.2.0
  - Tela de Login
- 0.2.1
  - Autenticação
- 0.2.2
  - Tabela de usuários
- 0.2.3
  - Tela de Integração com GitHub/GitLab
- 0.2.4
  - Webhook com GitHub/GitLab
- 0.2.5
  - Cadastro de usuários por arquivo
- 0.2.6
  - Protótipos de interfaces
- 0.2.7
  - Diagrama de Classes
- 0.2.8
  - Diagrama de Componentes
- 0.2.9
  - Diagrama de Visão Geral e Documento de arquitetura
- 0.3.0
  - Tela de Aplicações
- 0.3.1
  - Tela de Plugins
- 0.3.2
  - Build com Pack
- 0.3.3
  - Build com Docker Build
- 0.4.0
  - Deploy por Webhook
- 0.4.1
  - Configurar Implantação
- 0.4.2
  - Listagem de Rollbacks
- 0.4.3
  - Iniciar Projeto Mobile
- 0.4.4
  - Tela de Aplicações
- 0.5.0
  - Avaliação da Arquitetura
- 0.5.1
  - Tela de Aplicações
- 0.5.2
  - Visualização de informações mobile
- 0.5.3
  - Monitoramento Prometheus + Grafana
- 1.0.0
  - Deploy da versão inicial
