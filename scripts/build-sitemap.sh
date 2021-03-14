#!/usr/bin/env bash
find ./public -name '*.html' |
sed -e 's,^\./public/,,' |
awk -F'.' '{print "https://scottspence.com/"$1}' |
npx sitemap > ./public/sitemap.xml