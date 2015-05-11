# Phase 2: Viewing Blogs and Posts

## Rails
### Models with associations
* Deck (title, description, user_id)
  * A deck can belong to many users. 
* 

### Controllers
Api::StudyGroupsController (create, destroy, index, show)
Api::PostsController (create, destroy, show, update)

### Views
* blogs/show.json.jbuilder

## Backbone
### Models
* Blog (parses nested `posts` association)
* Post
* student.js (parses nested study groups association)
* tutor.js (parses nested study groups association, creates )

### Collections
* Blogs
* Posts

### Views
* BlogForm
* BlogShow (composite view, contains PostsIndex subview)
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem
* PostShow

## Gems/Libraries
