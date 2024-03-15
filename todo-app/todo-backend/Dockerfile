FROM node:16

WORKDIR C:\\git\\part12-containers-applications\\todo-app\\todo-backend

COPY --chown=node:node . .
RUN npm ci

ENV DEBUG=todo-express-backend:*

USER node
CMD npm start
