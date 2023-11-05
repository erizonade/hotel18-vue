<template>
    <div id="ListKota">
            <div class="row" >
                <div class="col-lg-3" v-for="list in listKotas.data" :key="list.id">
                    <div class="card text-bg-dark">
                        <img :src="list.foto_lokasi" class="card-img" alt="...">
                         <div class="card-img-overlay">
                         <h5 class="card-title">{{ list.nama_lokasi }}</h5>
                     </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import axios from "axios";
    export default {
        name : 'ListKota',

        data() {
            return {
                listKotas : [],
                response : {}
            }
        },

        methods : {

            setData(dataKota) {
                this.listKotas = dataKota;
            },

            async listKota() {
                try {
                    
                    this.response = await axios.get('http://127.0.0.1:8000/api/lokasi')

                    this.setData(this.response.data)
                } catch (error) {
                    console.info(error)
                }
            }

        },

        mounted() {
            this.listKota()
        },
    }
</script>

<style>
#listkota .card {
    border: none;
}

#listkota .card .card-title {
    position: absolute;
    bottom: 10px;
}
</style>