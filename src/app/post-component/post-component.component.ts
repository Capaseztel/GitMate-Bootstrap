import {Component, Input} from '@angular/core';
import {Post} from '../Model/Post';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-post-component',
  imports: [Highlight, HighlightLineNumbers ],
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent {
  @Input() Post: Post | undefined;
  lang = "Java"

}
