<template>
  <div id="main" class="bg-bg-card flex flex-col w-72 mx-auto rounded-xl shadow-xl text-white">
    
    <!-- nft image -->
    <div class="p-4 flex">
      <div class="w-full overflow-hidden relative">
        <img class="object-cover h-full inset-0 w-full rounded-xl mx-auto" src="../assets/image-equilibrium.jpg">

        <div class="opacity-0 hover:opacity-100 cursor-pointer transition duration-150">
          <div class="flex justify-center items-center text-white absolute inset-0 bg-cyan opacity-50 rounded-xl"></div>
          <div class="flex justify-center items-center absolute inset-0 tet-white">
            <img src="../assets/icon-view.svg"/>
          </div>
        </div>

      </div>
    </div>

    <!-- main container  -->
    <div class="container px-4">
      <h2 class="font-semibold pb-2 hover:text-cyan cursor-pointer transition-color duration-250">Equilibrium #3429</h2>

      <p class="font-light text-sm text-softBlue pb-4">Our Equilibrium collection promotes balance and calm.</p>

      <!-- amount and time  -->
      <div class="flex justify-between text-sm pb-4 border-b border-line">
        <span class="font-bold text-cyan">
          <img src="../assets/icon-ethereum.svg" class="inline pr-1"> 0.041 ETH
        </span>

        <span class="text-softBlue">
          <img src="../assets/icon-clock.svg" class="inline pr-1"> 3 days left
        </span>
      </div>

      <div class="text-softBlue font-light text-sm flex py-4">
        <img src="../assets/image-avatar.png" class="w-7 border border-white rounded-full mr-4">
        <p class="mt-1">Creation of <span class="text-white hover:text-cyan cursor-pointer">Jules Wyvern</span></p>
      </div>
    </div>
  </div>

  <div class="attribution mt-5">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/infraredCoding">Imran Rahman</a>.
  </div>
</template>

<script>
export default {
    name: 'NFTCard'
}
</script>

<style>
#main {
    font-size: 18px;
}

.attribution {
    font-size: 11px; 
    text-align: center; 
}

.attribution a { 
    color: hsl(228, 45%, 44%); 
}
</style>