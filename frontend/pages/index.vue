<script lang="ts" setup>
import { useWallet } from '@apillon/wallet-vue';
import { ClaimType } from '~/lib/values/general.values';

useHead({ title: 'NFT Studio' });

const config = useRuntimeConfig();
const { wallet } = useWallet();
const { isLoggedIn, initEmbeddedWallet } = useWalletConnect();

const type = ClaimType.WHITELIST;
// const type = config.public.CLAIM_TYPE;

onMounted(() => {
  if (!isLoggedIn.value) {
    initEmbeddedWallet();
  }
});

function openEmbeddedWallet() {
  if (wallet.value) {
    wallet.value.events.emit('open', true);
  }
}
</script>

<template>
  <div v-if="!isLoggedIn">
    <div class="border border-black rounded-lg mx-auto max-w-xl">
      <FormWallet>
        <Btn type="secondary" size="large" @click="openEmbeddedWallet">
          <span class="mr-1">▶◀</span> Apillon Embedded Wallet
        </Btn>
      </FormWallet>
    </div>
    <div class="my-8 text-center max-w-xl mx-auto">
      <h6 class="mb-2">Having trouble logging in?</h6>
      <p>
        Only those with secret handshake (the designated wallet) can enter. Contact the master who
        set up your NFT Studio to request access.
      </p>
    </div>
    <Footer />
  </div>
  <Poap v-else-if="Number(type) === ClaimType.POAP" />
  <TablePoapReservation v-else-if="Number(type) === ClaimType.FREE_MINT" />
  <Airdrop v-else />
</template>
