<script lang="ts">
  export let title = ''
</script>

<div class="relative flex flex-col decor-round bg-base-100">
  <div class="font-light text-2xl px-5 py-3 bg-base-200">{ title }</div>
  <div class="relative flex-grow p-4">
    <slot />
  </div>
</div>
