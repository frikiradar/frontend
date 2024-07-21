import { NotificationOptionsModal } from "./../notification/notification-options-modal/notification-options.modal";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WebcamModal } from "../webcam/webcam.modal";
import { WebcamModule } from "ngx-webcam";
import { LinkyModule } from "ngx-linky";
import { SwiperModule } from "swiper/angular";
import { register } from "swiper-new/element/bundle";

import { CreditsModal } from "../credits/credits.modal";
import { NiceDatePipe } from "../nice-date.pipe";
import { RequestGeolocationModal } from "../radar/request-geolocation-modal/request-geolocation.modal";
import { ImagePreloadDirective } from "../shared/image-preload.directive";
import { ChatInputComponent } from "../chat/chat-input/chat-input.component";
import { MentionsPipe } from "../mentions.pipe";
import { StoryModal } from "../story/story-modal/story.modal";
import { MenuModal } from "./../menu/menu.modal";
import { CommentLikesModal } from "../story/comment-likes/comment-likes.modal";
import { HashtagPipe } from "../hashtag.pipe";
import { ChatListComponent } from "../chat/chat-list/chat-list.component";
import { ChatModalComponent } from "../chat/chat-modal/chat-modal.component";
import { AudioPlayerComponent } from "../audio-player/audio-player.component";
import { ChatDatePipe } from "../chat-date.pipe";
import { EventModal } from "../events/event-modal/event.modal";
import { RulesPage } from "../rules/rules.page";
import { LikesModal } from "./../profile/likes-modal/likes.modal";
import { ImageViewerModal } from "../image-viewer/image-viewer.modal";
import { AdComponent } from "../ad/ad.component";
import { DisableAccountPage } from "../settings/disable-account/disable-account.page";
import { PaymentsModal } from "../settings/payments/payments.modal";
import { UnlimitedModal } from "../unlimited/unlimited.modal";
import { I18nPipe } from "../i18n.pipe";
import { PostComponent } from "../post/post.component";
import { StorySliderComponent } from "../story/story-slider/story-slider.component";
import { PostModal } from "../post/post-modal/post.modal";

// install Swiper modules
register();

@NgModule({
  declarations: [
    ImagePreloadDirective,
    NiceDatePipe,
    ChatDatePipe,
    MentionsPipe,
    HashtagPipe,
    I18nPipe,
    CreditsModal,
    RequestGeolocationModal,
    WebcamModal,
    ChatInputComponent,
    AudioPlayerComponent,
    ChatListComponent,
    ChatModalComponent,
    StoryModal,
    EventModal,
    MenuModal,
    LikesModal,
    NotificationOptionsModal,
    CommentLikesModal,
    RulesPage,
    ImageViewerModal,
    AdComponent,
    DisableAccountPage,
    PaymentsModal,
    UnlimitedModal,
    StorySliderComponent,
    PostComponent,
    PostModal,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    WebcamModule,
    LinkyModule,
    SwiperModule,
  ],
  exports: [
    ImagePreloadDirective,
    NiceDatePipe,
    ChatDatePipe,
    MentionsPipe,
    HashtagPipe,
    I18nPipe,
    ChatInputComponent,
    AdComponent,
    ChatListComponent,
    ChatModalComponent,
    LinkyModule,
    AudioPlayerComponent,
    SwiperModule,
    StorySliderComponent,
    PostComponent,
    PostModal,
  ],
})
export class SharedModule {}
