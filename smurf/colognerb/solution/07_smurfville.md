!SLIDE callout

6) Create a "Living styleguide"


!SLIDE bullets incremental

# Why a living styleguide? #

* Most important:  modules need to be reused!
* By designers as well
* Need to facilitate communication
* A living styleguide can be a great communication device


!SLIDE bullets incremental

# How does it work? (theory) #

* 1) follow some convention
* 2) inspect code and derive style information
* 3) render styleguide
* 4) <span style="text-decoration: line-through;">PROFIT!</span> BOUNTY! *
* <small>* because today is Talk-like-a-Pirate-Day</small>


!SLIDE bullets incremental

# Practical example:  Living Sass Color Styleguide #

* 1. convention:  define all your colors as Sass <code>$color-variables</code>



!SLIDE bullets incremental

# Practical example:  Living Sass Color Styleguide #

    @@@ CSS
    // ---- used colors ----
    $black: black
    $grey: #ccc
    ...

    // ---- semantic color mappings ----
    $primary-color: $cyan
    $accent-color: $light-blue
    $alert-color: $red
    $notice-color: $green

    // borders
    $border-color: $grey

    // text
    $light-text-color: $white
    $dark-text-color: $dark-blue
    ...


!SLIDE

# Color variable naming convention #

    @@@ javascript
    $
    + modifier // light/dark/...
    + object // text/background/primary/...
    + variable_type // color/height/..

    $light-text-color
    $small-headline-font-size
    $big-border-radius
    ...



!SLIDE callout

"The styleguide ... I think it's alive!"

:)


