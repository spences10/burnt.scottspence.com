#!/usr/bin/env bash
find ./public -name '*.html' |
sed -e 's,^\./public/,,' |
awk -F'.' '{print "https://scottspence.com/"$1}' |
sed 's/\/index/\//'
npx sitemap > ./public/sitemap.xml