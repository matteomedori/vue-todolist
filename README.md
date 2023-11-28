# Vue To Do List

Rifare l'esercizio della todo list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- creo all'interno dell'oggetto ritornato da data() un array todoList contenente oggetti con i campi text e done
- nell'html creo una lista e utilizzo v-for per creare i li
- ogni li, tramite v-bind, ha la classe text-decoration-line-through a seconda del valore del campo done dell'oggetto

## MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- aggiungo accanto ad ogni todo una x tramite font awesome
- aggiungo un evento al click sulla x che richiama la funzione removeTodo
- removeTodo prende in ingresso l'indice del todo da cancellare e utilizza il metodo splice degli array per rimuovere il todo dall'array

## MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

### Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento! (modificato)
:segno_spunta_bianco:
