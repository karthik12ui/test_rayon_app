import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SideNavbarComponent } from './navbar/side-navbar/side-navbar.component';
import { MainNavbarComponent } from './navbar/main-navbar/main-navbar.component';
import { NotificationAlertsComponent } from './notification-alerts/notification-alerts.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutSharedService } from './services/layout-shared.service';
import { ErrorMessageService } from './services/error-message.service';
import { UserMenuComponent } from './tool-bar/user-menu/user-menu.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ChildMenuItemsComponent } from './navbar/main-navbar/child-menu-items/child-menu-items.component';
import { SideNavbarService } from './navbar/side-navbar/side-navbar.service';
import { JoinOurComponent } from './join-our/join-our.component';
import { ImageContentComponent } from './sections/image-content/image-content.component';
import { RayonsoftErrorMessageItems } from './services/error-message.constant';
import { FixedContentComponent } from './sections/fixed-content/fixed-content.component';
import { SwiperImageContentComponent } from './sections/swiper-image-content/swiper-image-content.component';
import { ImageWithListComponent } from './sections/image-with-list/image-with-list.component';
import { LeftContentImageComponent } from './sections/left-content-image/left-content-image.component';
import { ContentImageTextComponent } from './sections/content-image-text/content-image-text.component';
import { CardTextComponent } from './sections/card-text/card-text.component';
import { IconTextComponent } from './sections/icon-text/icon-text.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { BannerContentListComponent } from './sections/banner-content-list/banner-content-list.component';
import { NumberTextComponent } from './sections/number-text/number-text.component';
import { ListImageContentComponent } from './sections/list-image-content/list-image-content.component';
import { CardIconListComponent } from './sections/card-icon-list/card-icon-list.component';
import { MarketplaceTabsComponent } from './marketplace-tabs/marketplace-tabs.component';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    SideNavbarComponent,
    MainNavbarComponent,
    NotificationAlertsComponent,
    PageBannerComponent,
    ToolBarComponent,
    UserMenuComponent,
    FooterComponent,
    SocialIconsComponent,
    ChildMenuItemsComponent,
    JoinOurComponent,
    ImageContentComponent,
    FixedContentComponent,
    SwiperImageContentComponent,
    ImageWithListComponent,
    LeftContentImageComponent,
    ContentImageTextComponent,
    CardTextComponent,
    IconTextComponent,
    TestimonialsComponent,
    BannerContentListComponent,
    NumberTextComponent,
    ListImageContentComponent,
    CardIconListComponent,
    MarketplaceTabsComponent,
  ],
  providers: [
    LayoutSharedService,
    ErrorMessageService,
    SideNavbarService,
    RayonsoftErrorMessageItems
  ],
  imports: [
    CommonModule,
    RayonsoftSharedModule
  ],
  exports: [
    AnnouncementsComponent,
    SideNavbarComponent,
    MainNavbarComponent,
    NotificationAlertsComponent,
    PageBannerComponent,
    ToolBarComponent,
    UserMenuComponent,
    FooterComponent,
    SocialIconsComponent,
    ChildMenuItemsComponent,
    JoinOurComponent,
    ImageContentComponent,
    FixedContentComponent,
    SwiperImageContentComponent,
    ImageWithListComponent,
    LeftContentImageComponent,
    ContentImageTextComponent,
    CardTextComponent,
    IconTextComponent,
    TestimonialsComponent,
    BannerContentListComponent,
    NumberTextComponent,
    ListImageContentComponent,
    CardIconListComponent,
    MarketplaceTabsComponent
  ],
})
export class LayoutSharedModule { }
