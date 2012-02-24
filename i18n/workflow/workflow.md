!SLIDE callout orange

# The reality of i18n: #

A very complex workflow

involving many different team members

with different roles



!SLIDE bullets incremental

# Involved roles: #

* Designer

* Content Manger

* Copy Editor

* Translator

* Frontend Developer

* Backend Developer

* DevOps

* SysAdmin

* Product Manager

* Project Manager

* HR


!SLIDE bullets incremental

# Workflow #

* 1) Designers design

* Challenge: very different string lengths, date/currency formats, etc.

* ________________

* 2) Content Managers / Copy Editors fine tune wording

* Challenge: keeping an overview over common terms, phrases, salutations

* ________________

* 3) Translators translate

* Challenge: big constrains on string length or sentence structure, while conveying the same meaning

* Challenge: figuring out the context of a string



!SLIDE bullets incremental

# Workflow <small>(cont'd)</small> #

* 4) Frontend Developer turn screen designs into code

* Challenge: maintaining consisten naming systems, string reuse (DRY)

* Challenge: rapid prototyping vs. providing translateable strings as soon as possible

* Challenge: using translations in javascript

* ________________

* 5) Backend Developers have to make sure i18n works and performs

* Challenge: performance, caching, tests, especially acceptance tests (!)

* ________________

* 6) DevOps deploy to staging / production

* Challenge: making sure i18n strings are up-to-date and don't break stuff



!SLIDE bullets incremental

# Workflow <small>(cont'd)</small> #

* 7) Product/Project Managers have to coordinate

* Challenge: see all of the above

* Challenge: for 12 languages you easly have 20+ people involved that need to be coordinated



!SLIDE callout green

# Most important: #

Make sure that everyone understands ALL(!) the challenges
