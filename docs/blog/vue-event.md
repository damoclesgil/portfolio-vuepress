Falar galerinha ~~do mal~~ legal hehe. Hoje vamos falar de eventos no vuesera.


> Componente disparando/emitindo Evento:

```html
  <li v-show="!editing">
    <p v-html="post.text"></p>
    <button @click="$emit('remove', post)">Delete</button>
  </li>
```

> Componente recebendo o evento:

```html
<post-item
  v-for="post in posts"
  :key="post.id"
  :post="post"
  @remove="deleteItem"
/>
```

```js
methods: {
  deleteItem (post) {
    this.posts.splice(this.posts.indexOf(post), 1)
  }
}
```

As vezes precisamos pegar o valor que o component disapara. Muito semelhante ao `v-model` do vue. Segue abaixo um exemplo

> Transferindo/Emitando o valor do input

```html
<template>
<div @change="$emit('save', $event.target.value)"/>
</template>
```

```js

// Enviar a informação
onSave(){
 this.$emit('save', value)
} 
// Recebe a Informação
@save('$event')
receiveSave(value){console.log(value)}
```



## Eventos de Click, MouseDown, MouseUp, Keypress/KeyUp/Keydown

O vue possui muitos atalhos desses eventos no doom através do `v-bind` ou pelo alias `@`.
Exemplo:

```html
<template>
<div 
  @keyup.esc="deactivate"
  @keydown.self.down.prevent="pointerForward"
  @keydown.self.up.prevent="pointerBackward"
  @keypress.enter.tab.stop.self="addPointerElement($event.target.blur())"
  @mousedown="toggle"
  @blur="deactivate()">
</template>
```
O `@mousedown` é muito semelhante ao `@click`, só que o clique você consegue manipular mais coisas. Enquanto que o mousedown é disparado instatnaimente ao clicar.


O `.prevent` é equivalente ao `event.preventDefault()` nativo do javascript. É muito utilizado para em elementos em um formulários para previnir um ação que é padrão do browser. 

O `.self` ele disapara somente ao contexto que foi aplicado, um exemplo é um input, vamos supor que eu eu queira ativar um evento ao pressionar 'enter' somente quando estiver dentro dele, então utilizamos: `keypress.enter.self="makeSomething()"`. 
Ele também auxilia na prevenção de conflitos, por exemplo se tivermos outro evento na div debaixo (filho) ele não será acionado.

O `.stop` é muito utlizado em casos que você deseja que não dispare o evento que vem de da div superior ou no elemento que está em cima(pai).

<!-- Os eventos de 'keys' são bem intuitivos e muito bons de se utilizarem. -->