import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitleCasingPipe } from './title-casing.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { StructuralsComponent } from './structurals/structurals.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippySolCssComponent } from './zippy-sol-css/zippy-sol-css.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasingComponent,
    TitleCasingPipe,
    BootstrapPanelComponent,
    LikeComponent,
    StructuralsComponent,
    ZippyComponent,
    ZippySolCssComponent,
    ContactFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
