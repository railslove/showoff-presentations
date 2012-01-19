!SLIDE bullets incremental
# Situation today #

* We have the right tools (variables, extends, mixins, ...)
* Selector performance can be neglected
* Compass helps greatly with x-browser compatibility

!SLIDE
It's super easy to work on very specific parts of an app using nested styles

    @@@ css
    #controllername_actionname {
      .some-box.class {
        ...
        .some-other-box {
          +clearfix
          dl {
            dt, dd {
              ...

!SLIDE bullets incremental
# So, what is still missing? #
* Still: computer science **vs.** design thinking
* We need, moar conventions!
* Moar best practices!
* Moar good frameworks!


!SLIDE bullets incremental
# Best practice:  How to use mixins #

Use mixins or extends to DRY up code?

* Mixins  = code duplication
* Extends = complicated selectors

!SLIDE
How to use mixins

    @@@ css
    @mixin button($color = "blue") {
      padding: ...
      +border-radius(5px)
      background-color: $color
    }

    .blue_button {
      +button
    }
    .red_button {
      +button("red")
    }

    #special_submit_button {  // semantic
      @extend .red_button
    }


!SLIDE
or

    @@@ html
    <!-- explicitly in the markup -->
    <input id="special_submit_button" class="red_button" />


!SLIDE bullets incremental
* The rule of thumb is:
* Use mixins, when you need to pass parameters

!SLIDE bullets incremental
Btw, since we are talking about @extend

* New feature coming to SASS:
* --> Placeholder Selectors <--

!SLIDE
Placeholder selectors, using `%`

    @@@ css
    #context a%extreme { // This ruleset won't be rendered on its own.
      color: blue;
      font-weight: bold;
      font-size: 2em;
    }
    
    .notice { @extend %extreme; }

Compiles to:

    @@@ css
    #context a.notice {
      color: blue;
      font-weight: bold;
      font-size: 2em;
    }



!SLIDE bullets incremental
# Best practice: #
# Use the Compass core mixins!!! #

* they might not always do _exactly_ what you need
* **but** they are closest thing to conventions that we ever had in CSS
* they are very well documented:  
[http://compass-style.org/reference/compass/](http://compass-style.org/reference/compass/)
* **and** you can always overwrite them  
<small>(and it's really good to already have a +clearfix everywhere you need it)</small>



!SLIDE bullets incremental
# Conventions #

* **Rails asset pipeline**:
* one SASS file per controller in the scaffolds
* **AVA-Pattern**:
* [https://github.com/kuroir/AVA-Pattern](https://github.com/kuroir/AVA-Pattern)

!SLIDE
# Best practice: file structure #

A suggestion:

    @@@ javascript
    application.css.sass      // @imports
    + /global/                // defaults, for the *whole* page
    + /components/            // reusable components
    + /contexts/              // sets of pages
    + /controllers/           // --> see asset pipeline


!SLIDE

    @@@ javascript
    + application.css.sass
    + /global/
      | _base.css.sass              // variables
      ¦ _reset.css.sass
      ¦ _element_defaults.css.sass
      | _fonts.css.sass
      | _form_defaults.css.sas
      | _layout.css.sass
    + /components/
      | _map.css.sass
      | _calendar.css.sass
      | _datepicker.css.sass
    + /contexts/
      | _user_signup_signin.css.sass
      | _admin.css.sass
    + /controllers/
      | _users.css.sass
      | _posts.css.sass
      ¦ _items.css.sass



!SLIDE bullets incremental
# Where to put mixins? #

* _mixins.css.sass  OR  into the individual stylesheets ?

!SLIDE bullets incremental
# What do you think about this? #

* Selector naming convention:
* Using underscores for IDs `#a_unique_element`  
and hyphens for classes `.some-generic-class`


!SLIDE
If you hear more about upcoming styling best practices, conventions, patterns,   
please send them my way [@jkwebs](http://twitter.com/jkwebs)


!SLIDE
# The End #

Thank you
