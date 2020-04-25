---
id: 05
title: Watch Vue 3
layout: PostLayout
date: "24 de março de 2020"
author: damoclesgil
description: Sobre o Vue 3!
excerpt: Sobre o vue 3!
category: lifehack
meta: # If you have cover image
  - property: og:image
    content: /images/blog/JAMstack.png
  - name: twitter:image
    content: /images/blog/JAMstack.png
---

# Sobre o vue 3

# Watch

A propriedade `watch` é muito semelhante a computed no vue 3. Só que ela tem muitas vantagems como observar o valor e caso haja alguma alteração, ele altera também.

Vamos ver outro exemplo simples usando nossa API de composição. Aqui está exemplo.

```vue live
<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
import eventApi from "@/api/event.js";

export default {
  setup() {
    const searchInput = ref("");
    const results = ref(0);
    
    results.value = eventApi.getEventCount(searchInput.value);

    return { searchInput, results };
  }
};
</script>
```

With this code, here what happens when we use the form:


![Not Working](/images/blog/not-working-opt.gif)


As you can see, it doesn’t seem to be working. This is because our API calling code, specifically results.value = eventApi.getEventCount(searchInput.value); is only getting called once, during the first time setup() is run. It doesn’t know to fire again, when our searchInput gets updated.


## Solulção: Watch

To fix this we need to use watch. This will run our function on the next tick while reactively tracking its dependencies, and re-run it whenever the dependencies have changed. Like so:

```js
setup() {
  const searchInput = ref("");
  const results = ref(0);

  watch(() => {
    results.value = eventApi.getEventCount(searchInput.value);
  });

  return { searchInput, results };
}
```

So the first time this gets run it uses reactivity to start tracking searchInput, and when it gets updated it will re-run our API call which will update results. Since results is used in our template our template will be re-rendered.


![Working Option](/images/blog/working-opt.gif)

If I want to be more specific as to which source I want to watch for changes, I can specify it in the watcher definition, like so:


```js
watch(searchInput, () => {
  ...
});
```

Also, if I need access to the new value and old value of the item being watched I can write:

```js
watch(searchInput, (newVal, oldVal) => {
  ...
});
```

## Watching Multiple Sources

If I want to watch two Reactive References I can send them inside an array:


```js
watch([firstName, lastName], () => {
  ...  
});
```

Now if either are changed, the code inside will re-run. I can also get access to both of their old and new values with:

```js
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  ...   
});
```