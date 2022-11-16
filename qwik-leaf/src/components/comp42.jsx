import { component$ } from '@builder.io/qwik'
    
    export default component$(() => {
      return <div>comp42 - hello {Date.now()}</div>
  })