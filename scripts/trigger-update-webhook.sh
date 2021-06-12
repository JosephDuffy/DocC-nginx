#!/bin/bash
#
# A script that simulates a minimal package update webhook that GitHub would trigger.
# These hooks are not available on per-repo basis when using ghcr.io but only on an
# organisation level, which this repo is not a part of. If support is added for individual
# repos this script can be removed.

PACKAGE="$1"
SECRET="$2"
URL="$3"
DATA="{\"package\":{\"name\":\"$PACKAGE\"}}"
DIGEST=$(echo -n "$DATA" | openssl dgst -sha256 -hmac "$SECRET" -binary | xxd -p -c 256)
curl -X POST -H "Content-Type: application/json" -H "X-Hub-Signature-256: sha256=$DIGEST" --data "$DATA" "$URL"
