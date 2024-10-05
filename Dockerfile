FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev:watch" ]

# Executar no terminal o comando para gerar a imagem:
# docker build -t rentx .

# Executar no terminal para ver containers que estão rodando:
# docker ps

# Subir imagem para excutar (OBS: -p faz mapeamento das portas):
# docker run -p 3000:3000 rentx

# Acessar container criado (pegar nome do conteiner pelo NAMES):
# docker ps 
# docker exec -it affectionate_taussig /bin/bash


# docker compose -> Orquestrador de containers


