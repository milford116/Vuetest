<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$Progress.start();

 this.$router.push({ name: "userLogin" });
    // this.$store.dispatch("Logout").then((response) => {
    //   this.$router.push({ name: "userLogin" });
    //   this.$Progress.finish();
    // });
  },
};
</script>
<style lang=""></style>
