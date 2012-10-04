!SLIDE callout

4) Structure ALL your files!


!SLIDE bullets incremental

# CSS file structure #

* Sass + asset pipeline enable this
* Split your CSS into different partials
* Put your partials into different categories/folders
* => Categories communicate responsibilty


!SLIDE

# Sass File structure #

    @@@ javascript
    + application.css.sass
    + /base/
     | _compass_imports.sass
     | _settings.sass
     | _reset.sass
     | _colors.sass
     | _dimensions.sass
     | _typography.sass
     | _element_defaults.sass
    + /layout/          <-- only width & positioning,
     | _grid.sass             "faceless"
     | _header.sass
     | _footer.sass


!SLIDE

# Sass File structure <small>cont'd</small> #

    @@@ javascript
    + /modules/          <-- generic, independent,
     | _box.sass               design-driven
     | _button.sass
     | _data_table.sass
     | _overlay.sass
     | _datepicker.sass
    + /non-modular/      <-- "backend dev"
     | _framework_overrides.sass     "playground" ;)
     | _controller_x.sass
     | _hacks.sass

<!--  + /content_modules/    < domain-specific, data-driven
  | _article.sass
  | _user.sass
  | _comment.sass -->


!SLIDE
