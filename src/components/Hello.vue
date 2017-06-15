<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <section
      class="recordList loading"
      v-if="loading">
      <p>Loading...</p>
      <p><span class="fa fa-circle-o-notch spin-icon"></span></p>
      </section>
    <section
      class="recordList"
      v-else>
      <track-item
        v-for="record in trackList"
        :record="record"></track-item>
    </section>
    <div class="add-record">+</div>
  </div>
</template>

<script>
import TrackItem from './TrackItem';
import tracks from '../recordList';
import db from '../models/Firebase';

export default {
  name: 'hello',
  components: { TrackItem },
  data() {
    return {
      msg: 'Your Tracks',
      trackList: null,
      loading: false,
      error: false,
    };
  },
  mounted() {
    this.loading = true;
    db.get('/tracks').then((tracks) => {
      this.trackList = tracks;
      this.loading = true;
    })
    // window.setTimeout(() => {
    //   this.trackList = tracks.records;
    //   this.loading = false;
    // }, 2000);

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.add-record {
  background-color: #1a8655;
  color: #ffffff;
  position: fixed;
  bottom: 14px;
  right: 14px;
  font-size: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  font-weight: 300;
}

.add-record:hover {
  transform: scale(1.02);
}

.add-record:active {
  transform: scale(0.90);
  box-shadow: none;
}

.recordList {
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 0 1em 0;
}

.recordList.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50%;
  flex: 1 0 auto;
  font-size: 25px;
}

.spin-icon {
  font-size: 50px;
  animation: spin-icon 1s infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
}

@keyframes spin-icon {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

h1, h2 {
  font-weight: normal;
  margin: 0 .5em .5em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
