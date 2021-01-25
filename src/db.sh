#!/bin/bash
file="/Users/hugomartin/feu/src/DB.json"
regex='"*": "*",'
while IFS= read ligne
do
    if [[ $(echo $ligne | wc -c) -gt 10 ]]; then
        id=$(echo $ligne | cut -d':' -f 1)
        mail=$(echo $ligne | cut -d':' -f 2)
        newline="{ \"id\": ${id}, \"mail\": ${mail} \"selected\": false },"
        echo "$newline" >> output.json
    else
        echo "$ligne" >> output.json
    fi
done < "$file"