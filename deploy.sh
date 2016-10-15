#!/bin/sh

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh <OS_USER_AGENT>"
fi

now -e NODE_ENV=production -e OS_USER_AGENT=$1
