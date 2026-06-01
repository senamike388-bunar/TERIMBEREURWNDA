<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10  ">
        <div class="flex flex-wrap justify-between gap-8">
            <!--this is about of footer-->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.brand') }}</h3>
                <p class="text-sm text-green-200">{{ t('footer.desc') }}</p>
            </div>
        
         <!--Quick links-->
         <div >
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinks') }}</h3>
            <ul class="space-y-2 text-sm">
                <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300">{{ t('nav.home') }}</RouterLink></li>
                <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300">{{ t('nav.about') }}</RouterLink></li>
                <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300">{{ t('nav.contact') }}</RouterLink></li>
                <li><RouterLink to="/services" class="text-green-200 hover:text-yellow-300">{{ t('nav.services') }}</RouterLink></li>
            </ul>
         </div>
         <!--destninations-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.destinations') }}</h3>
            <ul class="text-sm space-y-2">
                <li><RouterLink to="/kigali" class="text-green-200 hover:text-yellow-300">{{ t('nav.kigali') }}</RouterLink></li>
                <li><RouterLink to="/northern" class="text-green-200 hover:text-yellow-300">{{ t('nav.northern') }}</RouterLink></li>
                <li><RouterLink to="/southern" class="text-green-200 hover:text-yellow-300">{{ t('nav.southern') }}</RouterLink></li>
                <li><RouterLink to="/eastern" class="text-green-200 hover:text-yellow-300">{{ t('nav.eastern') }}</RouterLink></li>
                <li><RouterLink to="/western" class="text-green-200 hover:text-yellow-300">{{ t('nav.western') }}</RouterLink></li>

            </ul>
         </div>
         <!--Contact info-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.contact') }}</h3>
            <ul class="text-sm space-y-2">
                <li class="text-green-300">{{ t('contact.addressLine') }}</li>
                <li class="text-green-300">{{ t('footer.phoneLabel') }}: {{ t('contact.phoneNumber') }}</li>
                <li class="text-green-300">{{ t('footer.emailLabel') }}: {{ t('contact.emailAddress') }}</li>
            </ul>
            
         </div>
        </div>   
        <!--place for copyright-->
            <div class="border-t border-green-600 mt-8 pt-4 text-sm">
                <p class="text-center">{{ t('footer.copy') }}</p>
            </div>
        
     </footer>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>
