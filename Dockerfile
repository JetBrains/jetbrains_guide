FROM node:14
ENV GATSBY_TELEMETRY_DISABLED=1
ENV INTERNAL_STATUS_PORT=33949
ENV CHOKIDAR_USEPOLLING=1
EXPOSE 8000
EXPOSE 33949

WORKDIR /jetbrains_guide/

RUN npm install --global gatsby-cli
RUN gatsby telemetry --disable

# Copy common files into container image
COPY ./packages/ ./
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./guide.sh ./
COPY ./sites/ ./
RUN yarn

# Copy all remaining files (except those in .dockerignore)
# Note that content folders like `sites/*/contents/` will be mapped to folders on the host
# in the WebStorm run configurations.
COPY . .
RUN yarn

# Override the entry point defined in the node container otherwise headaches will happen
ENTRYPOINT []

CMD ["/jetbrains_guide/guide.sh"]