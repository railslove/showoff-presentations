!SLIDE callout

4) Structure ALL your files!


!SLIDE bullets incremental

# CSS file structure #

* Sass + Rails asset pipeline enable this
* Split your CSS into individual partials
* Organize your partials into different categories/folders
* => Categories communicate responsibilty


!SLIDE

# SMURF Sass File structure #

    @@@ javascript
    + application.css.sass
    + /base/
     | _settings.sass
     | _reset.sass
     | _colors.sass
     | _dimensions.sass
     | _typography.sass
     | _element_defaults.sass
    + /layout/
     | _grid.sass
    + /modules/
     | _box.sass
     | _button.sass
    + /non-modular/
     | _overrides.sass
     | _controller_specific.sass
     | _hacks.sass


!SLIDE bullets incremental

# SMURF categories #

* **base**
* - reset, settings, global, foundation

* **layout**
* - grid, positioning, widths, "faceless" containers
* - e.g. <code>.l-full-width, .l-sidebar, .l-column-3</code>

* **modules**
* - reusable, context-independent, SMURF naming convention
* - e.g. <code>.m-box, .m-dialog, .m-horizontal-list</code>

* **non-modular**
* - overrides, page mentality, glue code, backend dev sandbox ;)
