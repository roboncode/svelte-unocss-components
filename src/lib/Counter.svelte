<script lang="ts">
  import { light } from '../store/themes/light'
  import { cupcake } from '../store/themes/cupcake'

  const themes = [light, cupcake]
  const theme = themes[1]

  for (const [k, v] of Object.entries(theme)) document.body.style.setProperty(`--sa-${k}`, v)
</script>

<button class="btn btn-primary">My Button</button>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="switch switch-primary switch-outline switch-rounded">
  <div class="switch-track">
    <input type="checkbox" class="sr-only" />
    <div class="switch-thumb" />
  </div>
  On
</label>
