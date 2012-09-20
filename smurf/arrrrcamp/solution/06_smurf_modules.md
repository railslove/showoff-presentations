!SLIDE callout

5) Write SMURF CSS modules

<!-- !SLIDE

# What is SMURF? #

* **S**calable, **M**odular, re**U**sable **R**ails **F**rontends
 -->

!SLIDE bullets incremental

# What are SMURF modules made of? #

* modules
* module components
* modifiers
* states
* submodules

!SLIDE

# SMURF module #

    @@@ CSS
    .m-box  /* module */
      border: 1px solid black

      .m-box--header /* module component */
        font-weight: bold

      .m-box--body /* module component */
        padding: 10px

      .centered /* modifier */
        text-align: center

      .is-disabled /* state */
        border-color: grey

!SLIDE

# SMURF submodule #

    @@@ CSS
    .m-box_attention /* submodule */
      @extend .m-box
      border-width: 2px
      border-color: red

      .m-box-header
        font-size: 30px

!SLIDE bullets incremental

# Features of a SMURF module #

* Context-independent
* Generic
* Single-responsibilty
