class Recorder {

  constructor() {
    console.log('Recorder: constructing recorder');
    this.recorder = null;
    this.data = [];

    this.record = this.record.bind(this);
  }

  recordAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(this.record);
  }

  startRecording() {
    if (this.recorder) {
      console.log('Recorder: started recording');
      this.recorder.start(1000);
    } else {
      console.warn('Recorder: you have not created a recorder');
    }
  }

  stopRecording() {
    if (this.recorder) {
      console.log('Recorder: stopped recording');
      this.recorder.stop();
    } else {
      console.warn('Recorder: Not currently recording!');
    }
  }

  record(stream) {
    console.log('Recorder: start recording');
    const options = { mimeType: 'video/webm;codecs=vp9' };
    const recorder = new window.MediaRecorder(stream, options);

    recorder.ondataavailable =
    recorder.addEventListener('dataavailable', (e) => { this.storeChunk(e); });
    recorder.addEventListener('stop', () => { this.createTempTrack(); });

    this.recorder = recorder;
  }

  storeChunk(e) {
    console.log('Recorder: storing chunk');
    if (e.data.size > 0) {
      this.data.push(e.data);
    }
  }

  createTempTrack() {
    const track = URL.createObjectURL(new Blob(this.data));
    console.log(track);
  }
}

export default new Recorder();
