#!/bin/sh
. ./.env
PASSWORD=$REMOTE_PASSWORD rsync -avzue ./ssh_sudo --rsync-path "sudo -S rsync" ./build/* $REMOTE_CONNECTION:/usr/share/nginx/html