<script lang="ts">
  import ThemeCard from './ThemeCard.svelte'
</script>

<ThemeCard title="Buttons">
  <div class="p-8 space-y-4">
    <div class="flex flex-wrap items-center justify-center gap-2 bg-base-content p-4">
      <button class="btn btn-base-100">Base 100</button>
      <button class="btn btn-outline btn-base-100">Base 100</button>
      <button class="btn btn-base-200">Base 200</button>
      <button class="btn btn-outline btn-base-200">Base 200</button>
      <button class="btn btn-base-300">Base 300</button>
      <button class="btn btn-outline btn-base-300">Base 300</button>
    </div>

    <!-- Default -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-neutral opacity-30">Ghost</button>
      <button class="btn btn-link">Link</button>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warn</button>
      <button class="btn btn-error">Error</button>
    </div>

    <!-- Outline -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn btn-neutral btn-outline hover:bg-neutral">Neutral</button>
      <button class="btn btn-primary btn-outline">Primary</button>
      <button class="btn btn-secondary btn-outline">Secondary</button>
      <button class="btn btn-accent btn-outline">Accent</button>
      <button class="btn btn-neutral btn-outline opacity-30">Ghost</button>
      <button class="btn btn-link btn-outline">Link</button>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn outline-info hover:bg-info">Info</button>
      <button class="btn outline-success">Success</button>
      <button class="btn outline-warning">Warn</button>
      <button class="btn outline-error">Error</button>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn bg-primary">Background</button>
      <button class="btn bg-primary hover:bg-secondary focus:ring-secondary btn-scale-none">No Scale</button>
      <button class="btn decor-border border-primary focus:ring-primary">Outline</button>
      <button class="btn decor-border hover:border-accent">Hover</button>
      <button class="btn decor-border hover:border-secondary text-primary hover:text-secondary">Hover Color</button>
      <button class="btn outline border-primary text-primary hover:bg-secondary hover:border-secondary"
        >Outline Solid</button>
      <a href="#" class="btn link decor-border focus:border-primary focus:ring-primary">Link Ring</a>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button disabled class="btn btn-primary">Disabled Fill</button>
      <button disabled class="btn btn-primary btn-outline">Disabled Outline</button>
      <a href="#" disabled class="btn btn-link">Disabled Link</a>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button class="btn btn-icon btn-xs btn-neutral btn-outline hover:bg-neutral">
        <tabler-box />
      </button>
      <button class="btn btn-icon btn-sm btn-primary btn-outline">
        <tabler-box />
      </button>
      <button class="btn btn-icon btn-md btn-secondary btn-outline">
        <tabler-box />
      </button>
      <button class="btn btn-icon btn-lg btn-accent btn-outline">
        <tabler-box />
      </button>
      <button class="btn btn-icon btn-neutral btn-outline opacity-30">
        <tabler-box />
      </button>
    </div>
  </div>
</ThemeCard>
