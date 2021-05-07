import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsCoreComponent } from './components/post-core/posts-core.component';
import { SearchComponent } from './components/search/search.component';
import { ListingsComponent } from './components/listings/listings.component';



@NgModule({
  declarations: [PostsCoreComponent, SearchComponent, ListingsComponent],
  imports: [
    CommonModule
  ],
  exports: [PostsCoreComponent, SearchComponent, ListingsComponent]
})
export class PostsModule { }
