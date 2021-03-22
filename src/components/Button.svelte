<script>
  export let title;
  export let type = "primary";
  export let link;
  export let target = "";
</script>

<style>
  .button {
    color: var(--text);
    padding: 0 24px;
    min-width: 145px;
    border-radius: 4px;
    line-height: 44px;
    font-size: 16px;
    border-width: 1px;
    text-decoration: none;
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    border: none;
    outline: none;
  }
  .button.primary {
    background-color: var(--primary-dark);
  }
  .button.accent {
    background-color: var(--accent);
  }
</style>

{#if link}
  <a {target} class="button {type}" href={link}>{title}</a>
{:else}<button class="button" on:click>{title}</button>{/if}
