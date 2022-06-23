<script>
  import ThemeCard from './ThemeCard.svelte'
  import ThemeColor from './ThemeColor.svelte'
</script>

<ThemeCard title="Color">
  <!-- <div class="p-4 px-8">
          <VSelect
            v-model="selectedScheme"
            name="mood"
            :options="schemes"
            class="min-w-60 max-w-24 bg-base-200 rounded"
          />
        </div>-->
  <div class="flex h-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 flex-grow justify-center gap-4 p-8">
      <!-- Primary -->
      <div class="col-span-1 w-full">
        <div class="uppercase text-xs font-bold pb-2 pl-2">Primary</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="primary" />
          <ThemeColor color="primary-focus" />
          <ThemeColor color="primary-content" />
        </div>
      </div>

      <!-- Secondary -->
      <div class="col-span-1">
        <div class="uppercase text-xs font-bold pb-2 pl-2">Secondary</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="secondary" />
          <ThemeColor color="secondary-focus" />
          <ThemeColor color="secondary-content" />
        </div>
      </div>

      <!-- Accent -->
      <div class="col-span-1">
        <div class="uppercase text-xs font-bold pb-2 pl-2">Accent</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="accent" />
          <ThemeColor color="accent-focus" />
          <ThemeColor color="accent-content" />
        </div>
      </div>

      <!-- Neutral -->
      <div class="col-span-1">
        <div class="uppercase text-xs font-bold pb-2 pl-2">Neutral</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="neutral" />
          <ThemeColor color="neutral-focus" />
          <ThemeColor color="neutral-content" />
        </div>
      </div>

      <!-- Base -->
      <div class="col-span-1">
        <div class="uppercase text-xs font-bold pb-2 pl-2">Base</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="base-100" />
          <ThemeColor color="base-200" />
          <ThemeColor color="base-300" />
          <ThemeColor color="base-content" />
        </div>
      </div>

      <!-- State -->
      <div class="col-span-1">
        <div class="uppercase text-xs font-bold pb-2 pl-2">State</div>
        <div class="rounded-xl overflow-hidden border border-base-300">
          <ThemeColor color="info" />
          <ThemeColor color="success" />
          <ThemeColor color="warning" />
          <ThemeColor color="error" />
        </div>
      </div>
    </div>
  </div>
</ThemeCard>
