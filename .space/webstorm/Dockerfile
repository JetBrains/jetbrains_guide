FROM node:14-bullseye
ENV CHOKIDAR_USEPOLLING=1
ENV CHOKIDAR_INTERVAL=2500
ENV GATSBY_TELEMETRY_DISABLED=1
ENV INTERNAL_STATUS_PORT=33949
ENV REMOTE_DEV_SERVER_JCEF_ENABLED=1

RUN apt-get update && apt-get install -y apt-utils apt-transport-https

RUN apt-get install -y \
  # Utilities \
  curl unzip wget software-properties-common socat man-db gnupg2 pass lsof \
  # VCS \
  git \
  # Docker
  docker docker-compose \
  # JCEF - https://intellij-support.jetbrains.com/hc/en-us/articles/360016421559
  libxss1 \
  && rm -rf /var/lib/apt/lists/*
