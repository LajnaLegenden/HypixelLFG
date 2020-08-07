import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsCoreComponent } from './components/posts-core.component';



@NgModule({
  declarations: [PostsCoreComponent],
  imports: [
    CommonModule
  ],
  exports: [PostsCoreComponent]
})
export class PostsModule { }
