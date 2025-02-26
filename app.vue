<template>
  <div class="bg-neutral-900 text-white doto font-extralight fixed w-screen h-screen flex flex-col gap-2 justify-center items-center">
    <label class=""> {{ "protokoi.com" }} </label>
    <label class=""> {{ "coming_soon" }} </label>

    <a target="_blank" href="https://github.com/protokoi" class="absolute bottom-0 flex items-center gap-1 m-2 duration-300 hover:text-green-400 hover:m-3">
      <p class=""> {{ "protokoi" }} </p>
      <Icon name="pixelarticons:github" class="text-xl opacity-70" />
    </a>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Doto&display=swap');
.doto {
  font-family: "Doto", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "ROND" ;
}
</style>
