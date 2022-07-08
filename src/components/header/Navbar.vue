<template>
    <Nav class=" w-full bg-blue-900">
        <div class="conatiner mx-auto px-10">
            <header	 class="py-3"> 
               <div class="flex justify-between nav1">
                    <ul class="flex text-white  font-medium	">
                        <li class="ml-6"><a href="">+225 000000000</a></li>
                        <li class="ml-6"><a href=""> wicsof@gmail.com</a></li>
                    </ul>
                    <ul class="flex text-white font-bold justify-between">
                        <li><a href="" class="mr-5 text-2xl"> <i class="fa-brands fa-facebook"></i> </a></li>
                        <li><a href="" class="mr-5 text-2xl"> <i class="fa-brands fa-whatsapp"></i> </a></li>
                        <li><a href="" class="mr-5 text-2xl">   <i class="fa-solid fa-envelope"></i></a></li>
                    </ul>
               </div>
            </header>
        </div>
    </Nav>
      <Nav class=" w-full bg-white py-6 sticky z-40 top-0 ">
        <div class="conatiner mx-auto px-20">
            <header	 class=" gb-white relative"> 
                   <a href="" class="logo"><img src="../../assets/logo/logo1.png" alt=""></a>
               <div class="flex justify-between nav1 justify-items-center ">
                    <ul class="flex text-black font-bold ml-auto">
                        <li class="mr-6"><a href=""> Accueil</a></li>
                        <li class="mr-6"><a href="">A propos</a></li>
                        <li class="mr-6"><a href="">Service</a></li>
                        <li class="mr-6"><a href="">Projets</a></li>
                        <li class="mr-6"><a href="">Produits</a></li>
                    </ul>
               </div>
            </header>
        </div>
    </Nav>
</template>

<script setup>
// import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

</script>

<style lang="scss">

    .logo{
        max-width: 150px;
        position: absolute;
        top: -15px;

        img{
            // color:#FF990
            max-width: 100%;
        }
    }

</style>