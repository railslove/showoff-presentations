!SLIDE callout

3) Stop the cascade!


!SLIDE bullets incremental

# What is the cascade? #


* **Cascading** applicability is obviously a key feature of CSS
* It allows selectors to apply to a large part of a document
* Example:


!SLIDE

# Cascading applicability: #

    @@@ CSS
    #sidebar a

applies to **all** links in the sidebar



!SLIDE bullets incremental

# Cascading applicability: #

* Can enable pretty elegant things
* BUT
* Also source of much uncertainty and complexity
* Can easily become a performance problem
* In other words:
* _"Hidden pro-feature, that everybody uses to shoot themselves in the foot"_
* => We need some safe guards



!SLIDE

# Examples #


Very bad:

    @@@ CSS
    #sidebar a


Better:

    @@@ CSS
    .sidebar > a


Even better:

    @@@ CSS
    .sidebar .link


Ultimum modularity:

    @@@ CSS
    .sidebar .sidebar-link



.notes Who can tell me what the problem is in this (the first) example?


