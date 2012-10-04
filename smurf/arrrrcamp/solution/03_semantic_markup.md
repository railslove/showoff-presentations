!SLIDE callout

2) Get beyond the "semantic" markup myth!


!SLIDE bullets incremental

# The "Semantic" markup myth #

* Use all the **correct**, **"semantic"** **HTML5** elements and everything will be awesome!


!SLIDE bullets incremental

# What's wrong with semantic markup? #

* There is nothing __"wrong"__
* But, it's generally overrated
* And, definitely not **THE** solution for everything
* Especially not when it comes to CSS


!SLIDE

# Example: I want to style my section titles #

HTML:

    @@@ html
    <article>
      <section>
        <h3>Title</h3>
      </section>
    </article>

Sass:

    @@@ css
    article
      section
        h3
          font-weight: bold
          ...

.notes Everything is not aweseom yet,  we still don't have SkyNet even though we use semantic HTML


!SLIDE bullets incremental

# Problems with using "semantic" elements for styling #

* No separation of concerns between structure and style
* Tight coupling between CSS and specific markup<br /><br />
* Element selectors (<code>... h3</code>):
  - -> Possible performance problems
  - -> Unclear applicability (see next advice)


!SLIDE

# The modular way #

HTML:

    @@@ html
    <article>
      <section class="m-section">
        <h3 class="m-section--title">Title</h3>
      </section>
    </article>

Sass:

    @@@ css
    .m-section--title
      font-weight: bold
