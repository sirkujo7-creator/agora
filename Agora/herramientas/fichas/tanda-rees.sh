#!/bin/bash
# Uso (desde Agora/): herramientas/fichas/tanda-rees.sh <carpeta> id:trad[:b] ...
# Integra una tanda de fichas reescritas (encargo-reescritura.md). En <carpeta> está nueva-<id>.json de cada una;
# «:b» marca una ficha breve (comprobación reesb). Arma cada ficha con unir-rees.js, la comprueba, la copia,
# integra los complementos y corre verificar y las pruebas. Se frena ante el primer error.
set -e
S=$1; shift
specs=()
for x in "$@"; do IFS=: read -r id tr b <<< "$x"; modo=rees; [ "$b" = b ] && modo=reesb
  node herramientas/fichas/unir-rees.js $id $S/nueva-$id.json $S/$id.js >/dev/null
  r=$(node herramientas/fichas/checkficha.js $id $S/$id.js $S/nueva-$id.json $modo); echo "$id ($modo): $r"; [ "$r" = OK ]
  cp $S/$id.js datos/modulos/$tr/$id.js; specs+=("$id:$tr:x"); done
node herramientas/fichas/integrar.js $S "${specs[@]}"
node herramientas/verificar.js 2>&1 | tail -1 | grep "Sin errores"
node pruebas/navegador.js > $S/nav.txt 2>&1 || { grep "✗" $S/nav.txt; exit 1; }
tail -1 $S/nav.txt
