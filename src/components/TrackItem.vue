<template>
  <article class="record">
    <div class="record__play" @click="playItem">
      <p>
        <span
          v-if="!playing"
          class="fa fa-play"></span>
        <span
          v-else
          class="fa fa-pause"></span>
      </p>
    </div>
    <div class="record__detail">
      <div class="record__header">
        <p class="title">{{record.name}}</p>
        <p class="length">{{record.length}}</p>
      </div>
      <div class="record__description">
        <p class="description">
          {{record.description}}
        </p>
      </div>
    </div>

  </article>
</template>

<script>
export default {
  name: 'TrackItem',
  props: ['record'],
  data() {
    return {
      playing: false,
      loading: false,
    };
  },
  methods: {
    playItem() {
      this.playing = !this.playing;
      console.log('playing this item');
    },
  },
};
</script>

<style>
  .record {
    background-color: #ffffff;
    color: #2b2b2b;
    display: flex;
    font-weight: 300;
    margin-bottom: 1.5em;
    padding: 6px 10px 6px;
    width: 100%;
    font-size: 16px;
  }

  .record__play .fa-play, .record__play .fa-pause{
    font-size: 2.25em;
    color: #1a8655;
  }

  .record__detail {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    margin-left: 1em;
    justify-content: center;
  }

  .record__detail p {
    margin: 0;
  }

  .record__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid #6a68d6;
    margin-bottom: 6px;
  }

  .record__description {
    text-align: left;
  }
</style>
