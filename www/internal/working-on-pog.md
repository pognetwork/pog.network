# Guidelines for Working on the POG Projects

These are some ideas for our mode of working on the project. Nothing is set in stone: If something doesn't work out well, we need to learn and adapt.

- **Work Independently**<br/>
  We're not following a strict framework, but taking ideas from many agile frameworks like XP and Kanban.
  There's a [global Kanban board](https://github.com/orgs/pognetwork/projects/4) which we use to track overall progress and work across all repos. Everyone can take and create new Issues/Tasks, however larger changes and ideas should be discussed with the team in ideation sessions, so work doesn't get thrown away.

- **Collective Code Ownership**<br/>
  Anyone can improve or amend any code any piece of code. That doesn't mean you can't feel responsible for a module or even whole project: for major changes it is important to be on the same page with the vision.

- **Commit and Integrate often**<br/>
  No branch should exist longer than a day. Merge into our development branch as soon as possible to prevent conflicts.
  This development branch should be always _ready_, so new features should be either hidden behind feature flags, dark-launching or branching by abstraction.

- **Pull Requests**<br/>
  If your confident in your changes and they are minor or cosmetic, or have been created through Pair-Programming, no review is required.
  <br/>
  Otherwise, you can ask anyone in the team for a short review or post it in the #blockers discord channel.
  <br/>
  These reviews shouldn't be too strict: Code Quality is important, however mostly stylistic or subjective qualities can be left as is and can at most be commented on.
  <br/>
  Also, when merging, squash and merge and try to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for the merge commit messages so we have a clean master branch history.

- **Communicate**<br/>
  If any issues or uncertainty crops up, be sure to communicate them with the rest of the team as fast as possible, either through asynchronous communication or by jumping in a discord channel. Try to join the discord channels regularly to ideate, peer-program, discuss or just hang out.
  <br/>
  For more formal ideas, create a github issue and ask the rest of the team for feedback.

- **Document EVERYTHING**
  Documentation is a central part of our process. All decisions (and changes!) are documented in our specification. Technical decisions should either be documented here or as longer code comments/in the projects docs folder. Here, git also enables us to get the full history of all changes. For more information on writing docs, check out our [style-guide](https://pog.network/specification/styleguide).

- **Regular Ideation and Peer-Programming Sessions**<br/>
  When the need arises, we also have the possibility to have a short planning meetings, however we try to minimize useless meetings as much as possible. If you think a meeting isn't going to create any progress: decline it.

## Resources

If you want to go deeper, here are some links that can serve as a starting point for the methods used: [Extreme Programming](https://blog.pythian.com/top-5-extreme-programming-xp-tools-every-team-should-use/) [Continuous Integration vs Feature Branch Workflow](https://youtu.be/v4Ijkq6Myfc)
