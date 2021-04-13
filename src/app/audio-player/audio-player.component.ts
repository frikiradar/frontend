import { Howl } from "howler";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { IonRange } from "@ionic/angular";

@Component({
  selector: "audio-player",
  templateUrl: "./audio-player.component.html",
  styleUrls: ["./audio-player.component.scss"]
})
export class AudioPlayerComponent implements OnInit {
  @Input() src: string;

  private player: Howl = null;
  public downloading = false;
  public downloaded = false;
  public isPlaying = false;
  public progress = 0;
  public duration = 0;
  public timeDuration: string;
  public timeProgress: string;
  @ViewChild("range", { static: false }) range: IonRange;

  constructor() {}

  ngOnInit() {}

  download() {
    this.downloading = true;
    this.start();
  }

  start() {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: this.src,
      html5: true,
      onplay: () => {
        this.isPlaying = true;
        this.updateProgress();
      },
      onend: () => {
        this.isPlaying = false;
        this.progress = 0;
      }
    });

    setTimeout(() => {
      this.duration = this.player.duration();
      this.timeDuration = this.timeToString(this.duration);
      this.timeProgress = this.timeDuration;
      this.downloading = false;
      this.downloaded = true;
    }, 1500);
  }

  togglePlayer(pause: boolean) {
    if (!this.player) {
      return;
    }
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
      this.duration = this.player.duration();
    }
  }

  seek() {
    let newValue = this.range.value as number;
    this.player.seek(this.duration * (newValue / 100));
  }

  updateProgress() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    this.timeProgress = this.timeToString(seek);
    setTimeout(() => {
      if (this.isPlaying) {
        this.updateProgress();
      }
    }, 100);
  }

  timeToString(time: number): string {
    const duration = Math.round(time);
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    let minutesString = "" + minutes;
    if (minutes < 10) {
      minutesString = "0" + minutesString;
    }
    let secondsString = "" + seconds;
    if (seconds < 10) {
      secondsString = "0" + seconds;
    }

    return minutesString + ":" + secondsString;
  }
}
