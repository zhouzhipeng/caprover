#!/bin/bash
TAG=$(date "+%m%d%H%M")
IMAGE=registry.cn-shanghai.aliyuncs.com/zhouzhipeng/caprover:${TAG}
docker build -f dockerfile-captain.release  -t ${IMAGE} .
docker push ${IMAGE}