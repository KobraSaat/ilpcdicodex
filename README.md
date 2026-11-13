# Codex Reloaded

Pagina statica responsive in italiano, con terminale glitch e sblocco tramite password.

## Avvio locale

Da questa cartella:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Aprire la pagina con un browser. Non sono necessarie dipendenze o una build.

La password è `FICA160H` (maiuscole e minuscole contano). Le coordinate e l’indizio sono configurati in `app.js`.

Questo è un puzzle lato client: password e coordinate sono ispezionabili nei sorgenti. Per proteggere una posizione privata occorre un backend che verifichi la password e restituisca la soluzione solo dopo l'autenticazione.
