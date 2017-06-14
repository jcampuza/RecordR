class Recorder {

  constructor() {
    console.log('Recorder: constructing recorder');
    this.recorder = null;
    this.data = [];

    this.record = this.record.bind(this);
  }

  // Public
  recordNewTrack() {
    this.data.length = 0;
    this.recorder = null;
    this.recordAudio();
  }

  recordAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(this.record);
  }

  // Public
  startRecording() {
    if (this.recorder) {
      console.log('Recorder: started recording');
      this.recorder.start(1000);
    } else {
      console.warn('Recorder: you have not created a recorder');
    }
  }

  // Public
  stopRecording() {
    if (this.recorder) {
      console.log('Recorder: stopped recording');
      this.recorder.stop();
    } else {
      console.warn('Recorder: Not currently recording!');
    }
  }

  initNewRecorder(stream) {
    console.log('Recorder: start recording');
    const options = { mimeType: 'video/webm;codecs=vp9' };
    const recorder = new window.MediaRecorder(stream, options);

    recorder.ondataavailable =
    recorder.addEventListener('dataavailable', (e) => { this.storeChunk(e); });
    recorder.addEventListener('stop', () => { this.createTempTrack(); });

    this.recorder = recorder;
    this.startRecording();
  }

  storeChunk(e) {
    console.log('Recorder: storing chunk');
    if (e.data.size > 0) {
      this.data.push(e.data);
    }
  }

  // Public
  createTempTrack() {
    const track = URL.createObjectURL(new Blob(this.data));
    console.log(track);
  }
}

export default new Recorder();
