<script>
  import ThemeCard from './ThemeCard.svelte'
</script>

<ThemeCard title="Alert">
  <div class="p-8 space-y-4">
    <div class="alert p-4 bg-base-100 filter drop-shadow-lg">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-primary">Details</button>
    </div>

    <div class="alert outline-neutral p-4">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-primary">Details</button>
    </div>

    <div class="alert alert-rounded bg-neutral p-4">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-accent btn-outline">
        <span class="text-accent-content">Details</span>
      </button>
    </div>

    <div class="alert outline-neutral alert-rounded alert-outline p-4">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-secondary">Details</button>
    </div>

    <div class="alert bg-primary alert-rounded p-4">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-outline">Details</button>
    </div>

    <div class="alert outline-primary alert-rounded p-4">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-outline btn-secondary">Details</button>
    </div>

    <div class="alert outline-neutral alert-rounded p-4">
      <tabler-info-circle />
      <span>Initializing diagnostics, Please stand by...</span>
      <span class="flex-grow" />
      <button class="btn btn-accent">Details</button>
    </div>

    <div class="alert p-4 bg-info alert-rounded">
      <tabler-info-circle />
      <span>There has been an update to the mainframe.</span>
      <span class="flex-grow" />
      <button class="btn btn-outline">Details</button>
    </div>

    <div class="alert p-4 bg-success alert-rounded">
      <tabler-circle-check />
      <span>All system go. Ready for launch.</span>
    </div>

    <div class="alert p-4 bg-warning alert-rounded">
      <tabler-alert-triangle />
      <span>Fuel leak detected. Standby while repairs are being made.</span>
    </div>

    <div class="alert p-4 bg-error alert-rounded">
      <tabler-alert-circle />
      <span>All communications lost. Abort mission.</span>
    </div>
  </div>
</ThemeCard>
