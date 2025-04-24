import {Component} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {PostComponentComponent} from '../post-component/post-component.component';
import {User} from '../Model/User';
import {Post} from '../Model/Post';

@Component({
  selector: 'app-main-page',
  imports: [
    NavBarComponent,
    PostComponentComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  testPost: Post = new class implements Post {
    user: User = new class implements User {
      name: string = "john_doe";
      uniqueName: string = "John Doe";
    };
    text: string = "Contenido de prueba para un post";
    code: string = `
@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/v1/api/posts")
public class PostConstroller {
    @Autowired
    PostService postService;

    @GetMapping({"/", ""})
    public Page<Post> getPosts(Pageable pageable) {
        log.info("Getting all posts");
        return postService.getPosts(pageable);
    }

    @GetMapping({"/{id}"})
    public Post getPosts(@PathVariable("id") Long id) {
        log.info("Getting post by id = " + id.toString());
        return postService.getPostByID(id);
    }

    @PostMapping({"/", ""})
    public Post addPost(@RequestBody Post post, @RequestParam("id") Long id) {
        log.info("Adding post");
        return postService.addPost(post, id);
    }

    @PostMapping({"/{id}"})
    public Post addComment(@PathVariable("id") Long id, @RequestBody Post comment, @RequestParam("userId") Long idUser) {
        log.info("Adding comment to post by id = {}", id.toString());
        return postService.addComment(id, comment, idUser);
    }
}
`;
  }

  AsideToggle = true;
  PageWidth = document.body.offsetWidth;



  Toggle() {
    this.AsideToggle = !this.AsideToggle;
  }

  update() {
    this.PageWidth = document.body.offsetWidth;
  }

}
