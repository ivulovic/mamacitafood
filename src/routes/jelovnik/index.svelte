<script>
  import MapPin from "../../icons/MapPin.svelte";
  import Phone from "../../icons/Phone.svelte";

  const menu = [
    {
      title: "TRAVELERS 3 KOM",
      price: 295,
      description:
        "Tri male zemičke sa mesom rebara, miks salatom, feta sirom i sosom",
    },
    {
      title: "WARP SPEED ONIONS 3 KOM",
      price: 265,
      description:
        "Slaninicom rolovani luk pečen u rerni, punjen junećim mesom i belim mocarela sirom",
    },
    {
      title: "EUROPA CRAB CAKES 5 KOM",
      price: 295,
      description: "Pohovani kolačići sa mesom krabe i ren kiselom pavlakom",
    },
    {
      title: "STARFIRE ROLLS 3 KOM",
      price: 285,
      description:
        "Ljute i začinjene burito rolnice poslužene sa avokado sosom, relišom i death sosom",
    },
    {
      title: "ALIEN FINGERS 3 KOM",
      price: 235,
      description: "Pohovani mocarela stapići sa peršun sosom",
    },
    //

    {
      title: "CHICKEN INVADERS 3 KOM",
      price: 245,
      description:
        "Grilovani pileći batačići bez zakrilaca Posluženi sa slatko ljutim čili sosom",
    },
    {
      title: "TIMELINE MIXUP",
      price: 695,
      description:
        "Miks starter za 2 osobe. Travelers 2kom, Alien fingers 2kom, po dva pileća stix-a, crab cakes 2kom",
    },
    {
      title: "HEART WARMING CHILLI",
      price: 655,
      description:
        "Čili kon karne. Poslužen sa tortilja čipsom, topljenim čedarom, avokado sosom, relišom i kiselom pavlakom",
    },
  ];
</script>

<style>
  .main {
    margin: 0 auto;
    max-width: 1024px;
  }
  .main a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  .header {
    display: grid;
    grid-gap: 12px;
    padding: 1rem 0px;
    align-items: center;
    grid-template-columns: 1fr 3fr;
  }
  .header .logo {
    max-width: 100%;
    min-width: 150px;
  }
  .header .title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .header .subtitle {
    font-family: "Dekko", cursive;
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 1.6rem;
    color: var(--primary);
  }
  .header .description {
    line-height: 1.3rem;
    font-size: 14px;
  }
  .header .description > :global(svg) {
    position: relative;
    top: 2px;
    margin-right: 2px;
  }
  .header a.description,
  .header a.description > :global(svg) {
    transition: all 0.3s ease;
  }
  .header a.description:hover {
    color: var(--primary);
  }
  .header a.description:hover > :global(svg) {
    fill: var(--primary);
  }
  .header .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .menu {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 1rem;
  }
  .menu .menu-item:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }
  .menu .menu-item:not(:first-child) {
    padding-top: 1rem;
  }
  .menu .menu-item {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
  .menu .menu-item .title,
  .menu .menu-item .price {
    font-family: "Dekko", cursive;
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary);
    font-weight: 600;
  }
  .menu .menu-item .price {
    margin-bottom: 0;
    text-align: right;
  }
  .menu .menu-item .price span {
    font-family: "Dekko", cursive;
    font-size: 1.2rem;
  }
  .menu .menu-item .description {
    line-height: 1.3rem;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    .header {
      justify-content: center;
    }
    .header .logo {
      max-width: 150px;
    }
    .header .subtitle {
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.4rem;
    }
    .header .title {
      font-size: 1.7rem;
    }
    .header .description {
      line-height: unset;
      font-size: 12px;
    }
    .menu .menu-item .title {
      margin-bottom: 0.5rem;
    }
    .menu .menu-item .title,
    .menu .menu-item .price {
      font-size: 1.4rem;
    }
  }
</style>

<div class="main">
  <div class="header">
    <a href="/"><img class="logo" src="/logo-compressed.png" alt="Logo" /></a>
    <div class="details">
      <a href="/">
        <div>
          <div class="title">Mamacita</div>
          <div class="subtitle">Meksički street food na srpski način</div>
        </div>
      </a>
      <div>
        <div class="description">Pon - Pet:&nbsp;&nbsp; 08-16h</div>
        <div class="description">Sub - Ned:&nbsp; 08-14h</div>
        <a href="tel:+381011000111" class="description">
          <Phone />
          011 000 111
        </a><br />
        <a
          target="new"
          href="https://www.google.com/maps/search/?api=1&query=vojvode+putnika+7+mladenovac"
          class="description">
          <MapPin />
          Vojvode Putnika 7, Mladenovac
        </a>
      </div>
    </div>
  </div>
  <div class="menu">
    {#each menu as item}
      <div class="menu-item">
        <div>
          <p class="title">{item.title}</p>
          <p class="description">{item.description}</p>
        </div>
        <div>
          <p class="price">{item.price} <span>RSD</span></p>
        </div>
      </div>
    {/each}
  </div>
</div>
