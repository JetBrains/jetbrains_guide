#!/usr/bin/env bash

guide=""

case "$1" in
    intellij)

      guide="intellij" ;;
    dotnet)
      guide="dotnet" ;;
    go)
      guide="go" ;;
    ws)
      guide="ws" ;;
    pc)
      guide="pc" ;;
esac

if [ $guide == "" ] ; then
    echo 'Missing argument for guide'
    exit 1
else
  cp -r ./zh-CN/sites/$guide-guide/contents/* ./sites/$guide-guide/contents/
fi
