#!/bin/sh
#execute from root dir...

if npm t; then
    echo "::set-output name=jest-results::0" # response code -- 0 = failure
else
    echo "::set-output name=jest-results::1"
fi