#!/usr/bin/env bash

declare proj_dir=$(dirname $(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd))
declare target_name=$(basename $proj_dir)

echo "Copying $proj_dir to $target_name"

rsync \
  --exclude=".git" \
  --exclude=".github" \
  --exclude="terraform" \
  --exclude=".idea*" \
  --exclude="backend/node_modules" \
  --exclude="frontend/node_modules" \
  -avz $proj_dir/ cde.zquintana.com:Code/sync-poc
