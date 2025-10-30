<template>
  <header class="sticky top-0 bg-chivas-blue flex justify-between h-18 z-30 shadow-sm">
    <div class="bg-white -ml-4 pl-8 pr-6 py-2 transform -skew-x-25 h-18 my-auto">
      <img
        class="w-24 transform skew-x-25"
        src="https://braingoat-container.s3.amazonaws.com/assets/estadioakron.mx/logos-marca/estadio-akron-color.svg"
        alt="logo_estadio_akron"
      />
    </div>
    <div class="flex h-18">
      <div class="flex pr-8 min-h-full items-center">
        <img
          class="h-9"
          src="https://braingoat-container.s3.amazonaws.com/assets/fifa2026/iconos-sitio/icon_fifa_blanco.png"
          alt="logo_fifa"
        />
      </div>
      <div class="flex bg-chivas-red transform">
        <div class="bg-white px-4 transform -skew-x-25 h-18 flex items-center -ml-3">
          <img
            class="h-9 transform skew-x-25"
            src="https://braingoat-container.s3.amazonaws.com/assets/globales/logo-marca-chivas/clasicos/logo_chivas.svg"
            alt="logo_chivas"
          />
        </div>
        <div class="bg-success w-1 transform -skew-x-25 border-r-2 border-white"></div>
        <div class="w-8"></div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderDefault',
}
</script>
