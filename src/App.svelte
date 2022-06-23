<script lang="ts">
  import themes from './store/themes'
  import ThemeCard from './lib/ThemeCard.svelte'
  import { useTheme } from './store/theme'
import ButtonsCard from './lib/ButtonsCard.svelte'
import AvatarsCard from './lib/AvatarsCard.svelte';
import ColorsCard from './lib/ColorsCard.svelte';

  let selectedTheme = useTheme(themes.light)
  // react to changes
  $: useTheme(selectedTheme)
</script>

<main class="min-h-screen p-10 bg-base-300 text-base-content space-y-6">
  <select bind:value={selectedTheme}>
    {#each Object.entries(themes) as [key, val]}
      <option value={val}>
        {key}
      </option>
    {/each}
  </select>

  <ColorsCard />
  <AvatarsCard />
  <ButtonsCard />

  <!-- Alert -->
  <div class="alert">Hello, world!</div>

  <!-- Button -->

  <!-- Switch -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="switch switch-primary switch-outline switch-rounded">
    <div class="switch-track">
      <input type="checkbox" class="sr-only" />
      <div class="switch-thumb" />
    </div>
    On
  </label>

  <div
    class="border-5 border-primary border-b-secondary border-l-accent border-r-none w-50 h-10 decor-stripe animate-right bg-primary" />
</main>

<style global>
  html,
  body {
    min-height: 100vh;
  }
</style>
