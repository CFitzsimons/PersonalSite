export proc=$(docker ps -a -q --filter ancestor=test --format="{{.ID}}")
if [ -n "$proc" ]; then
  docker rm $(docker stop $proc)
fi
