#!/bin/bash

COMMAND=$1

case $COMMAND in
help)
  echo "Usage: ./run.sh {up|install|dev|build|down|format|exec|help}"
  echo ""
  echo "Commands:"
  echo "  up        : コンテナをバックグラウンドで起動"
  echo "  install   : react-appでnpm installを実行"
  echo "  dev       : react-appでnpm run devを実行"
  echo "  build     : react-appでnpm run buildを実行"
  echo "  exec      : react-appコンテナにシェルで入る"
  echo "  down      : コンテナを停止・削除"
  echo "  format    : prettierでコード整形"
  echo "  help      : このヘルプを表示"
;;
up)
docker-compose -f docker/docker-compose.yml up -d
;;
install)
docker-compose -f docker/docker-compose.yml run --rm react-app npm install
;;
dev)
docker-compose -f docker/docker-compose.yml exec react-app npm run dev
;;
build)
docker-compose -f docker/docker-compose.yml run --rm react-app npm run build
;;
exec)
docker-compose -f docker/docker-compose.yml exec react-app sh
;;
down)
docker-compose -f docker/docker-compose.yml down
;;
format)
docker-compose -f docker/docker-compose.yml run --rm react-app npx prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'
;;
*)
echo "Usage: ./run.sh {up|install|dev|build|down|format|exec|help}"
;;
esac