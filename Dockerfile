FROM node:12.10.0-alpine

EXPOSE 8000

RUN npm install --global gatsby-cli yarn
RUN gatsby telemetry --disable

WORKDIR /jetbrains_guide/

# Override the entry point defined in the node container otherwise headaches will happen
ENTRYPOINT []

CMD ["/jetbrains_guide/guide.sh"]
