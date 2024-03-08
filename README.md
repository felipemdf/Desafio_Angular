# DesafioAngular

## Requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados em sua máquina:

- Node.js
- npm 
- Docker (opcional)
- Docker Compose (opcional)

## Instalação

Siga estas etapas para configurar o projeto:

1. Clone este repositório em sua máquina local:

```bash
   git clone https://github.com/felipemdf/Desafio_Angular.git 
```

2. Navegue até o diretório do projeto:

```bash
   cd Desafio_Angular 
```

3. Instale as dependências do projeto:

```bash
   npm i
```

## Execução
Para executar o projeto, basta executar o comando:

```bash
   npm run start
```
Abra seu navegador e vá para http://localhost:4200 para visualizar a aplicação.

## Docker
Se você preferir executar a aplicação com Docker, execute os comandos:
```bash
   docker build -t projeto_angular .
```

```bash
   docker run -p 8080:80 projeto_angular
```
Abra seu navegador e vá para http://localhost:8080 para visualizar a aplicação.

## Docker Compose
Se você tiver o docker compose instalado, você pode executar utilizando o comando

```bash
   docker-compose up -d
```
Abra seu navegador e vá para http://localhost:8080 para visualizar a aplicação.