import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageCropperModule } from "ngx-image-cropper";
import { WebcamModal } from "../webcam/webcam.modal";
import { WebcamModule } from "ngx-webcam";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { LinkyModule } from "ngx-linky";
import { LazyLoadImagesModule } from "ngx-lazy-load-images";

import { CropperModal } from "../cropper/cropper.modal";
import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { ChatInputComponent } from "../chat/chat-input/chat-input.component";
import { MentionsPipe } from "../mentions.pipe";
import { StoryModal } from "../story/story-modal/story.modal";
import { ViewStoriesModal } from "../story/view-stories/view-stories.modal";
import { CommentLikesModal } from "../story/comment-likes/comment-likes.modal";
import { HashtagPipe } from "../hashtag.pipe";
import { ChatListComponent } from "../chat/chat-list/chat-list.component";
import { ChatModalComponent } from "../chat/chat-modal/chat-modal.component";
import { AudioPlayerComponent } from "../audio-player/audio-player.component";
import { ChatDatePipe } from "../chat-date.pipe";
import { EventModal } from "../events/event-modal/event.modal";
import { RulesPage } from "../rules/rules.page";

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    ChatDatePipe,
    MentionsPipe,
    HashtagPipe,
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal,
    ChatInputComponent,
    AudioPlayerComponent,
    ChatListComponent,
    ChatModalComponent,
    StoryModal,
    EventModal,
    ViewStoriesModal,
    CommentLikesModal,
    RulesPage
  ],
  entryComponents: [
    CreditsModal,
    RequestGeolocationModal,
    CropperModal,
    WebcamModal,
    ChatInputComponent,
    AudioPlayerComponent,
    ChatListComponent,
    ChatModalComponent,
    StoryModal,
    EventModal,
    ViewStoriesModal,
    CommentLikesModal
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    NgxIonicImageViewerModule,
    ImageCropperModule,
    WebcamModule,
    PickerModule,
    LinkyModule,
    LazyLoadImagesModule
  ],
  exports: [
    ImagePreloadDirective,
    NiceDatePipe,
    ChatDatePipe,
    MentionsPipe,
    HashtagPipe,
    ChatInputComponent,
    ChatListComponent,
    ChatModalComponent,
    LinkyModule,
    AudioPlayerComponent,
    LazyLoadImagesModule
  ],
  providers: [Camera]
})
export class SharedModule {}
