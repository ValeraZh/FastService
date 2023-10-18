<template>
  <div class="relative min-h-[100dvh] flex flex-col lg:flex-row">
    <div class="w-full h-full bg-white overflow-y-auto lg:w-1/2">
      <div class="max-w-[76%] h-full flex flex-col mx-auto">
        <Header />
        <MainContent />
        <Footer class="hidden lg:flex" />
      </div>
    </div>
    <div class="relative bg-secondBg rounded-t-[40px] overflow-hidden sm:rounded-l-[40px] lg:w-1/2 lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:py-[130px] lg:px-[100px]">
      <RouterView />
    </div>
    <Footer class="lg:hidden" />
  </div>
</template>