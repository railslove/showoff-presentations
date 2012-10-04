!SLIDE callout

5) Write SMURF CSS modules

<!-- !SLIDE

# What is SMURF? #

* **S**calable, **M**odular, re**U**sable **R**ails **F**rontends
 -->

!SLIDE bullets incremental

# What is SMURF CSS comprised of? #

* modules
* - module components
* - modifiers
* - states
* submodules

!SLIDE module_code

# SMURF module #

    @@@ CSS
    .m-box  /* module */
      border: 1px solid black

      &.centered /* modifier */
        text-align: center

      &.is-disabled /* state */
        border-color: grey

      .m-box--header /* module component */
        font-weight: bold

      .m-box--body /* module component */
        padding: 10px

HTML:

    @@@ HTML
    <div class="m-box centered is-disabled">
      <div class="m-box--header">TITLE</div>
      <div class="m-box--body">
        Content
      </div>
    </div>


!SLIDE module_code

# SMURF submodule #

    @@@ CSS
    .m-box_attention /* submodule */
      @extend .m-box
      border-width: 2px
      border-color: red

      .m-box--header
        font-size: 30px
        
HTML:

    @@@ HTML
    <div class="m-box_attention centered is-disabled">
      <div class="m-box--header">TITLE</div>
      <div class="m-box--body">
        Content
      </div>
    </div> 

!SLIDE bullets incremental

# What makes a good SMURF module? #

* Context-independent (e.g. flexible width)
* Generic
* Reusable
* Single-responsibilty

* [https://github.com/railslove/smurfville/wiki](https://github.com/raislove/smurfville/wiki)

.notes -> SOLID
