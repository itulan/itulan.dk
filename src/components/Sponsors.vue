<template>
  <div>
    <span>
      <em>powered by</em>
    </span>
    <br />
    <div class="sponsors">
      <Hyperlink newTab url="https://www.novonordisk.dk/">
        <img
          alt="Epico NextGen logo"
          class="logo primary"
          src="../assets/img/common/sponsor_logos/novo_nordisk/novo-nordisk-innovationHub_BW.png" 
          loading="lazy"
        />
      </Hyperlink>
      <div class="minor-sponsors">
        <img
          src="../assets/img/common/sponsor_logos/ida/IDA_white.png" 
          alt="IDA logo"
          style="padding-bottom:13px"
          
        />
        <!-- <img
          src="../assets/img/common/sponsor_logos/kmd/KMD_WHITE.png"
          alt="KMD logo" 
        /> -->
        <!-- <div>
          <img
            style="margin-bottom: 2rem"
            src="../assets/img/common/sponsor_logos/accenture/AccentureLogo.png"
            alt="Accenture logo"  
          />
        </div>  -->
      </div>
    </div>
  </div>
</template>

<script>
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
    Hyperlink,
  },
};
</script>

<style>
.sponsors {
  display: flex;
  flex-direction: column;
}

.minor-sponsors {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  margin-top: 1rem;
}

.logo {
  z-index: 10;
}

.logo.primary {
  width: 200px;
}

.minor-sponsors img {
  width: 100px;
}

.separator {
  font-weight: 700;
  font-style: italic;
}

@media only screen and (max-width: 750px) {
  .logo.primary {
    width: 60%;
  }

  .logo.secondary {
    width: 50%;
  }

  .sponsors {
    align-items: center;
  }

  .minor-sponsors {
    flex-direction: column;
    justify-content: center;
  }
  .minor-sponsors img {
    margin-bottom: 2rem;
  }
}
</style>
