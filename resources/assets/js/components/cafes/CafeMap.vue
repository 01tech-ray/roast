<style lang="scss">
    div#cafe-map {
        width:100%;
        height:400px;
    }
</style>

<template>
  <div id="cafe-map">

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ROAST_CONFIG} from '../../config.js';
  export default {
    props: {
        'latitude': {  // 经度
            type: Number,
            default: function () {
                return 120.21
            }
        },
        'longitude': {  // 纬度
            type: Number,
            default: function () {
                return 30.29
            }
        },
        'zoom': {   // 缩放级别
            type: Number,
            default: function () {
                return 4
            }
        }
    },
    data() {
        return {
            markers:[],
            infoWindows:[],
            map:null
        }
    },
    mounted(){
        this.map=new AMap.Map('cafe-map',{
            center: [this.latitude, this.longitude],
            zoom: this.zoom
        });
        this.clearMarkers();
        this.buildMarkers();
    },
    computed:{
        ...mapState({
            cafes:state => state.cafes.cafes
        })
    },
    methods:{
        buildMarkers(){
            this.markers=[];
            var image = ROAST_CONFIG.APP_URL + '/storage/img/coffee-marker.png';
            var icon = new AMap.Icon({
                image: image,  // 图像 URL
                imageSize: new AMap.Size(19, 33)  // 设置图标尺寸
            });
            for (var i=0; i< this.cafes.length;i++){
                var marker=new AMap.Marker({
                    position: AMap.LngLat(parseFloat(this.cafes[i].latitude), parseFloat(this.cafes[i].longitude)),
                    title: this.cafes[i].name,
                    icon:icon,
                    map:this.map
                });

                var infoWindow = new AMap.InfoWindow({
                    content:this.cafes[i].name
                });
                this.infoWindows.push(infoWindow);
                
                marker.on('click',function(){
                    infoWindow.open(this.getMap(),this.getPosition());
                })
                this.markers.push(marker);
            }
            this.map.add(this.markers);
        },
        clearMarkers(){
            for (var i=0; i < this.markers.length;i++){
                this.markers[i].setMap(null);
            }
        }
    },
    watch:{
        cafes(){
            this.clearMarkers();
            this.buildMarkers();
        }
    }
  }
</script>