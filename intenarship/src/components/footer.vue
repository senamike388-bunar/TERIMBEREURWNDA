<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10  ">
        <div class="flex flex-wrap justify-between gap-8">
            <!--this is about of footer-->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERURWANDA</h3>
                <p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
            </div>
        
         <!--Quick links-->
         <div >
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
            <ul class="space-y-2 text-sm">
                <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300">Home</RouterLink></li>
                <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300">About</RouterLink></li>
                <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300">Contact</RouterLink></li>
                <li><RouterLink to="/Services" class="text-green-200 hover:text-yellow-300">Services</RouterLink></li>
            </ul>
         </div>
         <!--destninations-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
            <ul class="text-sm space-y-2">
                <li><RouterLink to="/kigali" class="text-green-200 hover:text-yellow-300">Kigali city</RouterLink></li>
                <li><RouterLink to="/nothern" class="text-green-200 hover:text-yellow-300">Nothern Province</RouterLink></li>
                <li><RouterLink to="/southern" class="text-green-200 hover:text-yellow-300">Southern Province</RouterLink></li>
                <li><RouterLink to="/eastern" class="text-green-200 hover:text-yellow-300">Eastern Province</RouterLink></li>
                <li><RouterLink to="/western" class="text-green-200 hover:text-yellow-300">Western Province</RouterLink></li>

            </ul>
         </div>
         <!--Contact info-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact</h3>
            <ul class="text-sm space-y-2">
                <li class="text-green-300">rwanda, Kigali</li>
                <li class="text-green-300">Phone: +250 788 123 456</li>
                <li class="text-green-300">Email: tembera@gmail.com</li>
            </ul>
            
         </div>
        </div>   
        <!--place for copyright-->
         <div class="border-t border-green-600 mt-8 pt-4 text-sm">
            <p class="text-center">DONE BY SENA MIKE</p>
         </div>
        
    </footer>
</template>