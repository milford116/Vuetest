<template>
    <div class="col-md-12">
        <div class="page-header-title">
            <h5 class="m-b-5">{{pageTitle}}</h5>
        </div>                   
        <ul class="breadcrumb">
            <li class="breadcrumb-item">
            <a href="http://192.168.20.31:8082/home">
            <i class="feather icon-home"></i> </a>
            </router-link>
            </li>
            <li v-for="(breadcrumb,idx) in breadcrumbList" :key="idx" @click="routeTo(idx)" class="breadcrumb-item">
                {{breadcrumb.name}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  name: 'BreadCrumb',
  data() {
        return {
            pageTitle:'',
            breadcrumbList: [],
        }
   },
    mounted() {
        this.updateList();
    },

    methods: {
        routeTo(pRouteTo) {
            if(this.breadcrumbList[pRouteTo].link){
                this.$router.push(this.breadcrumbList[pRouteTo].link);
            }
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb;
            this.pageTitle = this.$route.name;
        },
    },
       
    watch: {
        '$route'(){
            this.updateList();
        }
    },
}
</script>