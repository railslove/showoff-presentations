!SLIDE
# What is SASS? #

> Sass is a meta-language on top of CSS that's used to describe the style of a document cleanly and structurally, with more power than flat CSS allows.  
> <cite>--Hampton Catlin</cite>


!SLIDE
# Main SASS features: #

* @import & partials
* variables
* extends
* mixins

* operators & functions


!SLIDE
# @import & partials #

locgically distribute your CSS among different files

@import stylesheets/partials to *automatically* concatinate into on big stylesheet

    @@@ javascript
    application.sass.css  // <-- @import "partials/some_partial"
    /partials/_some_partial.sass.css

    Output:
    application.css  // including the partial(s)



!SLIDE
# Variables #

* define colors, font-sizes, dimensions, paddings, margins in a central pace
* reuse variables throughout your stylesheets


!SLIDE
# Extends #

* extend (inhert from) basic styles from within other styles


!SLIDE
# Mixins #

* define reusable sets of styles and reuse throughout your stylesheets
* support for arguments



!SLIDE
# Operators & functions #

* basic calculation with pixel values
* color operations mix(), lighten(), darken()
