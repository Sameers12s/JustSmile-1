### API Design

- User
  - Login / Signup
  - Forget Password
  - Search User
  - Follow User
  - Unfollow User
- Posts
  - Create Posts
  - Read Posts
  - Delete Posts
  - Image Upload\*
- Messaging / Chat
  - send message
  - read message
- Likes
  - Like
  - Unlike
- Comments
  - Create Comment
  - Read Comment
  - Delete Comment
- Metrics (for User, for Post, for Comment)
  - Like Count
  - Follow Count
  - Comment Count
  - Unread Messages
  - New Notifications

### Concepts

- Hooks (useSate, useEffect, useMemo, useCallback, customHooks)
- React Contexts API
- React Query / react-firebase-query
- Offline Feature
  - Local Storage, Session Storage, Indexed DB : storage, cahce
  - Serivece Worker (PWA prgressive web app): Intercept Request, Offline/Online Status Check
  - Operational Transform (Design Patterns) (Realtime systems)
  - local, cloud

object

- state
-

###########
doc: ""
user1: "hellx"
user2: "hell"
user3: "hello world"

@override

Singleton Pattern
Factory Pattern
Builder Pattern
Command Pattern
################
document: ""
actions: [
{
type: "comment",
data: "Hellx",
time: 1:00
user: local
},
{
type: "like",
data: 1,
time: 12:00
user: cloud
 },
{
type: "unlike",
data: "o world"
time: 1:25
user: cloud
 }
]

    document: "hello world"
